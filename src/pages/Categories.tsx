import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories, products } from "@/data/products";

const Categories = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section
        className="py-16 relative"
        style={{ background: "linear-gradient(135deg, hsl(220 25% 4%), hsl(220 20% 8%))" }}
      >
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="section-tag">Browse All</span>
          <h1 className="section-title mt-2">Product <span>Categories</span></h1>
          <p className="mt-4 text-lg" style={{ color: "hsl(var(--muted-foreground))" }}>
            Explore our wide range of premium automobile accessories
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, i) => {
              const catProducts = products.filter((p) => p.categorySlug === cat.slug);
              return (
                <div
                  key={cat.slug}
                  className="animate-fade-up glass-card overflow-hidden group transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 80}ms` }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--primary) / 0.5)"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-primary)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))"; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
                >
                  <div className="flex gap-6 p-6">
                    {/* Icon */}
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.2)" }}
                    >
                      {cat.icon}
                    </div>

                    <div className="flex-1">
                      <h2 className="font-rajdhani font-bold text-2xl mb-2 group-hover:text-primary transition-colors" style={{ color: "hsl(var(--foreground))" }}>
                        {cat.name}
                      </h2>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
                        {cat.description}
                      </p>

                      {/* Product previews */}
                      {catProducts.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {catProducts.slice(0, 3).map((p) => (
                            <span key={p.id} className="badge-primary text-xs">
                              {p.name.split(" ").slice(0, 3).join(" ")}
                            </span>
                          ))}
                          {catProducts.length > 3 && (
                            <span className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                              +{catProducts.length - 3} more
                            </span>
                          )}
                        </div>
                      )}

                      <Link
                        to={`/products`}
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                        style={{ color: "hsl(var(--primary))" }}
                      >
                        View Products <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                  {/* Bottom gradient bar */}
                  <div
                    className="h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "hsl(var(--background-secondary))" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-lg mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
            We stock 200+ products. WhatsApp us your requirement and we'll find it for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-whatsapp !px-8 !py-4">
              💬 WhatsApp Us
            </a>
            <Link to="/contact" className="btn-outline !px-8 !py-4">
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Categories;
