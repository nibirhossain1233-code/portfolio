import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}