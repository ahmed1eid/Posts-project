import Link from "next/link";
import { EyeIcon, ChevronLeft } from "lucide-react";

export default async function Loading( ) {
  
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
                    {["loading", "loading", "loading"].map((tag, index) => (
                        <span key={index} className="text-[10px] bg-fuchsia-500/20 text-fuchsia-300 px-3 py-1 rounded-full font-bold uppercase tracking-tighter">
                            #{tag}
                        </span>
                    ))}
                </div>

                <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
                    post title
                </h1>

                <p className="text-fuchsia-100/80 text-lg md:text-xl leading-relaxed mb-12 font-light">
                    post content
                </p>
                
                <div className="pt-8 border-t border-white/5 flex items-center justify-between text-zinc-500">
                    <div className="flex items-center gap-2 text-sm">
                        <EyeIcon className="w-4 h-4" />
                        <span className="font-medium"> Views</span>
                    </div>
                    
                    <div className="flex gap-4 text-xs font-mono uppercase">
                        <span className="text-green-500">👍 likes</span>
                        <span className="text-red-500">👎 dislikes</span>
                    </div>
                </div>
            </div>
        </div>
    );
}