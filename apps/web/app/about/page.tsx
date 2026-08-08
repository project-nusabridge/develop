import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import Mission from "@/components/about/Mission";
import ChinaIndonesia from "@/components/about/ChinaIndonesia";
import CTA from "@/components/about/CTA";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Story />

        <Mission />

        <ChinaIndonesia />

        <CTA />
      </main>

      <Footer />
    </>
  );
}
