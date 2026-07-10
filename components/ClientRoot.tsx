"use client";

import { ReactNode } from "react";
import { ConnectModalProvider } from "./ConnectModalContext";
import { ThemeProvider } from "./ThemeContext";
import ConnectModal from "./ConnectModal";
import BackToTop from "./BackToTop";

export default function ClientRoot({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ConnectModalProvider>
        {children}
        <ConnectModal />
        <BackToTop />
      </ConnectModalProvider>
    </ThemeProvider>
  );
}
