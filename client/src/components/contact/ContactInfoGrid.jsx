// File: client/src/components/contact/ContactInfoGrid.jsx
import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ContactInfoGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Card 1: Email (Detailed) */}
      <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] dark:hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.2)]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <CardContent className="p-6 flex flex-col gap-5 h-full justify-between relative z-10">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Mail className="h-6 w-6" />
              </div>
              <Badge
                variant="secondary"
                className="text-xs font-medium text-primary bg-primary/10 border-primary/20"
              >
                <Clock className="w-3 h-3 mr-1" /> Replies &lt; 2h
              </Badge>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">Email</h3>
              <p className="text-sm text-muted-foreground mt-1">
                For general inquiries and support.
              </p>
              <p className="text-sm font-medium text-foreground mt-2 select-all">
                info@thebrilliance.pk
              </p>
            </div>
          </div>
          <Button
            className="w-full mt-2 font-medium bg-primary text-white shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <a href="mailto:info@thebrilliance.pk">Send Email</a>
          </Button>
        </CardContent>
      </Card>

      {/* Card 2: Phone (Detailed) */}
      <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] dark:hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.2)]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <CardContent className="p-6 flex flex-col gap-5 h-full justify-between relative z-10">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Phone className="h-6 w-6" />
              </div>
              <Badge
                variant="outline"
                className="text-xs font-medium text-muted-foreground border-border"
              >
                Mon-Fri, 9am-6pm
              </Badge>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">Phone</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Speak directly with our team.
              </p>
              <p className="text-sm font-medium text-foreground mt-2 select-all">
                +92 311 1555551
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full mt-2 font-medium border-primary/20 hover:bg-primary/5 hover:text-primary transition-all"
            asChild
          >
            <a href="tel:+923111555551">Call Now</a>
          </Button>
        </CardContent>
      </Card>

      {/* Card 3: Visit HQ */}
      <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] dark:hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.2)]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <CardContent className="p-6 flex flex-col gap-5 h-full justify-between relative z-10">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <MapPin className="h-6 w-6" />
              </div>
              <Badge
                variant="secondary"
                className="text-[10px] h-5 px-1.5 font-medium text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400"
              >
                Eng & Design
              </Badge>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">
                Headquarters
              </h3>
              <p className="text-sm text-muted-foreground mt-1 text-wrap">
                Sector F-10/2, Islamabad, Pakistan.
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            className="text-primary hover:text-primary hover:bg-primary/10 gap-2 shrink-0 group/btn w-full justify-start pl-0"
            asChild
          >
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Maps{" "}
              <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
