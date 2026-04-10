import { useState } from "react";

const faqs = [
  { q: "Do I need to book an appointment?", a: "Walk-ins are welcome, but we recommend calling ahead on 0424 835 213 to secure your preferred time slot." },
  { q: "What products do you use?", a: "We use only premium, skin-safe products from trusted beauty brands suitable for all skin types including sensitive skin." },
  { q: "How long does eyebrow threading take?", a: "A standard eyebrow tidy-up takes approximately 10–15 minutes. We ensure precision without rushing." },
  { q: "Is Brazilian waxing painful?", a: "Our experienced beauticians use high-quality wax and techniques that minimise discomfort. Most clients find it very manageable." },
  { q: "Where are you located?", a: "We're at 62 Equestria Bvd, Wollert VIC 3750. Easy to find with plenty of nearby parking." },
  { q: "What are your opening hours?", a: "We're open 7 days a week. Please call us on 0424 835 213 for our current hours." },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        <div className="text-center mb-14">
          <span className="font-body text-sm font-bold uppercase tracking-widest text-primary">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Common Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 font-body font-semibold text-foreground text-left hover:bg-secondary/50 transition"
              >
                {f.q}
                <span className="text-primary text-xl ml-4">{openIdx === i ? "−" : "+"}</span>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-4 font-body text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
