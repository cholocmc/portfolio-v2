"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    // On mount, sync state to current DOM class set by no-flash script
    const currentlyDark = document.documentElement.classList.contains("dark");
    setIsDark(currentlyDark);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    const body = document.body;
    const next = isDark ? "dark" : "light";
    root.classList.remove("dark", "light");
    body?.classList.remove("dark", "light");
    root.classList.add(next);
    body?.classList.add(next);
  }, [isDark, mounted]);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // ignore
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggle}
      className="h-12 w-12 rounded-2xl border border-white/15 bg-background/70 shadow-lg shadow-cyan-500/10 ring-1 ring-inset ring-white/10 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:shadow-cyan-400/20 hover:ring-cyan-300/40 motion-safe:animate-pulse hover:animate-none focus-visible:animate-none active:animate-none"
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-7 w-7" />
        ) : (
          <Moon className="h-7 w-7" />
        )
      ) : (
        <Moon className="h-7 w-7" />
      )}
    </Button>
  );
}
