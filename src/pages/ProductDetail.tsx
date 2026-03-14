import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Send, Check, Star, Shield, ChevronRight } from "lucide-react";
import { products, getWhatsAppLink } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImage(0);
  }, [id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <div className="text-6xl">🔦</div>
        <h2 className="font-rajdhani font-bold text-3xl" style={{ color: "hsl(var(--foreground))" }}>Product Not Found</h2>
        <Link to="/products" className="btn-primary">
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="py-4 border-b" style={{ background: "hsl(var(--background-secondary))", borderColor: "hsl(var(--border))" }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight size={14} />
            <span style={{ color: "hsl(var(--primary))" }}>{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Main */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="animate-fade-up">
              {/* Main Image */}
              <div
                className="rounded-2xl overflow-hidden aspect-square mb-4"
                style={{ background: "hsl(var(--muted))", border: "1px solid hsl(var(--border))" }}
              >
                <img
                  src={product.images[selectedImage] || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className="w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200"
                      style={{
                        borderColor: selectedImage === i ? "hsl(var(--primary))" : "hsl(var(--border))",
                        boxShadow: selectedImage === i ? "var(--shadow-primary)" : "none",
                      }}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="animate-fade-up">
              {/* Badge + Category */}
              <div className="flex items-center gap-3 mb-3">
                <span className="badge-primary">{product.category}</span>
                {product.badge && <span className="badge-accent">{product.badge}</span>}
              </div>

              <h1 className="font-rajdhani font-bold text-3xl md:text-4xl mb-4" style={{ color: "hsl(var(--foreground))" }}>
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="hsl(var(--accent))" color="hsl(var(--accent))" />
                  ))}
                </div>
                <span className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>4.8/5 (120+ reviews)</span>
              </div>

              {/* Price */}
              {product.price && (
                <div className="mb-5">
                  <span className="font-rajdhani font-bold text-4xl" style={{ color: "hsl(var(--accent))" }}>
                    {product.price}
                  </span>
                  <span className="ml-2 text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>onwards (excl. installation)</span>
                </div>
              )}

              <p className="text-base leading-relaxed mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                {product.description}
              </p>

              {/* Warranty */}
              <div
                className="flex items-center gap-3 p-4 rounded-lg mb-6"
                style={{ background: "hsl(var(--primary) / 0.08)", border: "1px solid hsl(var(--primary) / 0.2)" }}
              >
                <Shield size={20} style={{ color: "hsl(var(--primary))" }} />
                <span className="text-sm font-semibold" style={{ color: "hsl(var(--foreground))" }}>{product.warranty}</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp flex-1 !py-4 !text-base"
                >
                  <MessageCircle size={18} /> WhatsApp Enquiry
                </a>
                <Link
                  to={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="btn-primary flex-1 !py-4 !text-base"
                >
                  <Send size={18} /> Send Enquiry
                </Link>
              </div>

              <p className="text-xs text-center" style={{ color: "hsl(var(--muted-foreground))" }}>
                ✅ No payment required — Get a free quote from our team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 border-t" style={{ borderColor: "hsl(var(--border))" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Specifications */}
            <div className="animate-fade-up glass-card p-6">
              <h3 className="font-rajdhani font-bold text-xl mb-5" style={{ color: "hsl(var(--foreground))" }}>
                📋 Specifications
              </h3>
              <div className="space-y-3">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-start gap-3 py-2 border-b" style={{ borderColor: "hsl(var(--border))" }}>
                    <span className="text-sm font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>{spec.label}</span>
                    <span className="text-sm font-semibold text-right" style={{ color: "hsl(var(--foreground))" }}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="animate-fade-up glass-card p-6">
              <h3 className="font-rajdhani font-bold text-xl mb-5" style={{ color: "hsl(var(--foreground))" }}>
                ⚡ Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "hsl(var(--primary) / 0.15)", color: "hsl(var(--primary))" }}
                    >
                      <Check size={12} />
                    </div>
                    <span className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compatibility */}
            <div className="animate-fade-up glass-card p-6">
              <h3 className="font-rajdhani font-bold text-xl mb-5" style={{ color: "hsl(var(--foreground))" }}>
                🚗 Compatibility
              </h3>
              <ul className="space-y-3 mb-6">
                {product.compatibility.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "hsl(var(--accent))" }} />
                    <span className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs p-3 rounded-lg" style={{ background: "hsl(var(--accent) / 0.1)", color: "hsl(var(--accent))", border: "1px solid hsl(var(--accent) / 0.2)" }}>
                Not sure about compatibility? WhatsApp us your vehicle model and we'll confirm!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-12 border-t" style={{ background: "hsl(var(--background-secondary))", borderColor: "hsl(var(--border))" }}>
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-8">Related <span>Products</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <div key={p.id}>
                  <Link
                    to={`/products/${p.id}`}
                    className="product-card block group overflow-hidden"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <div className="aspect-video overflow-hidden" style={{ background: "hsl(var(--muted))" }}>
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-rajdhani font-bold text-lg group-hover:text-primary transition-colors" style={{ color: "hsl(var(--foreground))" }}>{p.name}</h4>
                      <p className="text-sm mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>{p.shortDesc}</p>
                      {p.price && <span className="font-rajdhani font-bold text-xl mt-2 block" style={{ color: "hsl(var(--accent))" }}>{p.price}</span>}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetail;
