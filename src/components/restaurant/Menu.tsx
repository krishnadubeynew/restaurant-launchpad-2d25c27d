import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    category: "Starters",
    dishes: [
      { name: "Burrata & Heirloom Tomatoes", description: "Fresh burrata, seasonal tomatoes, basil oil, aged balsamic", price: "$24" },
      { name: "Seared Foie Gras", description: "Brioche, caramelized pear, port wine reduction", price: "$38" },
      { name: "Oysters Rockefeller", description: "Six oysters, spinach gratin, parmesan, champagne foam", price: "$32" },
    ],
  },
  {
    category: "Main Courses",
    dishes: [
      { name: "Wagyu Beef Tenderloin", description: "A5 Wagyu, truffle potato purée, bone marrow jus", price: "$85" },
      { name: "Dover Sole Meunière", description: "Whole fish, brown butter, capers, lemon", price: "$68" },
      { name: "Herb-Crusted Rack of Lamb", description: "Spring lamb, mint pesto, seasonal vegetables", price: "$58" },
    ],
  },
  {
    category: "Desserts",
    dishes: [
      { name: "Chocolate Soufflé", description: "Valrhona dark chocolate, vanilla bean ice cream", price: "$18" },
      { name: "Tarte Tatin", description: "Caramelized apple, crème fraîche, calvados", price: "$16" },
      { name: "Cheese Selection", description: "Artisanal cheeses, honeycomb, walnut bread", price: "$22" },
    ],
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const dishReveal: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="section-padding bg-charcoal" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-gold text-sm uppercase tracking-[0.3em] font-sans mb-4 block">
            Culinary Delights
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            Our Signature Menu
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <motion.p variants={fadeInUp} className="text-cream/70 text-lg max-w-2xl mx-auto">
            Discover our chef's carefully curated selection of seasonal dishes, 
            crafted with the finest ingredients from local and international sources.
          </motion.p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {menuItems.map((category) => (
            <motion.div
              key={category.category}
              variants={cardReveal}
              className="bg-charcoal-light/30 border border-cream/10 p-8"
            >
              <h3 className="font-serif text-2xl text-gold mb-8 text-center">
                {category.category}
              </h3>
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-6"
              >
                {category.dishes.map((dish) => (
                  <motion.div 
                    key={dish.name} 
                    variants={dishReveal}
                    className="border-b border-cream/10 pb-6 last:border-0 last:pb-0"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-serif text-lg text-cream">{dish.name}</h4>
                      <span className="text-gold font-sans font-medium ml-4 shrink-0">{dish.price}</span>
                    </div>
                    <p className="text-cream/60 text-sm leading-relaxed">{dish.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <Button variant="hero" size="xl">
            View Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;