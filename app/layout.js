import "./globals.css";
import Providers from "@/components/providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LeadPopup from "@/components/ui/lead-popup";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "@/components/scrollToTop";

export const metadata = {
  title: "CyberNestX",
  description: "Digital Growth Partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">

        <Providers>

          {/* ✅ ADD THIS HERE */}
          <ScrollToTop />

          {/* 🔥 GLOBAL NAVBAR */}
          <Navbar />

          {/* 🔥 TOASTER */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "var(--background)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
              },
              success: {
                duration: 4000,
                style: {
                  background: "#ecfdf5",
                  color: "#065f46",
                  border: "1px solid #6ee7b7",
                },
                iconTheme: {
                  primary: "#10b981",
                  secondary: "#ecfdf5",
                },
              },
              error: {
                duration: 4000,
                style: {
                  background: "#fef2f2",
                  color: "#991b1b",
                  border: "1px solid #fca5a5",
                },
                iconTheme: {
                  primary: "#ef4444",
                  secondary: "#fef2f2",
                },
              },
            }}
          />

          {/* 🔥 POPUP */}
          <LeadPopup />

          {/* 🔥 MAIN CONTENT */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* 🔥 FOOTER */}
          <Footer />

        </Providers>

      </body>
    </html>
  );
}