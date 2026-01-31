import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="contact" className="bg-charcoal pt-20 pb-8" ref={ref}>
      <div className="container-custom">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-serif text-3xl text-cream tracking-wider mb-6">LA MAISON</h3>
            <p className="text-cream/60 leading-relaxed mb-6">
              Experience the art of fine dining where every meal is a celebration 
              of flavors, tradition, and innovation.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 bg-cream/10 hover:bg-gold flex items-center justify-center transition-colors duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} className="text-cream group-hover:text-charcoal" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-serif text-xl text-cream mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1 shrink-0" />
                <p className="text-cream/70">
                  123 Gourmet Avenue<br />
                  New York, NY 10001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <a href="tel:+15551234567" className="text-cream/70 hover:text-gold transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <a href="mailto:info@lamaison.com" className="text-cream/70 hover:text-gold transition-colors">
                  info@lamaison.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-serif text-xl text-cream mb-6">Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-gold shrink-0" />
                <div>
                  <p className="text-cream/70">Tuesday - Thursday</p>
                  <p className="text-cream text-sm">6:00 PM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-gold shrink-0" />
                <div>
                  <p className="text-cream/70">Friday - Sunday</p>
                  <p className="text-cream text-sm">6:00 PM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-gold shrink-0" />
                <div>
                  <p className="text-cream/70">Monday</p>
                  <p className="text-cream text-sm">Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-serif text-xl text-cream mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {["Home", "About Us", "Our Menu", "Reservations", "Private Events", "Gift Cards"].map((link) => (
                <motion.a 
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`} 
                  className="block text-cream/70 hover:text-gold transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-cream/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">
              © {new Date().getFullYear()} La Maison Restaurant. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-cream/50 text-sm hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-cream/50 text-sm hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;