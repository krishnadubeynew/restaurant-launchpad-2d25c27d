import Navbar from "@/components/restaurant/Navbar";
import Menu from "@/components/restaurant/Menu";
import Footer from "@/components/restaurant/Footer";

const MenuPage = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Menu />
      <Footer />
    </main>
  );
};

export default MenuPage;
