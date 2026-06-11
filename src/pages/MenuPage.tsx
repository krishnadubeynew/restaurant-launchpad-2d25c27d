import Navbar from "@/components/restaurant/Navbar";
import Menu from "@/components/restaurant/Menu";
import Footer from "@/components/restaurant/Footer";

const MenuPage = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <div className="pt-32 pb-8 bg-charcoal text-center">
        <span className="text-gold text-sm uppercase tracking-[0.3em] font-sans mb-4 block">
          Our Menu
        </span>
        <h1 className="font-serif text-5xl md:text-6xl text-cream">Signature Dishes</h1>
        <div className="w-16 h-[2px] bg-gold mx-auto mt-6" />
      </div>
      <Menu />
      <Footer />
    </main>
  );
};

export default MenuPage;
