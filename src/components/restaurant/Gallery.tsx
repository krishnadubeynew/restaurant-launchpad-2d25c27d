import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    alt: "Exquisite plated dish with garnish",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80",
    alt: "Fine dining table setting",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&q=80",
    alt: "Chef preparing dish",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
    alt: "Grilled steak with vegetables",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1482275548304-a58859dc31b7?w=400&q=80",
    alt: "Elegant dessert presentation",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    alt: "Restaurant ambiance",
    span: "lg:col-span-2",
  },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-sans mb-4 block">
            Visual Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Captured Moments
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden group ${image.span}`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
