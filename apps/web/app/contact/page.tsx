import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/contact/Hero";
import InquiryTypes from "@/components/contact/InquiryTypes";
import ContactInfo from "@/components/contact/ContactInfo";
import CTA from "@/components/contact/CTA";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <InquiryTypes />

        <ContactInfo />

        <CTA />
      </main>

      <Footer />
    </>
  );
}
