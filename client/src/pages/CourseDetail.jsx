// File: client/src/pages/CourseDetail.jsx
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { courses } from "@/lib/data/coursesData";
import { motion as Motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Clock,
  Users,
  Star,
  ChevronRight,
  PlayCircle,
  Check,
  Globe,
  Trophy,
  Share2,
  Gift,
  Tag,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Award,
  MonitorPlay,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen pt-44 text-center bg-background">
        <h2 className="text-3xl font-bold text-foreground">Course not found</h2>
        <Button
          onClick={() => navigate("/courses")}
          className="mt-4 rounded-sm"
        >
          Back to Courses
        </Button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground pt-28 pb-16 px-4 sm:px-6 lg:px-24">
      {/* Background patterns - matching CoursePayment */}
      <div
        className="fixed inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/courses")}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </Button>
        </Motion.div>

        {/* Hero Section */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link
              to="/courses"
              className="hover:text-primary transition-colors font-medium"
            >
              Courses
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="cursor-pointer hover:text-primary transition-colors font-medium">
              {course.category}
            </span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium truncate max-w-[200px]">
              {course.title}
            </span>
          </nav>

          {/* Title and Description */}
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none rounded-sm px-3 py-1 text-xs font-semibold">
                Best Seller
              </Badge>
              <Badge
                variant="outline"
                className="rounded-sm text-xs font-medium"
              >
                {course.category}
              </Badge>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              {course.title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {course.description}
            </p>

            {/* Rating & Meta */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 font-bold">
                  {course.rating}
                </span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(course.rating)
                          ? "fill-yellow-500 text-yellow-500"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({course.students.toLocaleString()} reviews)
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                {course.students.toLocaleString()} students enrolled
              </div>
            </div>

            {/* Instructor & Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>
                  By{" "}
                  <span className="text-primary font-semibold hover:underline cursor-pointer">
                    {course.instructor}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Updated January 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>English</span>
              </div>
            </div>
          </div>
        </Motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Content */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-10"
          >
            {/* Course Stats Bar */}
            <Card className="rounded-xl border-muted-foreground/10 dark:bg-background/70 backdrop-blur-md overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-muted-foreground/10">
                  <div className="p-4 sm:p-6 text-center">
                    <Clock className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <div className="text-lg font-bold">
                      {course.duration || "12h 30m"}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Duration
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 text-center">
                    <BookOpen className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <div className="text-lg font-bold">{course.lessons}</div>
                    <div className="text-xs text-muted-foreground">Lessons</div>
                  </div>
                  <div className="p-4 sm:p-6 text-center">
                    <Award className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <div className="text-lg font-bold">
                      {course.level || "All Levels"}
                    </div>
                    <div className="text-xs text-muted-foreground">Level</div>
                  </div>
                  <div className="p-4 sm:p-6 text-center">
                    <MonitorPlay className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <div className="text-lg font-bold">Online</div>
                    <div className="text-xs text-muted-foreground">Mode</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What You'll Learn */}
            <Card className="rounded-xl border-muted-foreground/10 dark:bg-background/70 backdrop-blur-md">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-1 h-6 bg-primary rounded-full" />
                  What you'll learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.whatYouWillLearn.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="mt-0.5 p-1 rounded-full bg-primary/10 text-primary shrink-0">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Content */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold">Course Content</h2>
                  <p className="text-sm text-muted-foreground">
                    {course.chapters} sections • {course.lessons} lectures
                  </p>
                </div>
                <button className="text-sm font-medium text-primary hover:underline">
                  Expand all sections
                </button>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-3">
                {course.syllabus.map((section, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border rounded-xl border-muted-foreground/10 dark:bg-background/70 backdrop-blur-md overflow-hidden"
                  >
                    <AccordionTrigger className="hover:no-underline px-4 sm:px-6 py-4">
                      <div className="flex items-center gap-4 w-full text-left">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary text-sm">
                          {idx + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm sm:text-base truncate">
                            {section.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {section.lessons.length} lectures
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 sm:px-6 pb-4">
                      <div className="space-y-2 pt-2">
                        {section.lessons.map((lesson, lessonIdx) => (
                          <div
                            key={lessonIdx}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <PlayCircle className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                              <span className="text-sm truncate">
                                {lesson.title}
                              </span>
                            </div>
                            <span className="text-xs text-muted-foreground shrink-0 ml-2">
                              {lesson.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Requirements */}
            <Card className="rounded-xl border-muted-foreground/10 dark:bg-background/70 backdrop-blur-md">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl font-bold mb-6">Requirements</h2>
                <ul className="space-y-3">
                  {course.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {req}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="rounded-xl border-muted-foreground/10 dark:bg-background/70 backdrop-blur-md">
              <CardContent className="p-6 sm:p-8 space-y-6">
                <h2 className="text-xl font-bold">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {course.longDescription}
                </p>

                {/* Who This Course Is For */}
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    Who this course is for
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.whoThisCourseIsFor.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Motion.div>

          {/* Sidebar */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="lg:sticky lg:top-28 space-y-6">
              <Card className="rounded-xl border-muted-foreground/10 dark:bg-background/70 backdrop-blur-md overflow-hidden">
                {/* Course Thumbnail */}
                <div className="relative aspect-video group cursor-pointer overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <PlayCircle className="h-7 w-7 text-primary-foreground fill-primary-foreground" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-6">
                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold">
                        Rs. {course.price.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground line-through text-lg">
                        Rs. {(course.price * 2).toLocaleString()}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-red-500/10 text-red-500 text-xs font-semibold rounded-sm">
                      <Clock className="h-3 w-3" />
                      50% off - Limited time offer
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full h-12 rounded-lg font-semibold text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
                    >
                      <Link to={`/courses/${course.id}/payment`}>
                        Enroll Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full h-12 rounded-lg font-medium"
                    >
                      Try Free Preview
                    </Button>
                  </div>

                  <Separator />

                  {/* Quick Actions */}
                  <div className="flex items-center justify-center gap-6">
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Share2 className="h-4 w-4" />
                      Share
                    </button>
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Gift className="h-4 w-4" />
                      Gift
                    </button>
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Tag className="h-4 w-4" />
                      Coupon
                    </button>
                  </div>

                  <Separator />

                  {/* Trust Badges */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <ShieldCheck className="h-4 w-4 text-green-500 shrink-0" />
                      <span>30-Day Money-Back Guarantee</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Award className="h-4 w-4 text-blue-500 shrink-0" />
                      <span>Lifetime Access</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 text-purple-500 shrink-0" />
                      <span>
                        {course.students.toLocaleString()}+ students enrolled
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Motion.div>
        </div>
      </div>
    </main>
  );
};

export default CourseDetail;
