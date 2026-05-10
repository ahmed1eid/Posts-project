import { NextRequest, NextResponse } from "next/server" ;

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
                
        let response = await fetch(`https://dummyjson.com/posts/${id}`, {
            method: "DELETE",
        })

        if (!response.ok) {
            return NextResponse.json(
                { error: `External API error: ${response.statusText}` }, 
                { status: response.status }
            );
        }

        let Post = await response.json() || [];

        return NextResponse.json(Post); 
    } catch (error) {
        console.error("Fetch error:", error);
        return NextResponse.json({ error: "Failed to fetch post data" }, { status: 500 });
    }
    
}