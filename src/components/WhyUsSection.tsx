const reasons = [
  { icon: "🏆", title: "4.8★ Google Rating", desc: "Trusted by 21+ happy clients in Wollert with consistently glowing reviews." },
  { icon: "💜", title: "Expert Beauticians", desc: "Highly trained professionals specializing in threading, waxing, and tinting." },
  { icon: "🧴", title: "Premium Products", desc: "We use only high-quality, skin-safe products suitable for all skin types." },
  { icon: "📍", title: "Conveniently Located", desc: "Easy to find at 62 Equestria Bvd, Wollert VIC 3750 with ample parking." },
  { icon: "💰", title: "Affordable Pricing", desc: "Quality beauty services at competitive prices — because beauty shouldn't break the bank." },
  { icon: "🕐", title: "Flexible Hours", desc: "Open 7 days with convenient hours to fit your busy schedule." },
];

const WhyUsSection = () => (
  <section id="why-us" className="section-padding bg-background">
    <div className="container-narrow">
      <div className="text-center mb-14">
        <span className="font-body text-sm font-bold uppercase tracking-widest text-primary">Why Choose Us</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Wollert's Favourite Beauty Parlour</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((r) => (
          <div key={r.title} className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-3xl mx-auto mb-4">{r.icon}</div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{r.title}</h3>
            <p className="font-body text-sm text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
