import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Users, Phone, Mail, User, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const Reservations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("reservations").insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        reservation_date: formData.date,
        reservation_time: formData.time,
        guests: parseInt(formData.guests),
      });

      if (error) throw error;

      toast({
        title: "Reservation Submitted!",
        description: "Thank you! We will contact you shortly to confirm your reservation.",
      });

      setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "" });
    } catch (error) {
      console.error("Reservation error:", error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reservations" className="section-padding bg-burgundy relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span variants={fadeInUp} className="text-gold text-sm uppercase tracking-[0.3em] font-sans mb-4 block">
              Reserve Your Table
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
              Book Your Experience
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-16 h-[2px] bg-gold mb-8" />
            <motion.p variants={fadeInUp} className="text-cream/80 text-lg leading-relaxed mb-8">
              We invite you to join us for an unforgettable culinary journey. 
              Reserve your table and let us create a memorable dining experience 
              tailored just for you.
            </motion.p>
            
            {/* Info Cards */}
            <motion.div 
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-4"
            >
              <motion.div variants={cardReveal} className="bg-burgundy-dark/50 p-6 border border-cream/10">
                <Clock className="text-gold mb-3" size={28} />
                <h4 className="font-serif text-lg text-cream mb-2">Opening Hours</h4>
                <p className="text-cream/70 text-sm">
                  Tue - Sun: 6PM - 11PM<br />
                  Monday: Closed
                </p>
              </motion.div>
              <motion.div variants={cardReveal} className="bg-burgundy-dark/50 p-6 border border-cream/10">
                <Phone className="text-gold mb-3" size={28} />
                <h4 className="font-serif text-lg text-cream mb-2">Contact Us</h4>
                <p className="text-cream/70 text-sm">
                  +1 (555) 123-4567<br />
                  info@lamaison.com
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="bg-cream p-8 md:p-10 shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h3 className="font-serif text-2xl text-charcoal mb-6 text-center">Make a Reservation</h3>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-4"
              >
                <motion.div variants={fadeInUp} className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-light" size={18} />
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-10 h-12 bg-cream-dark border-charcoal/20 focus:border-burgundy"
                    required
                  />
                </motion.div>
                
                <motion.div variants={fadeInUp} className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-light" size={18} />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 h-12 bg-cream-dark border-charcoal/20 focus:border-burgundy"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-light" size={18} />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-10 h-12 bg-cream-dark border-charcoal/20 focus:border-burgundy"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-light" size={18} />
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="pl-10 h-12 bg-cream-dark border-charcoal/20 focus:border-burgundy"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-light" size={18} />
                    <Input
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="pl-10 h-12 bg-cream-dark border-charcoal/20 focus:border-burgundy"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-light" size={18} />
                  <Input
                    type="number"
                    placeholder="Number of Guests"
                    min="1"
                    max="20"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="pl-10 h-12 bg-cream-dark border-charcoal/20 focus:border-burgundy"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Button type="submit" variant="burgundy" size="xl" className="w-full mt-4" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Request Reservation"
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;