import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// Mock Data for the frontend preview
const mockIssues: Record<string, { id: string, publishDate: string, title: string, pdfUrl: string }> = {
  "1": { id: "1", publishDate: "2026-07-01", title: "Global Summit Reaches Agreement", pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
  "latest": { id: "1", publishDate: "2026-07-01", title: "Global Summit Reaches Agreement", pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }
};

export default async function IssuePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const issue = mockIssues[resolvedParams.id] || mockIssues["1"];

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)]">
      <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/20 shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-semibold">{issue.title}</h1>
            <p className="text-xs text-muted-foreground">
              {new Date(issue.publishDate).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
        <div className="text-sm">
          <a href={issue.pdfUrl} download className="text-primary hover:underline font-medium">Download PDF</a>
        </div>
      </div>
      
      {/* PDF Viewer Container */}
      <div className="flex-1 w-full bg-zinc-200 dark:bg-zinc-900 relative">
        <iframe 
          src={`${issue.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
          className="w-full h-full border-none absolute inset-0"
          title={issue.title}
        />
      </div>
    </div>
  )
}
