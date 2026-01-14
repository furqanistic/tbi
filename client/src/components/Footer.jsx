// File: client/src/components/Footer.jsx
import { Facebook, Heart, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

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

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 mb-10 sm:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <img
                src={logo}
                alt="TBI Logo"
                className="h-8 w-auto rounded-md"
              />
              <span className="text-xl font-bold text-foreground">TBI</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto sm:mx-0">
              Comprehensive preparation packages for CSS and PMS candidates.
              Conceptual clarity and professional guidance.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary/50 dark:bg-secondary/30 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, idx) => (
            <div
              key={idx}
              className="space-y-3 sm:space-y-4 text-center sm:text-left"
            >
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border/40 flex sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-muted-foreground">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} TBI. All rights reserved.
          </p>
          <div className="text-center sm:text-left">
            <a
              href="https://www.furba.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 px-3 py-1.5 transition-all duration-300"
            >
              <span className="text-muted-foreground">Built with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 group-hover:scale-110 transition-transform animate-pulse" />
              <span className="text-muted-foreground">by</span>
              <span className="text-primary/50 font-bold hover:text-primary transition-colors duration-200 inline-block tracking-wide hover:underline ">
                FURBA
              </span>
            </a>
          </div>
         
        </div>
      </div>
    </footer>
  );
}
