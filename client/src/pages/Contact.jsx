import { ContactHero } from "@/components/contact/ContactHero";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ContactHero />
      {/* Placeholder for future Contact Form or Details */}
      <section className="container mx-auto px-4 py-12 text-center text-muted-foreground">
        <p>Contact details and form will go here.</p>
      </section>
    </div>
  );
};

export default Contact;
