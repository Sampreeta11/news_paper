import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { BookOpen, MapPin, Phone, Mail } from "lucide-react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About Section */}
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center space-x-2 text-primary">
                <BookOpen className="h-6 w-6" />
                <span className="inline-block font-extrabold text-xl">ದೈನಂದಿನ ಸುದ್ದಿ</span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                ಸಂಪೂರ್ಣ ಡಿಜಿಟಲ್ ಪತ್ರಿಕೆಯನ್ನು ನೇರವಾಗಿ ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಓದಿ. ನಿಖರವಾದ ಹಾಗೂ ವಿಶ್ವಾಸಾರ್ಹ ಸುದ್ದಿಗಳಿಗಾಗಿ ನಮ್ಮ ಇ-ಪೇಪರ್ ಓದಿ.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg text-foreground">ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು (Links)</h3>
              <nav className="flex flex-col gap-3 text-sm text-muted-foreground mt-2">
                <Link href="/" className="hover:text-primary transition-colors">ಮುಖಪುಟ (Home)</Link>
                <Link href="/archive" className="hover:text-primary transition-colors">ಆರ್ಕೈವ್ (Archive)</Link>
                <Link href="/dashboard" className="hover:text-primary transition-colors">Admin Login</Link>
              </nav>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg text-foreground">ಸಂಪರ್ಕಿಸಿ (Contact Us)</h3>
              <ul className="flex flex-col gap-4 text-sm text-muted-foreground mt-2">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="leading-tight">
                    #123, ಸುದ್ದಿ ಭವನ, ಮುಖ್ಯ ರಸ್ತೆ,<br />
                    ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ 560001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+91 80 1234 5678</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>contact@dailynews.example.com</span>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="flex flex-col gap-4 h-64 lg:h-full">
              <h3 className="font-bold text-lg text-foreground">ಸ್ಥಳ (Location)</h3>
              <div className="w-full h-full min-h-[180px] rounded-md overflow-hidden border mt-2 shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.23439401831!2d77.5750275525547!3d12.970173663674681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1717000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} ದೈನಂದಿನ ಸುದ್ದಿ (The Daily News). All rights reserved.</p>
            <p>Designed for Digital E-Paper Platform</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
