import { motion, Variants } from "framer-motion";
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

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-gold text-sm uppercase tracking-[0.3em] font-sans mb-4 block">
            Visual Journey
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Captured Moments
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-16 h-[2px] bg-gold mx-auto" />
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={imageReveal}
              className={`relative overflow-hidden group ${image.span}`}
            >
              <div className="aspect-square overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-burgundy/40 flex items-center justify-center"
              >
                <span className="text-cream font-serif text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;