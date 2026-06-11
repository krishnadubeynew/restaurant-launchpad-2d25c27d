import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    category: "Starters",
    dishes: [
      {
        name: "Margherita Bruschetta",
        description: "Toasted sourdough, fresh tomato, mozzarella di bufala, basil",
        price: "$16",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&q=80",
      },
      {
        name: "Truffle Burrata",
        description: "Creamy burrata, black truffle shavings, heirloom tomatoes, basil oil",
        price: "$24",
        image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800&q=80",
      },
      {
        name: "Seared Scallops",
        description: "Pan-seared sea scallops, cauliflower purée, brown butter, capers",
        price: "$32",
        image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=800&q=80",
      },
      {
        name: "Tuna Tartare",
        description: "Yellowfin tuna, avocado, yuzu ponzu, crispy wonton crisps",
        price: "$28",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80",
      },
      {
        name: "French Onion Soup",
        description: "Caramelized onions, rich beef broth, gruyère crouton",
        price: "$18",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
      },
      {
        name: "Caesar Salad",
        description: "Romaine hearts, anchovy dressing, parmesan, sourdough croutons",
        price: "$17",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&q=80",
      },
    ],
  },
  {
    category: "Main Courses",
    dishes: [
      {
        name: "Wagyu Beef Tenderloin",
        description: "A5 Wagyu, truffle potato purée, bone marrow jus, glazed shallots",
        price: "$85",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
      },
      {
        name: "Grilled Salmon",
        description: "Atlantic salmon, lemon beurre blanc, asparagus, fingerling potatoes",
        price: "$42",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
      },
      {
        name: "Herb-Crusted Lamb Rack",
        description: "New Zealand lamb, mint pesto, ratatouille, rosemary jus",
        price: "$58",
        image: "https://images.unsplash.com/photo-1514516816566-de580c621376?w=800&q=80",
      },
      {
        name: "Lobster Thermidor",
        description: "Maine lobster, cognac cream, gruyère gratin, herb butter",
        price: "$72",
        image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=800&q=80",
      },
      {
        name: "Truffle Mushroom Risotto",
        description: "Carnaroli rice, porcini, black truffle, aged parmesan",
        price: "$38",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80",
      },
      {
        name: "Spaghetti Carbonara",
        description: "Guanciale, pecorino romano, free-range egg yolk, black pepper",
        price: "$28",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
      },
    ],
  },
  {
    category: "Desserts",
    dishes: [
      {
        name: "Chocolate Lava Cake",
        description: "Valrhona dark chocolate, molten center, vanilla bean ice cream",
        price: "$18",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80",
      },
      {
        name: "Crème Brûlée",
        description: "Madagascar vanilla custard, caramelized sugar crust, berries",
        price: "$15",
        image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&q=80",
      },
      {
        name: "Classic Tiramisu",
        description: "Mascarpone, espresso-soaked savoiardi, cocoa dust",
        price: "$16",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
      },
      {
        name: "New York Cheesecake",
        description: "Vanilla cream cheese, graham crust, fresh strawberry compote",
        price: "$14",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80",
      },
      {
        name: "Macaron Selection",
        description: "Six handcrafted French macarons, seasonal flavors",
        price: "$17",
        image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=800&q=80",
      },
      {
        name: "Tarte Tatin",
        description: "Caramelized apples, buttery puff pastry, crème fraîche",
        price: "$16",
        image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=800&q=80",
      },
    ],
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
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

        {/* Menu by Category */}
        <div className="space-y-20">
          {menuItems.map((category) => (
            <div key={category.category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h3 className="font-serif text-3xl md:text-4xl text-gold mb-3">
                  {category.category}
                </h3>
                <div className="w-12 h-[2px] bg-gold/60 mx-auto" />
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {category.dishes.map((dish) => (
                  <motion.div
                    key={dish.name}
                    variants={cardReveal}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-charcoal-light/30 border border-cream/10 overflow-hidden hover:border-gold/40 transition-colors"
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-charcoal/90 backdrop-blur-sm px-3 py-1.5 border border-gold/40">
                        <span className="text-gold font-sans font-medium text-sm">{dish.price}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-serif text-xl text-cream mb-2">{dish.name}</h4>
                      <p className="text-cream/60 text-sm leading-relaxed">{dish.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-20"
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
