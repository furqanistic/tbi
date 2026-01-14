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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden rounded-sm border-muted-foreground/10 bg-background/10 backdrop-blur-md group hover:border-primary/40 transition-all duration-500 shadow-lg hover:shadow-2xl dark:shadow-primary/5">
        {/* Thumbnail with Preview Overlay */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />

          {/* Preview Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
              <PlayCircle className="h-10 w-10 text-white fill-white/30" />
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className={`border font-bold backdrop-blur-md ${categoryStyle}`}
            >
              {course.category}
            </Badge>
            {course.rating > 4.7 && (
              <Badge className="bg-linear-to-r from-amber-500 to-orange-500 text-white font-bold border-none shadow-lg shadow-orange-500/30">
              <Star/> Best Seller
              </Badge>
            )}
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3">
            <Badge
              variant=""
              className="bg-linear-to-r from-fuchsia-500 to-fuchsia-900 text-white font-bold shadow-lg shadow-orange-500/30"
            >
              <Clock className="h-3 w-3 mr-1" />
              {course.duration}
            </Badge>
          </div>
        </div>

        <CardHeader className="p-5 pb-3">
          {/* Instructor */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-linear-to-br from-primary to-primary/60 flex items-center justify-center text-xs font-bold text-primary-foreground">
              {course.instructor
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex items-center gap-1 text-xs ">
              <span className="font-semibold text-primary">
                {course.instructor}
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">
                {course.instructorRole}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {course.title}
          </h3>
        </CardHeader>

        <CardContent className="p-5 pt-0">
          {/* Course Stats */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5">
            <div className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              <span className="font-medium">{course.chapters} Chapters</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span className="font-medium">{course.lessons} Lessons</span>
            </div>
          </div>

          {/* Rating & Price */}
          <div className="flex items-center justify-between pt-4 border-t border-muted-foreground/10">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-yellow-500/10">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="font-bold text-sm">{course.rating}</span>
              </div>
              <span className="text-xs text-muted-foreground font-medium">
                ({course.students.toLocaleString()} students)
              </span>
            </div>
            <div className="text-xl font-black text-primary">
              Rs. {course.price.toLocaleString()}
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-5 pt-0">
          <Button
            asChild
            className="w-full rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground font-bold transition-all duration-300 group/btn"
          >
            <Link
              to={`/courses/${course.id}`}
              className="flex items-center justify-center gap-2"
            >
              View Course Details
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </Motion.div>
  );
};

export default CourseCard;
