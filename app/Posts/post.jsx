import Link from "next/link";
import { EyeIcon, UserIcon } from "lucide-react"; // إذا كنت تستخدم مكتبة أيقونات، أو يمكنك استخدام نص عادي

export default function Post({ PostData }) {
  return (
    <div className="max-w-md w-full bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group shadow-xl">
      
      {/* الجزء العلوي: معلومات الكاتب */}
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-fuchsia-500/20 rounded-full">
          <UserIcon className="w-4 h-4 text-fuchsia-400" />
        </div>
        <span className="text-xs font-medium text-fuchsia-300 uppercase tracking-wider">
          User ID: {PostData.userId}
        </span>
      </div>

      {/* العنوان */}
      <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-fuchsia-400 transition-colors capitalize">
        {PostData.title}
      </h2>

      {/* المحتوى */}
      <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
        {PostData.body}
      </p>

      {/* الجزء السفلي: المشاهدات وزر التفاصيل */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center gap-1.5 text-zinc-500">
          <EyeIcon className="w-4 h-4" />
          <span className="text-xs font-semibold">{PostData.views || 0} views</span>
        </div>

        <Link 
          href={`/posts/${PostData.id}`} 
          className="text-xs font-bold text-white bg-fuchsia-600 hover:bg-fuchsia-500 px-4 py-2 rounded-lg transition-colors shadow-lg shadow-fuchsia-900/20"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}