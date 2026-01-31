import Navbar from "@/components/restaurant/Navbar";
import Hero from "@/components/restaurant/Hero";
import About from "@/components/restaurant/About";
import Menu from "@/components/restaurant/Menu";
import Gallery from "@/components/restaurant/Gallery";
import Reservations from "@/components/restaurant/Reservations";
import Footer from "@/components/restaurant/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reservations />
      <Footer />
    </main>
  );
};

export default Index;
