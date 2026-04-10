const services = [
  { icon: "✨", title: "Eyebrow Tidy Up", desc: "Precision threading for perfectly shaped brows that frame your face beautifully." },
  { icon: "🪡", title: "Sideburn Threading", desc: "Gentle and precise hair removal for smooth, flawless sideburns." },
  { icon: "💎", title: "Brazilian Waxing", desc: "Professional, hygienic Brazilian waxing for long-lasting silky smooth results." },
  { icon: "🌸", title: "Full Body Waxing", desc: "Complete body waxing service using premium quality wax for sensitive skin." },
  { icon: "🌊", title: "Bikini Line Waxing", desc: "Expert bikini line waxing performed with care and precision." },
  { icon: "👁️", title: "Lash Tinting", desc: "Enhance your natural lashes with a beautiful tint that lasts for weeks." },
  { icon: "🎨", title: "Henna Tinting", desc: "Beautiful, natural henna brow tinting for a fuller, defined brow look." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary">
    <div className="container-narrow">
      <div className="text-center mb-14">
        <span className="font-body text-sm font-bold uppercase tracking-widest text-primary">Our Services</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Beauty Treatments You'll Love</h2>
        <p className="font-body text-muted-foreground mt-3 max-w-xl mx-auto">
          From brows to full body — we provide expert beauty treatments using premium products.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="group bg-card rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30">
            <div className="text-3xl mb-4">{s.icon}</div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">{s.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
