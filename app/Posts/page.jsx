import Link from "next/link";
import Post from "./post";

export default async function Posts() {

  const response = await fetch('https://dummyjson.com/posts')
  const data = await response.json();
  const posts = data.posts
  console.log(data.posts[0])
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-fuchsia-950 font-sans dark:bg-black">
      <Post PostData={posts[0]} />
    </div>
  );
}
