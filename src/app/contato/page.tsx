import { ContactHero } from "@/components/contact/components/contact-hero";
import { ContactForm } from "@/components/contact/components/contact-form";
import { ContactInfo } from "@/components/contact/components/contact-info";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#fefefe]">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </div>
  );
}
