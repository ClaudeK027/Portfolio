import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Offers from "@/components/Offers";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Offers />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
