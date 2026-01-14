// File: client/src/components/courses/CourseCard.jsx
import React from "react";
import { motion as Motion } from "motion/react";
import {
  BookOpen,
  Clock,
  Users,
  Star,
  ArrowRight,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const categoryColors = {
  ICS: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  CSS: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  FSc: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  default: "bg-primary/10 text-primary border-primary/20",
};

const CourseCard = ({ course }) => {
  const categoryStyle =
    categoryColors[course.category] || categoryColors.default;

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col overflow-hidden rounded-xl border-muted-foreground/10 bg-card dark:bg-background/70 backdrop-blur-md group hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl dark:shadow-none">
        {/* Thumbnail with Preview Overlay */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Preview Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/90 dark:bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-400 shadow-lg">
              <PlayCircle className="h-8 w-8 text-primary dark:text-white" />
            </div>
          </div>

          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className={`border font-semibold text-xs backdrop-blur-sm ${categoryStyle}`}
            >
              {course.category}
            </Badge>
          </div>

          {/* Best Seller Badge */}
          {course.rating > 4.7 && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-xs border-none shadow-md">
                <Sparkles className="h-3 w-3 mr-1" />
                Best Seller
              </Badge>
            </div>
          )}

          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3">
            <Badge
              variant="secondary"
              className="bg-black/70 text-white border-none backdrop-blur-sm font-medium text-xs"
            >
              <Clock className="h-3 w-3 mr-1" />
              {course.duration}
            </Badge>
          </div>
        </div>

        <CardHeader className="p-4 pb-2 flex-grow-0">
          {/* Instructor */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-[10px] font-bold text-primary-foreground shrink-0">
              {course.instructor
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex items-center gap-1.5 text-xs min-w-0">
              <span className="font-semibold text-foreground truncate">
                {course.instructor}
              </span>
              {course.instructorRole && (
                <>
                  <span className="text-muted-foreground shrink-0">•</span>
                  <span className="text-muted-foreground truncate">
                    {course.instructorRole}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {course.title}
          </h3>
        </CardHeader>

        <CardContent className="p-4 pt-2 flex-grow">
          {/* Course Stats */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <div className="flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5" />
              <span className="font-medium">{course.chapters} Chapters</span>
            </div>
            <div className="flex items-center gap-1.5">
              <PlayCircle className="h-3.5 w-3.5" />
              <span className="font-medium">{course.lessons} Lessons</span>
            </div>
          </div>

          {/* Rating & Students */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-yellow-500/10">
              <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
              <span className="font-bold text-sm">{course.rating}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Users className="h-3.5 w-3.5" />
              <span className="font-medium">
                {course.students.toLocaleString()} students
              </span>
            </div>
          </div>
        </CardContent>

        {/* Price & CTA */}
        <CardFooter className="p-4 pt-0 mt-auto border-t border-muted-foreground/10">
          <div className="w-full flex items-center justify-between gap-3">
            {/* Price */}
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">
                Rs. {course.price.toLocaleString()}
              </span>
              <span className="text-xs text-muted-foreground line-through">
                Rs. {(course.price * 2).toLocaleString()}
              </span>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              size="sm"
              className="rounded-lg font-semibold transition-all duration-300 group/btn shadow-sm hover:shadow-md"
            >
              <Link to={`/courses/${course.id}`}>
                View Details
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Motion.div>
  );
};

export default CourseCard;
