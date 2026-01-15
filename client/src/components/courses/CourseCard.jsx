// File: client/src/components/courses/CourseCard.jsx
import React from "react";
import { motion as Motion } from "motion/react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CourseCard = ({ course }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-background group hover:shadow-lg transition-all duration-300">
        {/* Thumbnail Section - Fixed Aspect Ratio */}
        <div className="relative aspect-video overflow-hidden shrink-0 bg-gray-100 dark:bg-gray-800">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content Section */}
        <CardContent className="flex flex-col flex-1 p-2.5 gap-1.5 min-h-0">
          {/* Header: Title & Instructor */}
          <div className="space-y-1">
            <h3 className="text-sm font-semibold line-clamp-2 text-gray-900 dark:text-gray-100 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {course.title}
            </h3>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">
              {course.instructor}
            </p>
          </div>

          {/* Optional Short Description */}
          {course.description && (
            <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1 leading-relaxed hidden sm:block">
              {course.description}
            </p>
          )}

          {/* Rating & Stats Row */}
          <div className="flex items-center gap-1.5 flex-wrap mt-auto pt-1">
            <div className="flex items-center gap-0.5">
              <span className="font-bold text-xs text-yellow-600 dark:text-yellow-500">
                {course.rating}
              </span>
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            </div>
            <span className="text-[10px] text-gray-400 dark:text-gray-500">
              (
              {course.students >= 1000
                ? (course.students / 1000).toFixed(1) + "k"
                : course.students}
              )
            </span>
            {course.rating >= 4.5 && (
              <Badge
                variant="secondary"
                className="ml-auto px-1 py-0 h-4 text-[9px] font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-sm"
              >
                Best
              </Badge>
            )}
          </div>

          {/* Footer: Price & Action */}
          <div className="flex items-center justify-between pt-2 mt-1 border-t border-gray-100 dark:border-gray-800">
            <span className="text-sm font-bold text-gray-900 dark:text-gray-50">
              Rs. {course.price.toLocaleString()}
            </span>
            <Button
              asChild
              size="sm"
              className="h-7 px-3 text-[11px] font-medium bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded text-white shadow-none"
            >
              <Link to={`/courses/${course.id}`}>Enroll</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Motion.div>
  );
};

export default CourseCard;
