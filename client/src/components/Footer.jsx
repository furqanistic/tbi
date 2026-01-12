// File: client/src/components/Footer.jsx
import {
  GraduationCap,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "@/assets/blue-logo.jpeg";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "Courses", href: "#courses" },
      { name: "Faculty", href: "#faculty" },
      { name: "About Us", href: "#about" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Free Notes", href: "#notes" },
      { name: "Sample Papers", href: "#papers" },
      { name: "Syllabus", href: "#syllabus" },
      { name: "Study Plans", href: "#plans" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "#contact" },
      { name: "FAQs", href: "#faqs" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Privacy Policy", href: "#privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-primary/5 bg-background overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-primary/5 rounded-full blur-[120px] -z-10 translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8">
          {/* Brand Section */}
          <div className="col-span-full lg:col-span-2 space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <img
                src={logo}
                alt="TBI Logo"
                className="h-10 w-auto rounded-md"
              />
              <span className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                TBI
              </span>
            </div>
            <p className="max-w-md mx-auto lg:mx-0 text-muted-foreground text-sm leading-relaxed font-medium">
              A comprehensive preparation package for CSS and PMS candidates,
              ensuring conceptual clarity and professional guidance for future
              aspirants.
            </p>
            <div className="flex gap-4 items-center justify-center lg:justify-start pt-2">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300 border border-primary/5"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-6 text-center sm:text-left">
              <h4 className="text-sm font-black uppercase tracking-widest text-foreground/90">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Minimalist Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()}{" "}
            <span className="text-foreground font-bold italic tracking-tight">
              TBI
            </span>
            . All rights reserved.
          </div>
          <div className="flex gap-8 text-[11px] text-muted-foreground/60 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors py-1">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors py-1">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
