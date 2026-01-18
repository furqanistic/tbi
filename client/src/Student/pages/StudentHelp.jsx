// File: client/src/Student/pages/StudentHelp.jsx
import { useState } from "react";
import {
  Search,
  MessageCircle,
  Mail,
  Phone,
  FileText,
  Video,
  ChevronDown,
  ExternalLink,
  Clock,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Headphones,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        question: "How do I enroll in a course?",
        answer:
          "To enroll in a course, navigate to the 'My Courses' section from the sidebar, browse available courses, and click 'Enroll Now' on your desired course. You'll be guided through the payment process if applicable.",
      },
      {
        question: "How do I access my enrolled courses?",
        answer:
          "All your enrolled courses are available in the 'My Courses' section. Simply click on any course card to start learning. Your progress is automatically saved.",
      },
      {
        question: "Can I download course materials?",
        answer:
          "Yes! Most courses offer downloadable PDFs, notes, and resources. Look for the download icon next to each resource in your course player.",
      },
    ],
  },
  {
    category: "Mock Tests",
    items: [
      {
        question: "How do mock tests work?",
        answer:
          "Mock tests simulate real exam conditions. Navigate to 'Mock Tests', select an available test, and click 'Start Test'. You'll have a time limit to complete all questions. Results are available immediately after submission.",
      },
      {
        question: "Can I retake a mock test?",
        answer:
          "Yes! You can retake any mock test multiple times to improve your score. Your best score is displayed on your results dashboard.",
      },
      {
        question: "How are mock tests graded?",
        answer:
          "Tests are automatically graded based on correct answers. Detailed explanations for each question are provided in your results to help you learn.",
      },
    ],
  },
  {
    category: "Account & Billing",
    items: [
      {
        question: "How do I update my profile information?",
        answer:
          "Go to Settings from the sidebar, navigate to the 'General' tab, and update your information. Don't forget to click 'Save Changes' when done.",
      },
      {
        question: "How do I change my password?",
        answer:
          "In Settings, go to the 'Security' tab where you can update your password. You'll need to enter your current password for verification.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit/debit cards, UPI, net banking, and digital wallets. All transactions are secure and encrypted.",
      },
    ],
  },
  {
    category: "Technical Issues",
    items: [
      {
        question: "Video not playing properly?",
        answer:
          "Try clearing your browser cache, checking your internet connection, or switching to a different browser. If issues persist, contact our support team.",
      },
      {
        question: "I'm experiencing slow loading times",
        answer:
          "This could be due to your internet connection or high server traffic. Try refreshing the page, checking your connection speed, or accessing during off-peak hours.",
      },
    ],
  },
];

const contactOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team",
    availability: "Available 9 AM - 9 PM",
    action: "Start Chat",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "support@tbiprep.com",
    availability: "Response within 24 hours",
    action: "Send Email",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "+92 (300) 123-4567",
    availability: "Mon-Sat, 9 AM - 6 PM",
    action: "Call Now",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

const quickLinks = [
  { icon: BookOpen, title: "Course Catalog", href: "/student/courses" },
  { icon: FileText, title: "Mock Tests", href: "/student/mocks" },
  { icon: Video, title: "Video Tutorials", href: "#tutorials" },
  { icon: ExternalLink, title: "Community Forum", href: "#" },
];

const tutorials = [
  {
    title: "Getting Started with TBI Prep",
    duration: "5:32",
    thumbnail: "https://placehold.co/400x225/1e293b/cbd5e1?text=Tutorial+1",
    views: "2.1k",
  },
  {
    title: "How to Take Mock Tests",
    duration: "7:15",
    thumbnail: "https://placehold.co/400x225/1e293b/cbd5e1?text=Tutorial+2",
    views: "1.8k",
  },
  {
    title: "Understanding Your Results",
    duration: "4:48",
    thumbnail: "https://placehold.co/400x225/1e293b/cbd5e1?text=Tutorial+3",
    views: "1.5k",
  },
  {
    title: "Optimizing Your Study Plan",
    duration: "6:25",
    thumbnail: "https://placehold.co/400x225/1e293b/cbd5e1?text=Tutorial+4",
    views: "1.2k",
  },
];

