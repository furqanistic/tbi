import { useState, useEffect } from "react";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Courses", href: "#courses" },
  { name: "Faculty", href: "#faculty" },
  { name: "Resources", href: "#resources" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300 pointer-events-none">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 pointer-events-auto">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-105 active:scale-95">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground/90">
            TBI
          </span>
        </div>

        {/* Center: Floating Pill Menu (Desktop) */}
        <nav
          className={cn(
            "hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-500",
            isScrolled
              ? "glass shadow-2xl scale-105 translate-y-2 ring-1 ring-primary/10"
              : "bg-transparent ring-0"
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={cn(
                "relative px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full",
                activeLink === link.name
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {link.name}
              {activeLink === link.name && (
                <span className="sr-only">(current)</span>
              )}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <ModeToggle />
            <Button
              variant="ghost"
              className="text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full px-5"
            >
              Log In
            </Button>
          </div>
          <Button className="rounded-full bg-primary text-sm font-semibold text-white shadow-[0_10px_20px_-5px_rgba(59,130,246,0.4)] hover:shadow-[0_20px_25px_-5px_rgba(59,130,246,0.5)] transition-all hover:-translate-y-0.5 active:translate-y-0 px-6">
            Enroll Now
          </Button>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center">
            {!isScrolled && <ModeToggle className="mr-2" />}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="flex flex-col gap-8 w-80 glass border-l-primary/10"
              >
                <SheetHeader className="text-left">
                  <SheetTitle className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <span className="text-xl font-bold">TBI</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="group flex items-center justify-between px-4 py-3 rounded-xl transition-all hover:bg-primary/5"
                    >
                      <span className="text-base font-medium text-muted-foreground group-hover:text-primary transition-colors">
                        {link.name}
                      </span>
                      <ChevronDown className="-rotate-90 h-4 w-4 text-muted-foreground group-hover:text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
                <div className="mt-auto space-y-3 pb-8 px-2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-muted-foreground">
                      Appearance
                    </span>
                    <ModeToggle />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full rounded-2xl border-primary/20 text-primary hover:bg-primary/5 h-12 text-base font-bold"
                  >
                    Log In
                  </Button>
                  <Button className="w-full rounded-2xl bg-primary text-white shadow-lg h-12 text-base font-bold transition-all active:scale-95">
                    Enroll Now
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
