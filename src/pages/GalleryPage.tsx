import Navbar from "@/components/restaurant/Navbar";
import Gallery from "@/components/restaurant/Gallery";
import Footer from "@/components/restaurant/Footer";

const GalleryPage = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Gallery />
      <Footer />
    </main>
  );
};

export default GalleryPage;