export default function StudentHelp() {
  const [searchQuery, setSearchQuery] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="text-center space-y-4 pb-8 border-b border-border/40">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
          <Headphones className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          How can we help you?
        </h1>
        <p className="text-muted-foreground text-base max-w-2xl mx-auto">
          Search our knowledge base, browse FAQs, or get in touch with our
          support team
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mt-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for help articles, topics, or questions..."
              className="pl-12 h-12 text-base border-border/60 focus-visible:ring-primary/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - FAQs */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-border/40 bg-card/30 hover:bg-accent/50 hover:border-border transition-all group"
              >
                <link.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-center">
                  {link.title}
                </span>
              </a>
            ))}
          </div>

          {/* FAQs Section */}
          <div className="bg-card/30 rounded-lg border border-border/40 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Frequently Asked Questions
            </h2>

            {searchQuery && filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <AlertCircle className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                <p className="text-muted-foreground">
                  No results found for "{searchQuery}"
                </p>
                <Button
                  variant="link"
                  onClick={() => setSearchQuery("")}
                  className="mt-2"
                >
                  Clear search
                </Button>
              </div>
            ) : (
              <Accordion type="single" collapsible className="space-y-3">
                {(searchQuery ? filteredFaqs : faqs).map((category, i) => (
                  <div key={i} className="space-y-2">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider px-1 mt-4 first:mt-0">
                      {category.category}
                    </h3>
                    {category.items.map((item, j) => (
                      <AccordionItem
                        key={`${i}-${j}`}
                        value={`${i}-${j}`}
                        className="border border-border/40 rounded-lg px-4 bg-background/50 data-[state=open]:bg-accent/30"
                      >
                        <AccordionTrigger className="text-sm font-medium hover:no-underline">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground pb-4">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </div>
                ))}
              </Accordion>
            )}
          </div>

          {/* Video Tutorials */}
          <div className="bg-card/30 rounded-lg border border-border/40 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Video className="w-5 h-5 text-primary" />
              Video Tutorials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tutorials.map((tutorial, i) => (
                <div
                  key={i}
                  className="group cursor-pointer rounded-lg border border-border/40 overflow-hidden bg-background/50 hover:bg-accent/30 transition-all"
                >
                  <div className="relative aspect-video bg-muted overflow-hidden">
                    <img
                      src={tutorial.thumbnail}
                      alt={tutorial.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
                        <Video className="w-6 h-6 text-gray-900 ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded">
                      {tutorial.duration}
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-medium line-clamp-2 mb-1">
                      {tutorial.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {tutorial.views} views
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Contact & Status */}
        <div className="space-y-6">
          {/* Contact Options */}
          <div className="bg-card/30 rounded-lg border border-border/40 p-6">
            <h2 className="text-lg font-semibold mb-4">Contact Support</h2>
            <div className="space-y-3">
              {contactOptions.map((option, i) => (
                <div
                  key={i}
                  className={cn(
                    "p-4 rounded-lg border border-border/40 bg-background/50 hover:bg-accent/30 transition-all group cursor-pointer",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={cn("p-2 rounded-lg shrink-0", option.bgColor)}
                    >
                      <option.icon className={cn("w-5 h-5", option.color)} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-0.5">
                        {option.title}
                      </h3>
                      <p className="text-xs text-foreground/80 mb-1">
                        {option.description}
                      </p>
                      <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {option.availability}
                      </p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full mt-3 h-8 text-xs"
                  >
                    {option.action}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-card/30 rounded-lg border border-border/40 p-6">
            <h2 className="text-lg font-semibold mb-4">Send us a Message</h2>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                  Subject
                </label>
                <Input
                  placeholder="Brief description of your issue"
                  className="h-9 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                  Message
                </label>
                <Textarea
                  placeholder="Describe your issue in detail..."
                  className="min-h-25 text-sm resize-none"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                />
              </div>
              <Button className="w-full" size="sm">
                <Send className="w-3.5 h-3.5 mr-2" />
                Send Message
              </Button>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-card/30 rounded-lg border border-border/40 p-6">
            <h2 className="text-lg font-semibold mb-4">System Status</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-sm">All Systems Operational</span>
                </div>
              </div>
              <div className="pt-3 border-t border-border/40 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Video Streaming</span>
                  <span className="text-green-500 font-medium">Online</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Mock Tests</span>
                  <span className="text-green-500 font-medium">Online</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Payment System</span>
                  <span className="text-green-500 font-medium">Online</span>
                </div>
              </div>
              <Button variant="link" className="w-full text-xs p-0 h-auto mt-2">
                View Status Page
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>

          {/* Support Team */}
          <div className="bg-card/30 rounded-lg border border-border/40 p-6">
            <h2 className="text-lg font-semibold mb-4">Support Team</h2>
            <div className="space-y-3">
              {[
                { name: "Sarah Ahmed", role: "Senior Support", online: true },
                { name: "Ali Hassan", role: "Technical Support", online: true },
                {
                  name: "Fatima Khan",
                  role: "Billing Support",
                  online: false,
                },
              ].map((member, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/30 transition-colors"
                >
                  <div className="relative">
                    <Avatar className="h-10 w-10 border border-border/50">
                      <AvatarImage
                        src={`https://i.pravatar.cc/150?u=${member.name}`}
                      />
                      <AvatarFallback className="text-xs">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={cn(
                        "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background",
                        member.online ? "bg-green-500" : "bg-gray-400",
                      )}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium truncate">
                      {member.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
