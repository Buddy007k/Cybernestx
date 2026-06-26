"use client";

import { ThemeProvider } from "next-themes";
import PageTransition from "@/components/pageTransition";
// import Loader from "@/components/loader";
import CursorGlow from "@/components/cursorGlow";
import { AuthProvider } from "@/context/AuthContext";

export default function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
    >
      <AuthProvider>
        <CursorGlow />
        {/* <Loader> */}
          <PageTransition>{children}</PageTransition>
        {/* </Loader> */}
      </AuthProvider>
    </ThemeProvider>
  );
}
