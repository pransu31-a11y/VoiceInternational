import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { categories, getWhatsAppLink } from "@/data/products";

const Footer = () => {
  return (
    <footer style={{ background: "hsl(220 22% 4%)", borderTop: "1px solid hsl(var(--border))" }}>
      {/* Newsletter Strip */}
      <div style={{ background: "var(--gradient-primary)" }} className="py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-rajdhani text-2xl font-bold text-white">Stay Updated with Latest Products</h3>
            <p className="text-white/80 text-sm mt-1">Subscribe to our newsletter for exclusive deals & product launches</p>
          </div>
          <form className="flex gap-3 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-72 px-4 py-3 rounded-md text-sm outline-none"
              style={{ background: "hsl(0 0% 100% / 0.15)", color: "white", border: "1px solid hsl(0 0% 100% / 0.3)" }}
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-md font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: "hsl(var(--background))", color: "hsl(var(--primary))" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-rajdhani font-bold text-xl"
                style={{ background: "var(--gradient-primary)" }}
              >
                VI
              </div>
              <div>
                <div className="font-rajdhani font-bold text-xl" style={{ color: "hsl(var(--foreground))" }}>
                  Voice<span style={{ color: "hsl(var(--primary))" }}>International</span>
                </div>
                <div className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>Premium Auto Accessories</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "hsl(var(--muted-foreground))" }}>
              India's trusted brand for premium automobile accessories. Lighting, audio, safety, and more — all at competitive prices.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Youtube, href: "#" },
                { Icon: Twitter, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "hsl(var(--primary))";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "hsl(var(--muted))";
                    (e.currentTarget as HTMLElement).style.color = "hsl(var(--muted-foreground))";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-rajdhani font-bold text-lg mb-5" style={{ color: "hsl(var(--foreground))" }}>
              Categories
            </h4>
            <ul className="space-y-2.5">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/categories`}
                    className="text-sm transition-colors duration-200 hover:text-primary flex items-center gap-2"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--primary))" }} />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-rajdhani font-bold text-lg mb-5" style={{ color: "hsl(var(--foreground))" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "All Products", path: "/products" },
                { label: "About Us", path: "/about" },
                { label: "Contact Us", path: "/contact" },
                { label: "WhatsApp Enquiry", path: getWhatsAppLink(), external: true },
              ].map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors duration-200 hover:text-primary flex items-center gap-2"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--accent))" }} />
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-sm transition-colors duration-200 hover:text-primary flex items-center gap-2"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--accent))" }} />
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-rajdhani font-bold text-lg mb-5" style={{ color: "hsl(var(--foreground))" }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "hsl(var(--primary))" }} />
                <span className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                  123, Industrial Area, Sector 7, New Delhi – 110001, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0" style={{ color: "hsl(var(--primary))" }} />
                <a href="tel:+919876543210" className="text-sm hover:text-primary transition-colors" style={{ color: "hsl(var(--muted-foreground))" }}>
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0" style={{ color: "hsl(var(--primary))" }} />
                <a href="mailto:info@autoluxe.in" className="text-sm hover:text-primary transition-colors" style={{ color: "hsl(var(--muted-foreground))" }}>
                  info@autoluxe.in
                </a>
              </li>
            </ul>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-5 !text-sm w-full !py-3 text-center"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid hsl(var(--border))" }}>
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            © 2024 AutoLuxe. All rights reserved. Premium Automobile Accessories.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <a key={item} href="#" className="text-xs hover:text-primary transition-colors" style={{ color: "hsl(var(--muted-foreground))" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
