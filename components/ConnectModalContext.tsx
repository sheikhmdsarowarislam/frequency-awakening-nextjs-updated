"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ConnectModalContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const ConnectModalContext = createContext<ConnectModalContextValue | null>(null);

export function ConnectModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ConnectModalContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </ConnectModalContext.Provider>
  );
}

export function useConnectModal() {
  const ctx = useContext(ConnectModalContext);
  if (!ctx) {
    throw new Error("useConnectModal must be used within a ConnectModalProvider");
  }
  return ctx;
}
