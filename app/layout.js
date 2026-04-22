import "./globals.css";
import Providers from "@/components/providers";

export const metadata = {
  title: "CyberNestX",
  description: "Digital Growth Partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}