// File: client/src/Teacher/pages/TeacherHelp.jsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Book, FileQuestion, MessageCircle, Video } from "lucide-react";

export default function TeacherHelp() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl mx-auto w-full pb-10">
      {/* 1. Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">Help Center</h1>
        <p className="text-muted-foreground text-sm">
          Find answers to common questions or get in touch with our support
          team.
        </p>
      </div>

      {/* 2. Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover:border-primary/50 transition-colors cursor-pointer bg-card dark:bg-card/30">
          <CardHeader className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
              <Book className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-base">Documentation</CardTitle>
              <CardDescription className="text-xs">
                Detailed guides on how to use the platform.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="hover:border-primary/50 transition-colors cursor-pointer bg-card dark:bg-card/30">
          <CardHeader className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-base">Video Tutorials</CardTitle>
              <CardDescription className="text-xs">
                Step-by-step video guides for visual learners.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="hover:border-primary/50 transition-colors cursor-pointer bg-card dark:bg-card/30">
          <CardHeader className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-base">Community Forum</CardTitle>
              <CardDescription className="text-xs">
                Connect with other teachers and share tips.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 3. FAQ */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <FileQuestion className="w-5 h-5 text-primary" />
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm">
                How do I create a new course?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xs leading-relaxed">
                Navigate to the "Courses" tab in the sidebar and click on the
                "Create New" button. Follow the step-by-step wizard to upload
                your content and set pricing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-sm">
                When do I get paid?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xs leading-relaxed">
                Payouts are processed on the 1st and 15th of every month. Ensure
                your payout method is correctly configured in the Settings &gt;
                Payout tab.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-sm">
                Can I edit a published test?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xs leading-relaxed">
                Yes, you can edit tests. However, if students have already taken
                the test, major changes (like removing questions) might affect
                their grading history.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-sm">
                How do I verify my account?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xs leading-relaxed">
                Go to Settings &gt; General and upload the required ID
                documents. Verification usually takes 24-48 hours.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* 4. Contact Form */}
        <div className="bg-card dark:bg-card/30 border border-border rounded-xl p-6  space-y-4 h-fit">
          <div>
            <h3 className="text-lg font-semibold">Contact Support</h3>
            <p className="text-sm text-muted-foreground">
              Can't find what you're looking for? Send us a message.
            </p>
          </div>

          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label htmlFor="subject" className="text-xs">
                Subject
              </Label>
              <Input
                id="subject"
                placeholder="e.g., Issue with course upload"
                className="bg-background"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message" className="text-xs">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Describe your issue in detail..."
                className="min-h-[120px] bg-background resize-none"
              />
            </div>

            <Button className="w-full mt-2">Send Message</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
