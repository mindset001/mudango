import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import MissionVision from "@/components/MissionVision";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Showcase from "@/components/Showcase";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Values />
        <MissionVision />
        <Services />
        <WhyUs />
        <Testimonials />
        <Showcase />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
