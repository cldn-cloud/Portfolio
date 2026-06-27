"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun, Menu } from "lucide-react";
import { useResolvedTheme } from "@/hooks/useResolvedThemes";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { isMounted } = useResolvedTheme();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md border-b px-6 border-border bg-background/80">
      <div className="w-full flex items-center justify-between h-[65px] max-w-5xl mx-auto">
        {/* Left: Logo */}
        <h1 className="text-lg font-bold">Claudine</h1>

        {/* Center: Desktop Navigation (Hidden on Mobile) */}
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="cursor-pointer text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Actions (Theme, CV, & Mobile Menu Trigger) */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
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

          {/* Download CV (Hidden on small mobile screens to prevent layout crowding) */}
          <Button className="hidden sm:inline-flex">Download CV</Button>

          {/* Mobile Navigation Trigger (Hidden on Desktop) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open Menu">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] pt-12">
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-7 mt-4 px-4">
                  <ul className="flex flex-col gap-4 text-base font-medium">
                    {navLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {/* Duplicate the CV download button inside the sheet view for ultra-small mobile screens */}
                  <Button className="w-full sm:hidden mt-2">Download CV</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
