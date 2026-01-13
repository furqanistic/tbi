// File: client/src/components/contact/ContactHero.jsx
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Clock,
  ExternalLink,
  Users,
  Award,
  BookOpen,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ContactHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative w-full overflow-hidden bg-background py-16 lg:py-24">
      {/* Premium Gradient Mesh Background */}
      <div className="absolute inset-0 z-0 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>

      {/* Subtle ambient glows for depth */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 dark:opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-20 dark:opacity-10 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Column: Text & Context */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col gap-6 lg:sticky lg:top-24 self-start"
          >
            <motion.div variants={itemVariants}>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Contact</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl text-foreground">
                Let&apos;s Build something{" "}
                <span className="text-primary">Great</span>
              </h1>
              <p className="max-w-[550px] text-lg text-muted-foreground md:text-xl leading-relaxed">
                We simplify the complex. Whether you have a question, a project
                idea, or just want to chat, our team is ready to help.
              </p>

              {/* Trusted By Row */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-8 pt-8 border-t border-border/50 mt-8"
              >
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <div className="p-2.5 rounded-full bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">500+</p>
                    <p className="text-xs text-muted-foreground">
                      Qualified Candidates
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <div className="p-2.5 rounded-full bg-primary/10 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Expert</p>
                    <p className="text-xs text-muted-foreground">CSS Faculty</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <div className="p-2.5 rounded-full bg-primary/10 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      Top Rated
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Industry Recognized
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Contact Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6 md:grid-cols-2"
          >
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
                      hello@tbi.com
                    </p>
                  </div>
                </div>
                <Button
                  className="w-full mt-2 font-medium bg-primary text-white shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <a href="mailto:hello@tbi.com">Send Email</a>
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
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-2 font-medium border-primary/20 hover:bg-primary/5 hover:text-primary transition-all"
                  asChild
                >
                  <a href="tel:+15551234567">Call Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Card 3: Visit HQ (Full Width) */}
            <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] dark:hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.2)] md:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between relative z-10">
                <div className="flex gap-4 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-lg text-foreground">
                        Headquarters
                      </h3>
                      <Badge
                        variant="secondary"
                        className="text-[10px] h-5 px-1.5 font-medium text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400"
                      >
                        Engineering & Design
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 max-w-xs">
                      123 Innovation Dr, Tech City, TC 90210.
                      <br />
                      Located in the heart of the innovation district.
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary hover:bg-primary/10 gap-2 shrink-0 group/btn"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
