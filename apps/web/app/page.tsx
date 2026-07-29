import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Solutions from "@/components/home/Solutions";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <Solutions />
      </main>

      <Footer />
    </>
  );
}