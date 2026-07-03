"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

const ModalContext = createContext(null);

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [active, setActive] = useState(null); // 'repair' | 'rent' | null

  const open = useCallback((t) => setActive(t), []);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <ModalContext.Provider value={{ active, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

// Helper for buttons that either open a modal or smooth-scroll to a section.
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
