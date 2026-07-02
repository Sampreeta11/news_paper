import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

// Mock Data for the frontend preview
const mockIssues = [
  { id: "1", publishDate: "2026-07-01", title: "Global Summit Reaches Agreement" },
  { id: "2", publishDate: "2026-06-30", title: "Tech Stocks Surge Amid Innovation" },
  { id: "3", publishDate: "2026-06-29", title: "New Transport Hub Opens" },
  { id: "4", publishDate: "2026-06-28", title: "Weekend Special Edition" },
  { id: "5", publishDate: "2026-06-27", title: "Sports Highlight of the Week" },
  { id: "6", publishDate: "2026-06-26", title: "Market Review" },
];

export default function ArchivePage() {
  return (
    <div className="flex flex-col items-center py-12 px-4 md:px-8">
      <div className="w-full max-w-7xl">
        <div className="mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold tracking-tight">ಹಿಂದಿನ ಆವೃತ್ತಿಗಳು (Past Editions)</h1>
          <p className="text-muted-foreground mt-2">ಬ್ರೌಸ್ ಮಾಡಿ ಮತ್ತು ಹಳೆಯ ಪತ್ರಿಕೆಗಳನ್ನು ಓದಿ (Browse and read older newspapers).</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockIssues.map(issue => (
            <Link href={`/issue/${issue.id}`} key={issue.id}>
              <Card className="hover:border-primary/50 transition-colors cursor-pointer group h-full">
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="w-4 h-4" />
                    <time dateTime={issue.publishDate}>
                      {new Date(issue.publishDate).toLocaleDateString(undefined, { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}
                    </time>
                  </div>
                  <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                    {issue.title}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
