import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";
import { getWhatsAppLink } from "@/data/products";

const ContactUs = () => {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get("product") || "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: productParam,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (productParam) {
      setForm((f) => ({ ...f, product: productParam }));
    }
  }, [productParam]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static form — just show success message
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: Mail, label: "Email", value: "info@autoluxe.in", href: "mailto:info@autoluxe.in" },
    { icon: MapPin, label: "Address", value: "123, Industrial Area, Sector 7, New Delhi – 110001", href: "#" },
    { icon: Clock, label: "Business Hours", value: "Mon–Sat: 9 AM – 7 PM\nSun: 10 AM – 3 PM", href: "#" },
  ];

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section
        className="py-16 relative"
        style={{ background: "linear-gradient(135deg, hsl(220 25% 4%), hsl(220 20% 8%))" }}
      >
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="section-tag">We're Here to Help</span>
          <h1 className="section-title mt-2">Contact <span>Us</span></h1>
          <p className="mt-4 text-lg" style={{ color: "hsl(var(--muted-foreground))" }}>
            Send us an enquiry or chat on WhatsApp — we respond within 2 hours
          </p>
        </div>
      </section>

      {/* WhatsApp Banner */}
      <div
        className="py-5"
        style={{ background: "linear-gradient(135deg, #075e54, #128c7e)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-rajdhani font-bold text-xl text-white">Fastest Response via WhatsApp</h3>
            <p className="text-green-100 text-sm">Get instant quotes, compatibility checks & order updates</p>
          </div>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}
          >
            <MessageCircle size={22} />
            Chat on WhatsApp Now
          </a>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="animate-fade-up glass-card p-5 flex gap-4 items-start">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "hsl(var(--primary) / 0.12)", color: "hsl(var(--primary))" }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "hsl(var(--muted-foreground))" }}>{label}</div>
                    {href !== "#" ? (
                      <a href={href} className="font-medium hover:text-primary transition-colors whitespace-pre-line" style={{ color: "hsl(var(--foreground))" }}>
                        {value}
                      </a>
                    ) : (
                      <span className="font-medium whitespace-pre-line" style={{ color: "hsl(var(--foreground))" }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div
                className="animate-fade-up rounded-2xl overflow-hidden flex items-center justify-center"
                style={{ height: "200px", background: "hsl(var(--muted))", border: "1px solid hsl(var(--border))" }}
              >
                <div className="text-center">
                  <MapPin size={32} style={{ color: "hsl(var(--primary))" }} className="mx-auto mb-2" />
                  <p className="text-sm font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>
                    Visit Our Showroom
                  </p>
                  <p className="text-xs mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                    New Delhi, India
                  </p>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-3 animate-fade-up">
              <div className="glass-card p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ background: "hsl(var(--primary) / 0.1)", color: "hsl(var(--primary))" }}
                    >
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="font-rajdhani font-bold text-2xl mb-3" style={{ color: "hsl(var(--foreground))" }}>
                      Enquiry Received!
                    </h3>
                    <p className="mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
                      Thank you for reaching out. Our team will contact you within 2 business hours.
                    </p>
                    <p className="text-sm mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                      For faster response, WhatsApp us directly.
                    </p>
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp !px-8 !py-3">
                      💬 WhatsApp for Faster Reply
                    </a>
                  </div>
                ) : (
                  <>
                    <h2 className="font-rajdhani font-bold text-2xl mb-6" style={{ color: "hsl(var(--foreground))" }}>
                      Send Product Enquiry
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: "hsl(var(--foreground))" }}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Your name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="input-dark"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: "hsl(var(--foreground))" }}>
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="input-dark"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "hsl(var(--foreground))" }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="input-dark"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "hsl(var(--foreground))" }}>
                          Product / Category of Interest
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., H4 LED Headlights, Fog Lamps..."
                          value={form.product}
                          onChange={(e) => setForm({ ...form, product: e.target.value })}
                          className="input-dark"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "hsl(var(--foreground))" }}>
                          Your Message *
                        </label>
                        <textarea
                          required
                          rows={5}
                          placeholder="Tell us about your vehicle, what product you need, any specific requirements..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="input-dark resize-none"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button type="submit" className="btn-primary flex-1 !py-4">
                          <Send size={16} /> Send Enquiry
                        </button>
                        <a
                          href={getWhatsAppLink(form.product)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-whatsapp flex-1 !py-4"
                        >
                          <MessageCircle size={16} /> WhatsApp Instead
                        </a>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
