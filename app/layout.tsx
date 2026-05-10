import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"; 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextBlog | Explore Stories",
  description: "A modern platform for thoughts and stories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body 
        className="min-h-full flex flex-col  bg-black text-white selection:bg-fuchsia-500/30" 
        suppressHydrationWarning={true}
      >
        
        {/* Navigation Bar - Sticky & Glassmorphism */}
        <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-fuchsia-950/70 backdrop-blur-lg px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-black tracking-tighter hover:opacity-80 transition-opacity">
              NEXT<span className="text-fuchsia-500">BLOG</span>
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-8">
              <Link 
                href="/" 
                className="text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              
              <Link href="/Posts">
                <button className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-[11px] uppercase tracking-wider font-black px-6 py-2.5 rounded-full transition-all shadow-lg shadow-fuchsia-950/50 active:scale-95">
                  Explore Posts
                </button>
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>

        {/*  Footer */}
        <footer className="w-full py-6">
          <div className="max-w-7xl mx-auto border-t border-white/5 pt-6 text-center">
            <p className="text-[9px] tracking-[0.3em] uppercase text-zinc-500 opacity-40 font-medium">
              © 2026 NextBlog • Designed by You • Built with Next.js
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}