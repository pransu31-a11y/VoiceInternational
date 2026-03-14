import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Award, Users, Target, Heart, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/data/products";

const milestones = [
  { year: "2009", title: "Company Founded", desc: "Started as a small auto accessories shop in Delhi" },
  { year: "2013", title: "Pan-India Expansion", desc: "Expanded to serve customers across 20+ states" },
  { year: "2018", title: "LED Revolution", desc: "Became one of India's top LED headlight suppliers" },
  { year: "2022", title: "200+ Products", desc: "Expanded catalog to 200+ premium automotive products" },
  { year: "2024", title: "50,000+ Customers", desc: "Trusted by over 50,000 happy customers nationwide" },
];

const team = [
  { name: "Arjun Mehta", role: "Founder & CEO", initials: "AM" },
  { name: "Priya Singh", role: "Head of Operations", initials: "PS" },
  { name: "Rahul Verma", role: "Technical Expert", initials: "RV" },
  { name: "Neha Kapoor", role: "Customer Relations", initials: "NK" },
];

const AboutUs = () => {
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
      {/* Hero */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(220 25% 4%), hsl(207 30% 8%))" }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: "hsl(var(--primary))" }} />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5" style={{ background: "hsl(var(--accent))" }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="section-tag">Our Story</span>
          <h1 className="section-title mt-2">About <span>VoiceInternational</span></h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            For over 15 years, VoiceInternational has been India's trusted destination for premium automobile accessories. 
            We believe every vehicle deserves the best — brighter lights, better sound, and smarter safety.
          </p>
        </div>
      </section>

      {/* Mission Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Our Mission", desc: "To provide every Indian vehicle owner access to world-class automobile accessories at honest prices.", color: "var(--primary)" },
              { icon: Heart, title: "Our Passion", desc: "We're automotive enthusiasts first. We only sell products we believe in and have tested ourselves.", color: "var(--accent)" },
              { icon: Award, title: "Our Promise", desc: "Genuine products, transparent pricing, expert guidance, and unmatched after-sales support.", color: "var(--primary)" },
              { icon: Users, title: "Our Community", desc: "A family of 50,000+ happy customers who trust us with their prized vehicles.", color: "var(--accent)" },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <div
                key={title}
                className="animate-fade-up glass-card p-6 text-center transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `hsl(${color === "var(--primary)" ? "var(--primary)" : "var(--accent)"} / 0.1)`, color: `hsl(${color === "var(--primary)" ? "var(--primary)" : "var(--accent)"})` }}
                >
                  <Icon size={26} />
                </div>
                <h3 className="font-rajdhani font-bold text-xl mb-3" style={{ color: "hsl(var(--foreground))" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16" style={{ background: "hsl(var(--background-secondary))" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="animate-fade-up text-center mb-12">
              <span className="section-tag">Our Journey</span>
              <h2 className="section-title mt-2">15+ Years of <span>Excellence</span></h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 glow-line" style={{ width: "2px" }} />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={m.year} className="animate-fade-up flex gap-6 pl-16 relative" style={{ transitionDelay: `${i * 100}ms` }}>
                    <div
                      className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center font-rajdhani font-bold text-xs shrink-0"
                      style={{ background: "var(--gradient-primary)", color: "white", boxShadow: "var(--shadow-glow-blue)" }}
                    >
                      {m.year.slice(2)}
                    </div>
                    <div className="glass-card p-5 flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-rajdhani font-bold text-xl" style={{ color: "hsl(var(--foreground))" }}>{m.title}</span>
                        <span className="badge-primary">{m.year}</span>
                      </div>
                      <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <span className="section-tag">The People Behind VoiceInternational</span>
            <h2 className="section-title mt-2">Meet Our <span>Team</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <div key={member.name} className="animate-fade-up glass-card p-6 text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 font-rajdhani font-bold text-2xl"
                  style={{ background: "var(--gradient-primary)", color: "white" }}
                >
                  {member.initials}
                </div>
                <h3 className="font-rajdhani font-bold text-lg" style={{ color: "hsl(var(--foreground))" }}>{member.name}</h3>
                <p className="text-xs mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, hsl(207 60% 8%), hsl(220 20% 5%))", borderTop: "1px solid hsl(var(--border))" }}
      >
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h2 className="section-title mb-4">Let's Build Something <span>Great</span></h2>
          <p className="text-lg mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
            Partner with us for bulk orders, B2B pricing, or custom product sourcing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp !px-8 !py-4">
              💬 WhatsApp Us
            </a>
            <Link to="/contact" className="btn-primary !px-8 !py-4">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
