import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoGrid } from "@/components/contact/ContactInfoGrid";
import { PackageFeatures } from "@/components/contact/PackageFeatures";
import { ContactFAQ } from "@/components/contact/ContactFAQ";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ContactHero />

      {/* Contact Info Cards Section */}
      <section className="container mx-auto px-4 py-8 lg:py-12">
        <ContactInfoGrid />
      </section>

      {/* Package Features Section */}
      <PackageFeatures />

      {/* FAQ Section */}
      <ContactFAQ />

      {/* Placeholder for future Contact Form or Details if needed */}
      <section className="container mx-auto px-4 py-12 text-center text-muted-foreground hidden">
        <p>Contact details and Form.</p>
      </section>
    </div>
  );
};

export default Contact;
