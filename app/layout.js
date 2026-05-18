import "./globals.css";
import Providers from "@/components/providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LeadPopup from "@/components/ui/lead-popup";

export const metadata = {
  title: "CyberNestX",
  description: "Digital Growth Partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">

        <Providers>

          {/* 🔥 GLOBAL NAVBAR */}
          <Navbar />

          {/* 🔥 POPUP (GLOBAL OVERLAY) */}
          <LeadPopup />

          {/* 🔥 MAIN CONTENT */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* 🔥 GLOBAL FOOTER */}
          <Footer />

        </Providers>

      </body>
    </html>
  );
}