// File: client/src/Teacher/components/profile/ProfileInfo.jsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Linkedin, Mail, Phone, Twitter } from "lucide-react";

export default function ProfileInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* About Section */}
      <div className="md:col-span-2 bg-card dark:bg-card/30 border border-border rounded-xl p-5 space-y-4">
        <div>
          <h3 className="text-sm font-semibold mb-3">About Me</h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            I am a passionate educator with over 10 years of experience in
            teaching Mathematics and Computer Science. My goal is to make
            complex concepts easy to understand for students of all levels. I
            specialize in Web Development, Data Structures, and Algorithms.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Web Development",
              "React",
              "Node.js",
              "Python",
              "Data Science",
              "Machine Learning",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="font-normal text-xs bg-secondary/50"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Contact & Socials */}
      <div className="space-y-4">
        {/* Contact Info */}
        <div className="bg-card dark:bg-card/30 border border-border rounded-xl p-5 space-y-4">
          <h3 className="text-sm font-semibold">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span className="text-muted-foreground truncate">
                teacher@example.com
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="text-muted-foreground">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <span className="text-muted-foreground">www.portfolio.com</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-card dark:bg-card/30 border border-border rounded-xl p-5 space-y-4">
          <h3 className="text-sm font-semibold">Social Profiles</h3>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-muted-foreground/20 hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-muted-foreground/20 hover:border-primary hover:text-primary transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-muted-foreground/20 hover:border-primary hover:text-primary transition-colors"
            >
              <Globe className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
