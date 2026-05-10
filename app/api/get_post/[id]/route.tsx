import { NextRequest, NextResponse } from "next/server" ;

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: number }> }) {
    try {
        const { id } = await params;
        let response = await fetch(`https://dummyjson.com/posts/${id}`, {
            next: { revalidate: 2 } 
        })

        let Post = await response.json() || [];

        return NextResponse.json(Post); 
    } catch (error) {
        console.error("Fetch error:", error);
        return NextResponse.json({ error: "Failed to fetch post data" }, { status: 500 });
    }
    
}