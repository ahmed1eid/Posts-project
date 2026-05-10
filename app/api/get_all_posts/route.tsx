import { NextRequest, NextResponse } from "next/server" ;

export async function GET(request: NextRequest) {
    try {
        let response = await fetch('https://dummyjson.com/posts', {
            next: { revalidate: 2 } 
        })

        let Posts = await response.json() || [];

        return NextResponse.json(Posts);
    }
    catch (error) {
        return NextResponse.json("  Error fetching posts: " + error, { status: 500 });
    } 
}