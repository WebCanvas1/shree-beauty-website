const CTASection = () => (
  <section id="contact" className="section-padding bg-primary text-primary-foreground">
    <div className="container-narrow text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Look & Feel Amazing?</h2>
      <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-lg mx-auto">
        Book your appointment today at Shree Beauty & Brow Parlour — Wollert's trusted beauty destination.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:0424835213"
          className="rounded-lg bg-background text-foreground px-8 py-4 font-body font-bold text-lg hover:opacity-90 transition"
        >
          📞 Call 0424 835 213
        </a>
        <a
          href="https://maps.google.com/?q=62+Equestria+Bvd+Wollert+VIC+3750"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border-2 border-primary-foreground/40 px-8 py-4 font-body font-bold text-lg hover:bg-primary-foreground/10 transition"
        >
          📍 Get Directions
        </a>
      </div>
      <p className="font-body text-sm text-primary-foreground/60 mt-8">
        62 Equestria Bvd, Wollert VIC 3750 · Open 7 Days
      </p>
    </div>
  </section>
);

export default CTASection;
