import Image from "next/image";

export default async function Home() {
  let data = [];

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(5000) // توقف بعد 5 ثوانٍ لو الإنترنت معلق
    });
    
    if (response.ok) {
      data = await response.json();
    }
  } catch (error) {
    console.log("Network failed, using static fallback info");
    data = [{ id: 1, title: "Offline Preview" }];
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-indigo-950 font-sans w-full min-h-[calc(100vh-140px)]">
      
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-20 px-8 sm:items-start text-white">
        
        <Image
          className="dark:invert mb-12"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-4xl font-extrabold leading-tight tracking-tight text-white italic">
             My First <span className="text-fuchsia-500">Next.js</span> App
          </h1>
          
          <p className="max-w-md text-lg leading-8 text-indigo-200/70">
            Welcome, Ahmed! This is your applied project. Check the latest stories fetched from the server.
          </p>
        </div>

        {/* عرض حالة بسيطة للبيانات للتأكد من أنها تعمل */}
        <div className="mt-8 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] text-indigo-300">
           Status: {data.length > 1 ? "Connected to API" : "Working Offline Mode"}
        </div>

        <div className="flex flex-col gap-4 mt-10 text-base font-medium sm:flex-row w-full sm:w-auto">
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-fuchsia-600 text-white px-8 transition-all hover:bg-fuchsia-500 hover:scale-105 shadow-lg shadow-fuchsia-950/20"
            href="/Posts"
          >
            Explore All Posts
          </a>
          
          <a
            className="flex h-12 items-center justify-center rounded-full border border-white/20 px-8 transition-colors hover:bg-white/10 text-white"
            href="https://nextjs.org/docs"
            target="_blank"
          >
            NEXT Documentation
          </a>
        </div>
      </main>
    </div>
  );
}