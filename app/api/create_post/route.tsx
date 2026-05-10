import { NextRequest, NextResponse } from "next/server" ;

export async function POST(request: NextRequest) {
    try {
        if (request.body) {

            const body = await request.json();

            let response = await fetch('https://dummyjson.com/posts/add', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body),
                next: { revalidate: 2 }
            })


            return NextResponse.json({ message: "Post created successfully", data: await response.json() }, { status: 201 });
        }else {
            return NextResponse.json({ error: "No data provided" }, { status: 400 });
        }
        
    } catch (error) {
        console.error("Fetch error:", error);
        return NextResponse.json({ error: "Failed to fetch post data" }, { status: 500 });
    }
    
}