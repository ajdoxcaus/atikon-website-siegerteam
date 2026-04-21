import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";

type TerminFunnelContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const TerminFunnelContext = createContext<TerminFunnelContextValue | null>(null);

export function TerminFunnelProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <TerminFunnelContext.Provider value={{ isOpen, open, close }}>
      {children}
    </TerminFunnelContext.Provider>
  );
}

export function useTerminFunnel() {
  const ctx = useContext(TerminFunnelContext);
  if (!ctx) throw new Error("useTerminFunnel must be used within TerminFunnelProvider");
  return ctx;
}
