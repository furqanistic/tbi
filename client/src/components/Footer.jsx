// File: client/src/components/Footer.jsx
import { Facebook, Heart, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo-1.png";

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
    <footer className="bg-background border-t border-border/40 md:pt-8 pb-4 sm:pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 lg:gap-8 mb-6 sm:mb-8">
          {/* Brand & Social */}
          <div className="col-span-3 md:col-span-2 space-y-4 text-left">
            <div className=" mt-5  md:mt-0  flex items-center justify-start">
              <img src={logo} alt="TBI Logo" className="h-10  scale-200 w-auto origin-center" />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              Conceptual clarity and professional guidance for CSS and PMS
              candidates. Comprehensive preparation packages tailored for
              success.
            </p>
            <div className="flex gap-2 justify-start">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-2 text-left">
              <h4 className="text-xs font-bold text-foreground uppercase tracking-widest opacity-80">
                {section.title}
              </h4>
              <ul className="space-y-1.5">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-block"
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
        <div className="pt-6 border-t border-border/40 flex flex-row  justify-around md:justify-between items-center gap-4 text-xs text-muted-foreground/80">
          <p>© {new Date().getFullYear()} TBI. All rights reserved.</p>
          <div className="flex items-center gap-1.5 transition-all duration-300">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>by</span>
            <a
              href="https://www.furba.org/"
              target="_blank"
              rel="noopener noreferrer"
              className=" inline-block font-bold text-blue-500 hover:text-primary transition-colors tracking-wide"
            >
              FURBA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
