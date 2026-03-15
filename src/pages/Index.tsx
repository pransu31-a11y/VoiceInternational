import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, Zap, Headphones, Award, Truck, ChevronRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { products, categories, getWhatsAppLink } from "@/data/products";
import ProductCard from "@/components/ProductCard";

// Scroll animation hook
const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const stats = [
  { value: "50,000+", label: "Happy Customers" },
  { value: "200+", label: "Products" },
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Brand Partners" },
];

const whyUs = [
  { icon: Shield, title: "Genuine Products", desc: "100% authentic products with manufacturer warranty on every purchase." },
  { icon: Zap, title: "Latest Technology", desc: "Always stocked with the newest automotive innovations and upgrades." },
  { icon: Headphones, title: "Expert Support", desc: "Our auto-experts guide you to the perfect product for your vehicle." },
  { icon: Award, title: "Best Prices", desc: "Competitive pricing with regular deals and bulk order discounts." },
  { icon: Truck, title: "Pan-India Delivery", desc: "Fast, secure shipping to all major cities across India." },
  { icon: Star, title: "Top Rated", desc: "4.8/5 rating from thousands of verified customer reviews." },
];

const testimonials = [
  { name: "Rajesh Kumar", city: "Delhi", rating: 5, text: "Got the H4 LED headlights installed and the difference is night and day! Extremely bright and easy plug & play install. Great quality product." },
  { name: "Priya Sharma", city: "Mumbai", rating: 5, text: "Bought the RGB ambient light kit. Looks absolutely stunning in my Creta. The app control is smooth and the music sync feature is amazing!" },
  { name: "Amit Patel", city: "Ahmedabad", rating: 5, text: "Excellent fog lamps and the team helped me pick the right fitment. Fast delivery and product quality is top notch. Highly recommended!" },
  { name: "Suresh Nair", city: "Bangalore", rating: 5, text: "The parking sensor kit is a game changer. Installation was straightforward and the display is very clear. Worth every rupee!" },
];


const Index = () => {
  useScrollAnimation();

  const featuredProducts = products.filter((p) => p.isFeatured);
  const bestSellers = products.filter((p) => p.isBestSeller);

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden hero-gradient">
        {/* BG Image */}
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Premium Automobile Accessories" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, hsl(220 25% 3% / 0.95) 40%, hsl(220 25% 3% / 0.4) 100%)" }} />
        </div>

        {/* Blue glow accent */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: "hsl(var(--primary))" }} />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ background: "hsl(var(--accent))" }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="glow-line w-12" />
              <span className="section-tag">India's #1 Auto Accessories Brand</span>
            </div>

            <h1 className="font-rajdhani font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6" style={{ color: "hsl(var(--foreground))" }}>
              Drive Smarter.<br />
              <span style={{ background: "var(---primagradientry)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Shine Brighter.
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
              Premium LED headlights, fog lamps, DRLs, car audio systems, reverse cameras, and 200+ more top-quality automobile accessories for every vehicle.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/products" className="btn-primary !px-8 !py-4 !text-base">
                Explore Products <ArrowRight size={18} />
              </Link>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp !px-8 !py-4 !text-base">
                💬 WhatsApp Now
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card px-4 py-3 text-center">
                  <div className="font-rajdhani font-bold text-2xl" style={{ color: "hsl(var(--primary))" }}>{stat.value}</div>
                  <div className="text-xs mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="py-20" style={{ background: "hsl(var(--background-secondary))" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <span className="section-tag">Browse By Category</span>
            <h2 className="section-title mt-2">Shop by <span>Category</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <Link
                key={cat.slug}
                to={`/categories`}
                className="animate-fade-up glass-card p-6 text-center cursor-pointer transition-all duration-300 group hover:scale-105"
                style={{ animationDelay: `${i * 0.1}s`, transitionDelay: `${i * 50}ms` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--primary) / 0.6)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="font-rajdhani font-bold text-base mb-1 group-hover:text-primary transition-colors" style={{ color: "hsl(var(--foreground))" }}>
                  {cat.name}
                </h3>
                <p className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12 animate-fade-up">
            <div>
              <span className="section-tag">Hand-Picked</span>
              <h2 className="section-title mt-2">Featured <span>Products</span></h2>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 text-sm font-semibold transition-colors hover:text-primary" style={{ color: "hsl(var(--muted-foreground))" }}>
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <div key={product.id} className="animate-fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/products" className="btn-outline !px-8 !py-3">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BEST SELLERS ===== */}
      <section className="py-20" style={{ background: "hsl(var(--background-secondary))" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <span className="section-tag">Customer Favourites</span>
            <h2 className="section-title mt-2">Best <span>Selling</span> Products</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, i) => (
              <div key={product.id} className="animate-fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5" style={{ background: "hsl(var(--primary))" }} />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <span className="section-tag">Our Advantage</span>
            <h2 className="section-title mt-2">Why Choose <span>VoiceInternational</span>?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="animate-fade-up glass-card p-6 group transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--primary) / 0.4)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))"; }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "hsl(var(--primary) / 0.1)", color: "hsl(var(--primary))" }}
                >
                  <Icon size={24} />
                </div>
                <h3 className="font-rajdhani font-bold text-xl mb-2" style={{ color: "hsl(var(--foreground))" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20" style={{ background: "hsl(var(--background-secondary))" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <span className="section-tag">What Customers Say</span>
            <h2 className="section-title mt-2">Customer <span>Reviews</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="animate-fade-up glass-card p-6" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} fill="hsl(var(--accent))" color="hsl(var(--accent))" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4 italic" style={{ color: "hsl(var(--muted-foreground))" }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-rajdhani font-bold text-sm"
                    style={{ background: "var(--gradient-primary)", color: "white" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "hsl(var(--foreground))" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(207 100% 15%) 0%, hsl(220 20% 6%) 50%, hsl(38 80% 12%) 100%)" }}
      >
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-up">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title mt-2 mb-4">
            Ready to Upgrade Your <span>Ride</span>?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
            Contact us today for expert advice, custom quotes, and bulk pricing. Our team is ready to help!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp !px-10 !py-4 !text-base pulse-glow">
              💬 WhatsApp Now
            </a>
            <Link to="/contact" className="btn-primary !px-10 !py-4 !text-base">
              Send Enquiry <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Index;
