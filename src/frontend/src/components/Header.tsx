import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Shirt, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? currentPath === "/" : currentPath.startsWith(path);

  return (
    <header
      className={`sticky top-0 z-50 bg-primary border-b-2 border-accent transition-smooth ${
        scrolled ? "shadow-elevated" : ""
      }`}
      data-ocid="header-nav"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="JADAV UNIFORM Home"
          >
            <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center transition-smooth group-hover:scale-105">
              <Shirt className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold text-primary-foreground tracking-wide">
                JADAV
              </span>
              <span className="font-body text-[10px] font-semibold text-accent tracking-[0.2em] uppercase">
                UNIFORM
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 font-body text-sm font-semibold tracking-wide transition-smooth rounded-sm
                  ${
                    isActive(link.to)
                      ? "text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
                      : "text-primary-foreground/80 hover:text-accent"
                  }`}
                aria-current={isActive(link.to) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="ml-3">
              <Button
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold transition-smooth border-0"
                data-ocid="header-cta-btn"
              >
                Inquire Now
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary/80 hover:text-accent"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            data-ocid="mobile-menu-toggle"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {menuOpen && (
        <div
          className="md:hidden bg-primary border-t border-primary-foreground/10 animate-slide-up"
          data-ocid="mobile-menu"
        >
          <nav
            className="container mx-auto px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 font-body font-semibold text-base rounded-md transition-smooth
                  ${
                    isActive(link.to)
                      ? "text-accent bg-primary-foreground/10 border-l-2 border-accent"
                      : "text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/5"
                  }`}
                aria-current={isActive(link.to) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2"
              onClick={() => setMenuOpen(false)}
            >
              <Button
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                data-ocid="mobile-cta-btn"
              >
                Inquire Now
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
