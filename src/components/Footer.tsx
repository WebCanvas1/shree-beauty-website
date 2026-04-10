const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 py-8 px-4">
    <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
      <p className="font-body text-sm">
        © {new Date().getFullYear()} Shree Beauty & Brow Parlour. All rights reserved.
      </p>
      <p className="font-body text-sm">
        62 Equestria Bvd, Wollert VIC 3750 · <a href="tel:0424835213" className="hover:text-primary-foreground transition">0424 835 213</a>
      </p>
    </div>
  </footer>
);

export default Footer;
