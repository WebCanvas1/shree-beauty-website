import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${form.name}. I'd like to book ${form.service || "an appointment"}. My number is ${form.phone}.`;
    window.open(`https://wa.me/61422931252?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 container-narrow w-full grid md:grid-cols-2 gap-10 items-center px-4 py-16">
        {/* Left text */}
        <div className="text-primary-foreground animate-fade-in-up">
          <div className="inline-block rounded-full bg-primary/30 backdrop-blur-sm px-4 py-1.5 mb-6">
            <span className="font-body text-sm font-semibold text-primary-foreground">⭐ 4.8 Rating · 21 Reviews</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Unleash Your<br />
            <span className="text-rose-medium">Inner Beauty</span>
          </h1>
          <p className="font-body text-lg text-primary-foreground/80 mb-6 max-w-lg">
            Wollert's trusted beauty & brow experts. Professional threading, waxing, lash tinting & henna art services.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:0424835213" className="rounded-lg bg-primary px-6 py-3 font-body font-bold text-primary-foreground hover:opacity-90 transition">
              📞 0424 835 213
            </a>
            <a href="#services" className="rounded-lg border-2 border-primary-foreground/40 px-6 py-3 font-body font-bold text-primary-foreground hover:bg-primary-foreground/10 transition">
              View Services
            </a>
          </div>
        </div>

        {/* Right form */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-background/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-1">Book Your Visit</h2>
            <p className="font-body text-sm text-muted-foreground mb-6">Get a callback or WhatsApp confirmation</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-secondary px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                maxLength={15}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-border bg-secondary px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full rounded-lg border border-border bg-secondary px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a Service</option>
                <option>Eyebrow Tidy Up</option>
                <option>Sideburn Threading</option>
                <option>Brazilian Waxing</option>
                <option>Full Body Waxing</option>
                <option>Bikini Line Waxing</option>
                <option>Lash Tinting</option>
                <option>Henna Tinting</option>
              </select>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary py-3.5 font-body text-sm font-bold text-primary-foreground hover:opacity-90 transition"
              >
                Book via WhatsApp →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
