import Navbar from "@/components/restaurant/Navbar";
import Gallery from "@/components/restaurant/Gallery";
import Footer from "@/components/restaurant/Footer";

const GalleryPage = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <div className="pt-32 pb-8 bg-charcoal text-center">
        <span className="text-gold text-sm uppercase tracking-[0.3em] font-sans mb-4 block">
          Our Gallery
        </span>
        <h1 className="font-serif text-5xl md:text-6xl text-cream">Captured Moments</h1>
        <div className="w-16 h-[2px] bg-gold mx-auto mt-6" />
      </div>
      <Gallery />
      <Footer />
    </main>
  );
};

export default GalleryPage;
