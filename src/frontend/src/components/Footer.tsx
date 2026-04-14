import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Shirt } from "lucide-react";

const year = new Date().getFullYear();
const hostname = typeof window !== "undefined" ? window.location.hostname : "";
const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

const categories = [
  { label: "School Uniforms", to: "/shop" },
  { label: "College Uniforms", to: "/shop" },
  { label: "Sports Kits", to: "/shop" },
  { label: "Blazers & Jackets", to: "/shop" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t-2 border-accent">
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center">
                <Shirt className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold text-primary-foreground">
                  JADAV
                </span>
                <span className="font-body text-[10px] font-semibold text-accent tracking-[0.2em] uppercase">
                  UNIFORM
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-primary-foreground/70 mb-5 leading-relaxed">
              Bharatiya schools aur colleges ke liye premium quality uniforms.
              Vishwaas aur quality ki pehchaan.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:border-accent transition-smooth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:border-accent transition-smooth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-accent mb-4 text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display font-bold text-accent mb-4 text-sm uppercase tracking-widest">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <Link
                    to={cat.to}
                    className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-smooth"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-accent mb-4 text-sm uppercase tracking-widest">
              Sampark Karein
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>
                  Main Market, Uniform Bazar,
                  <br />
                  Rajkot, Gujarat 360001
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-primary-foreground/70 hover:text-accent transition-smooth"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="mailto:info@jadavuniform.com"
                  className="text-primary-foreground/70 hover:text-accent transition-smooth"
                >
                  info@jadavuniform.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-primary-foreground/50">
            © {year} JADAV UNIFORM. Sab haq surakshit hain.
          </p>
          <a
            href={utmLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-primary-foreground/40 hover:text-accent transition-smooth"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
