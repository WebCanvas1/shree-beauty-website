import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Beauty tools at Shree Beauty" },
  { src: gallery2, alt: "Treatment room" },
  { src: gallery3, alt: "Henna art design" },
  { src: gallery4, alt: "Lash tinting procedure" },
];

const GallerySection = () => (
  <section id="gallery" className="section-padding bg-secondary">
    <div className="container-narrow">
      <div className="text-center mb-14">
        <span className="font-body text-sm font-bold uppercase tracking-widest text-primary">Gallery</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Our Work & Space</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-xl group">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={640}
              height={640}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
