import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Booking />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
