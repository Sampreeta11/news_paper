import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { BookOpen } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-primary text-primary-foreground shadow-md">
      <div className="container flex h-16 max-w-7xl mx-auto items-center justify-between px-4 md:px-8">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <span className="inline-block font-extrabold text-lg">ದೈನಂದಿನ ಸುದ್ದಿ</span>
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/"
              className="flex items-center text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              ಮುಖಪುಟ (Home)
            </Link>
            <Link
              href="/archive"
              className="flex items-center text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              ಆರ್ಕೈವ್ (Archive)
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground hidden sm:block transition-colors">
            Dashboard
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
