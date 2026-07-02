import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BookOpen, LayoutDashboard, FileUp, Settings, LogOut } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-primary-foreground flex flex-col hidden md:flex shrink-0 shadow-lg">
        <div className="h-16 flex items-center px-6 border-b border-primary-foreground/20 shrink-0">
          <Link href="/" className="flex items-center gap-2 font-extrabold text-lg">
            <BookOpen className="h-5 w-5" />
            <span>ದೈನಂದಿನ ಸುದ್ದಿ (Admin)</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-6">
          <nav className="grid gap-2 px-4 text-sm font-semibold">
            <Link href="/dashboard" className="flex items-center gap-3 rounded-md px-3 py-2.5 bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20">
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </Link>
            <Link href="/dashboard/upload" className="flex items-center gap-3 rounded-md px-3 py-2.5 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/20 hover:text-primary-foreground">
              <FileUp className="h-4 w-4" />
              Upload Issue
            </Link>
            <Link href="/dashboard/settings" className="flex items-center gap-3 rounded-md px-3 py-2.5 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/20 hover:text-primary-foreground">
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
        <div className="p-4 border-t border-primary-foreground/20 mt-auto">
          <button className="flex items-center gap-3 rounded-md px-3 py-2.5 w-full text-sm font-semibold text-primary-foreground/80 transition-colors hover:bg-primary-foreground/20 hover:text-primary-foreground text-left">
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col max-w-full overflow-hidden">
        <header className="h-16 border-b flex items-center justify-end px-4 shrink-0 bg-background shadow-sm">
          <ThemeToggle />
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-8 bg-muted/10">
          {children}
        </main>
      </div>
    </div>
  );
}
