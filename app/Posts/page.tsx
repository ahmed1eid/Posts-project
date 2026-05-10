import PostCard, { PostProps } from "./[post_id]/Post";

export default async function Posts() {

    let posts = [];
    try {
        const response = await fetch('https://dummyjson.com/posts', {
            next: { revalidate: 2 } 
        });
        const data = await response.json();
        posts = data.posts;
    } catch (error) {
        console.error("Fetch error:", error);
    }

    return (
        <div className="min-h-screen bg-blue-950 font-sans dark:bg-black py-12 px-6 sm:px-12">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-16 text-center sm:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                    Latest <span className="text-blue-400">Stories</span>
                </h1>
                <p className="text-blue-200/60 text-lg max-w-2xl">
                    Explore the latest insights, thoughts, and discussions from our community. 
                </p>
            </div>

            {/* Posts Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {posts.length > 0 ? (
                        posts.map((p: PostProps) => (
                            <PostCard key={p.id} {...p} />
                        ))
                    ) : (
                        <p className="text-white">Loading or No posts found...</p>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-20 text-center text-blue-300/30 text-sm">
                Showing {posts.length} posts from DummyJSON API
            </div>
        </div>
    );
}