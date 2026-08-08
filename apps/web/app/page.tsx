import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Solutions from "@/components/home/Solutions";
import Industries from "@/components/home/Industries";
import SupplyNetwork from "@/components/home/SupplyNetwork";
import Process from "@/components/home/Process";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TrustBar />

        <Solutions />

        <Industries />

        <SupplyNetwork />

        <Process />

        <CTA />
      </main>

      <Footer />
    </>
  );
}
