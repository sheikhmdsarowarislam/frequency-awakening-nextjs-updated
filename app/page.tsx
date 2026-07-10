import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";
import Videos from "@/components/Videos";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Activate from "@/components/Activate";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Platforms />
        <Videos />
        <WhyChooseUs />
        <Testimonials />
        <About />
        <FAQ />
        <Activate />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
