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

const CourseCard = ({ course, columnsPerRow }) => {
  const categoryStyle =
    categoryColors[course.category] || categoryColors.default;

  const isDense = columnsPerRow >= 5;
  const isSuperDense = columnsPerRow >= 6;

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Card
        className={`h-full flex flex-col overflow-hidden rounded-sm border-muted-foreground/10 bg-card dark:bg-background/70 backdrop-blur-md group hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl dark:shadow-none`}
      >
        {/* Thumbnail Section */}
        <div className="relative aspect-video overflow-hidden shrink-0">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient & Play Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-10 h-10 rounded-full bg-white/90 dark:bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-400 shadow-lg">
              <PlayCircle className="h-6 w-6 text-primary dark:text-white" />
            </div>
          </div>

          {/* Top Badges */}
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            <Badge
              variant="secondary"
              className={`px-1.5 py-0 border font-semibold text-[10px] backdrop-blur-sm ${categoryStyle}`}
            >
              {course.category}
            </Badge>
          </div>

          {/* Best Seller & Duration */}
          {!isSuperDense && (
            <>
              {course.rating > 4.7 && (
                <div className="absolute top-2 right-2">
                  <Badge className="bg-linear-to-r from-amber-500 to-orange-500 text-white font-semibold text-[9px] px-1.5 py-0 border-none shadow-md">
                    <Sparkles className="h-2.5 w-2.5 mr-0.5" />
                    Best Seller
                  </Badge>
                </div>
              )}
              <div className="absolute bottom-2 right-2">
                <Badge
                  variant="secondary"
                  className="bg-black/70 text-white border-none backdrop-blur-sm font-medium text-[9px] px-1.5 py-0"
                >
                  <Clock className="h-2.5 w-2.5 mr-0.5" />
                  {course.duration}
                </Badge>
              </div>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="p-2.5 flex flex-col grow gap-2">
          {/* Instructor & Title */}
          <div className="space-y-1.5">
            {!isDense && (
              <div className="flex items-center gap-1.5 opacity-80">
                <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-[8px] font-bold text-primary shrink-0">
                  {course.instructor
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span className="text-[10px] font-medium text-muted-foreground truncate">
                  {course.instructor}
                </span>
              </div>
            )}

            <h3
              className={`${
                isDense ? "text-xs" : "text-sm"
              } font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300`}
            >
              {course.title}
            </h3>
          </div>

          {/* Combined Stats & Rating */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-auto">
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <BookOpen className="h-3 w-3" />
              <span>{course.chapters}</span>
            </div>
            {!isSuperDense && (
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <Users className="h-3 w-3" />
                <span>
                  {course.students > 999
                    ? `${(course.students / 1000).toFixed(1)}k`
                    : course.students}
                </span>
              </div>
            )}
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-yellow-500/10 ml-auto">
              <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
              <span className="font-bold text-[10px]">{course.rating}</span>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <CardFooter className="px-2.5 pt-0 border-t border-muted-foreground/5 mt-auto">
          <div className="w-full flex items-center justify-between gap-2 pt-2">
            <div className="flex flex-col">
              <span
                className={`${
                  isDense ? "text-xs" : "text-base"
                } font-bold text-foreground`}
              >
                Rs.{course.price.toLocaleString()}
              </span>
              {!isDense && (
                <span className="text-[9px] text-muted-foreground line-through">
                  Rs.{(course.price * 1.5).toFixed(0)}
                </span>
              )}
            </div>

            <Button
              asChild
              size="sm"
              variant="default"
              className={`${
                isDense ? "h-7 w-7 p-0 rounded-full" : "h-8 px-3 rounded-lg"
              } font-semibold transition-all duration-300 group/btn shrink-0 shadow-sm hover:shadow-primary/20`}
            >
              <Link to={`/courses/${course.id}`} aria-label="View Details">
                {isDense ? (
                  <ArrowRight className="h-3.5 w-3.5" />
                ) : (
                  <>
                    Details
                    <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover/btn:translate-x-0.5" />
                  </>
                )}
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Motion.div>
  );
};

export default CourseCard;
