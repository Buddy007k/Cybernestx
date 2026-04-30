"use client";

import { ThemeProvider } from "next-themes";
import PageTransition from "@/components/pageTransition";
import Loader from "@/components/loader";
import CursorGlow from "@/components/cursorGlow";

export default function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
    >
      <CursorGlow />
      <Loader>
        <PageTransition>{children}</PageTransition>
      </Loader>
    </ThemeProvider>
  );
}
