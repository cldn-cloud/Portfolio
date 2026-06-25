"use client";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useResolvedTheme } from "@/hooks/useResolvedThemes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { isMounted } = useResolvedTheme();

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-border bg-background/80">
      <div className="w-full flex items-center justify-between px-6 md:px-10 h-[65px] max-w-7xl mx-auto">
        <h1 className="text-lg font-bold">Claudine</h1>

        <ul className="flex items-center gap-6 text-sm">
          <li className="cursor-pointer hover:text-primary transition-colors">
            Home
          </li>
          <li className="cursor-pointer hover:text-primary transition-colors">
            Projects
          </li>
          <li className="cursor-pointer hover:text-primary transition-colors">
            Skills
          </li>
          <li className="cursor-pointer hover:text-primary transition-colors">
            Contact
          </li>
        </ul>

        {/* Added 'flex gap-3' here so your buttons sit nicely next to each other */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            {!isMounted ? (
              <span className="h-4 w-4" />
            ) : theme === "light" ? (
              <Moon size={16} />
            ) : (
              <Sun size={16} />
            )}
          </Button>

          <Button size="sm">Download CV</Button>
        </div>
      </div>
    </nav>
  );
}
