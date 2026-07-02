import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Newspaper } from "lucide-react"
import { HeroCarousel } from "@/components/HeroCarousel"

// Mock Data for the frontend preview
const mockIssues = [
  { id: "1", publishDate: "2026-07-01", title: "Global Summit Reaches Agreement" },
  { id: "2", publishDate: "2026-06-30", title: "Tech Stocks Surge Amid Innovation" },
  { id: "3", publishDate: "2026-06-29", title: "New Transport Hub Opens" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center pb-12 w-full">
      {/* Newspaper Header Section with Carousel */}
      <div className="w-full relative text-white border-b border-primary/20 overflow-hidden min-h-[60vh] flex flex-col justify-end">
        <HeroCarousel />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center pb-16 px-4 relative z-20 w-full">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-xl text-white">
            ದೈನಂದಿನ ಸುದ್ದಿ
          </h1>
          <p className="text-lg md:text-2xl font-medium max-w-3xl text-zinc-100 drop-shadow-lg">
            ಸಂಪೂರ್ಣ ಡಿಜಿಟಲ್ ಪತ್ರಿಕೆಯನ್ನು ನೇರವಾಗಿ ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಓದಿ. ಇಂದಿನ ಮುಖ್ಯಾಂಶಗಳನ್ನು ತಿಳಿಯಿರಿ ಅಥವಾ ಆರ್ಕೈವ್ ಬ್ರೌಸ್ ಮಾಡಿ.
          </p>
          <div className="mt-8">
            <Link href="/issue/latest" className="inline-flex h-14 items-center justify-center rounded bg-primary text-primary-foreground border border-primary/50 px-10 text-lg font-bold shadow-xl transition-all hover:bg-primary/90">
              <Newspaper className="w-6 h-6 mr-3" />
              ಇಂದಿನ ಆವೃತ್ತಿಯನ್ನು ಓದಿ
            </Link>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-7xl px-4 md:px-8 mt-12">
        <div className="flex items-center justify-between mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold tracking-tight">ಇತ್ತೀಚಿನ ಆವೃತ್ತಿಗಳು (Recent Editions)</h2>
          <Link href="/archive" className="text-sm font-semibold text-primary hover:underline">
            ಎಲ್ಲವನ್ನೂ ವೀಕ್ಷಿಸಿ →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockIssues.map(issue => (
            <Link href={`/issue/${issue.id}`} key={issue.id} className="group">
              <Card className="h-full rounded-sm border transition-shadow hover:shadow-md bg-card">
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Thumbnail Placeholder */}
                  <div className="w-full aspect-[3/4] bg-muted border-b flex items-center justify-center text-muted-foreground group-hover:bg-muted/80 transition-colors">
                    <Newspaper className="w-16 h-16 opacity-20" />
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                      <CalendarDays className="w-4 h-4" />
                      <time dateTime={issue.publishDate}>
                        {new Date(issue.publishDate).toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}
                      </time>
                    </div>
                    <h3 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors">
                      {issue.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
