import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.img
                initial={{ scale: 1.2 }}
                animate={isInView ? { scale: 1 } : { scale: 1.2 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Restaurant interior with elegant table setting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-burgundy/10" />
            </div>
            {/* Decorative Elements */}
            <motion.div 
              variants={scaleIn}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold/30 -z-10" 
            />
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute -bottom-8 -left-8 bg-burgundy p-6 md:p-8"
            >
              <p className="text-gold font-serif text-4xl md:text-5xl font-medium">25</p>
              <p className="text-cream/80 text-sm uppercase tracking-widest font-sans">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:pl-8"
          >
            <motion.span variants={fadeInUp} className="text-gold text-sm uppercase tracking-[0.3em] font-sans mb-4 block">
              Our Story
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              A Legacy of <br />
              <span className="text-burgundy">Culinary Excellence</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-16 h-[2px] bg-gold mb-8" />
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded in 1999, La Maison has been a cornerstone of fine dining in the city. 
              Our philosophy is simple: source the finest seasonal ingredients, prepare them 
              with respect for tradition and creativity, and serve them in an atmosphere of 
              warmth and elegance.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every dish tells a story—a story of heritage, passion, and the relentless 
              pursuit of perfection. Our award-winning chef combines classical techniques 
              with modern innovation to create an unforgettable dining experience.
            </motion.p>
            <motion.div variants={staggerContainer} className="flex flex-wrap gap-8 pt-4">
              {[
                { value: "150+", label: "Signature Dishes" },
                { value: "12", label: "Awards Won" },
                { value: "50k+", label: "Happy Guests" }
              ].map((stat) => (
                <motion.div key={stat.label} variants={fadeInUp}>
                  <p className="font-serif text-3xl text-burgundy font-medium">{stat.value}</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-sans">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;