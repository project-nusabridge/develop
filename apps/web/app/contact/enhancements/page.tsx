import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CaseStudies from "@/components/contact/CaseStudies";
import CTAResources from "@/components/contact/CTAResources";
import FAQ from "@/components/contact/FAQ";
import Resources from "@/components/contact/Resources";

export default function ContactEnhancementsPage() {
  return (
    <>
      <Navbar />

      <main>
        <Resources />
        <CaseStudies />
        <FAQ />
        <CTAResources />
      </main>

      <Footer />
    </>
  );
}
