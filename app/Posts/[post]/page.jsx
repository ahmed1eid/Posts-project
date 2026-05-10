import Link from "next/link";
import { EyeIcon, ChevronLeft } from "lucide-react";

export default async function PostDetails({ params }) {
    const { post } = await params;

    console.log(post)
    let postData = null;
    try {
        const response = await fetch(`https://dummyjson.com/posts/${post}`, {
            next: { revalidate: 3600 } 
        });
        if (response.ok) {
            postData = await response.json();
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }

    // حالة 404
    if (!postData || postData.message) {
        return (
            <div className="min-h-screen bg-fuchsia-950 text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl font-black text-fuchsia-500 mb-4">404</h1>
                    <p className="text-fuchsia-200">عذراً، هذا المنشور غير موجود!</p>
                    <Link href="/Posts" className="mt-6 inline-block bg-white/10 px-6 py-2 rounded-full text-sm">عودة للمقالات</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-fuchsia-950 text-white p-8 md:p-20">
            <div className="max-w-3xl mx-auto">
                {/* زر العودة بالأيقونة */}
                <Link 
                    href="/Posts" 
                    className="inline-flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 transition-colors mb-12 group text-xs font-bold uppercase tracking-widest"
                >
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to all stories
                </Link>

                {/* تصنيف المنشور (Tags) */}
                <div className="flex gap-2 mb-6">
                    {postData.tags?.map(tag => (
                        <span key={tag} className="text-[10px] bg-fuchsia-500/20 text-fuchsia-300 px-3 py-1 rounded-full font-bold uppercase tracking-tighter">
                            #{tag}
                        </span>
                    ))}
                </div>

                <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
                    {postData.title}
                </h1>

                <p className="text-fuchsia-100/80 text-lg md:text-xl leading-relaxed mb-12 font-light">
                    {postData.body}
                </p>
                
                <div className="pt-8 border-t border-white/5 flex items-center justify-between text-zinc-500">
                    <div className="flex items-center gap-2 text-sm">
                        <EyeIcon className="w-4 h-4" />
                        <span className="font-medium">{postData.views.toLocaleString()} Views</span>
                    </div>
                    
                    <div className="flex gap-4 text-xs font-mono uppercase">
                        <span className="text-green-500">👍 {postData.reactions?.likes}</span>
                        <span className="text-red-500">👎 {postData.reactions?.dislikes}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}