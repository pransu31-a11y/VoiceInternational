import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { getWhatsAppLink } from "@/data/products";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Categories", path: "/categories" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Bar */}
      <div style={{ background: "hsl(var(--primary) / 0.08)", borderBottom: "1px solid hsl(var(--border))" }} className="hidden md:block">
        <div className="container mx-auto flex items-center justify-between py-2 px-4 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone size={12} /> +91 98765 43210
            </a>
            <a href="mailto:info@autoluxe.in" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail size={12} /> info@autoluxe.in
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Mon–Sat: 9 AM – 7 PM</span>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp !text-xs !px-3 !py-1">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-2xl" : ""}`}
        style={{
          background: scrolled
            ? "hsl(var(--background) / 0.97)"
            : "hsl(var(--background) / 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${scrolled ? "hsl(var(--border))" : "transparent"}`,
        }}
      >
        <div className="container mx-auto flex items-center justify-between px-4 h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center font-rajdhani font-bold text-xl transition-all duration-300 group-hover:scale-110"
              style={{ background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))", boxShadow: "var(--shadow-primary)" }}
            >
              VI
            </div>
            <div>
              <div className="font-rajdhani font-bold text-xl leading-none" style={{ color: "hsl(var(--foreground))" }}>
                Voice<span style={{ color: "hsl(var(--primary))" }}>Inetrnational</span>
              </div>
              <div className="text-xs leading-none" style={{ color: "hsl(var(--muted-foreground))" }}>
                Premium Auto Accessories
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                style={{ fontSize: "0.95rem" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="btn-outline !px-4 !py-2 !text-xs">
              Get Quote
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp !px-4 !py-2 !text-xs"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "hsl(var(--foreground))", background: "hsl(var(--muted))" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden border-t animate-fade-in"
            style={{ background: "hsl(var(--background-secondary))", borderColor: "hsl(var(--border))" }}
          >
            <div className="container mx-auto py-4 px-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-3 px-4 rounded-lg font-rajdhani font-semibold text-base transition-all duration-200 ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                  style={{ letterSpacing: "0.05em" }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 mt-3 pt-3" style={{ borderTop: "1px solid hsl(var(--border))" }}>
                <Link to="/contact" className="btn-outline flex-1 !text-xs !py-2.5 text-center">
                  Get Quote
                </Link>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex-1 !text-xs !py-2.5 text-center">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
