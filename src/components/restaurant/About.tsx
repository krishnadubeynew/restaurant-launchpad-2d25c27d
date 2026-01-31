import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Restaurant interior with elegant table setting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-burgundy/10" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold/30 -z-10" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -left-8 bg-burgundy p-6 md:p-8"
            >
              <p className="text-gold font-serif text-4xl md:text-5xl font-medium">25</p>
              <p className="text-cream/80 text-sm uppercase tracking-widest font-sans">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:pl-8"
          >
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-sans mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              A Legacy of <br />
              <span className="text-burgundy">Culinary Excellence</span>
            </h2>
            <div className="w-16 h-[2px] bg-gold mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded in 1999, La Maison has been a cornerstone of fine dining in the city. 
              Our philosophy is simple: source the finest seasonal ingredients, prepare them 
              with respect for tradition and creativity, and serve them in an atmosphere of 
              warmth and elegance.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every dish tells a story—a story of heritage, passion, and the relentless 
              pursuit of perfection. Our award-winning chef combines classical techniques 
              with modern innovation to create an unforgettable dining experience.
            </p>
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="font-serif text-3xl text-burgundy font-medium">150+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-sans">Signature Dishes</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-burgundy font-medium">12</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-sans">Awards Won</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-burgundy font-medium">50k+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-sans">Happy Guests</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
