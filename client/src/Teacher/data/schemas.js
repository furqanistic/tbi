// File: client/src/Teacher/data/schemas.js
import { z } from "zod";

export const testInfoSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  subject: z.string().min(1, "Subject is required"),
  topics: z.string().optional(),
  difficulty: z.enum(["Easy", "Medium", "Hard"]),
});

export const questionSchema = z.object({
  id: z.number().or(z.string()),
  text: z.string().min(5, "Question text is required"),
  type: z.enum(["MCQ", "True/False", "Short Answer"]),
  marks: z.number().min(0.5).max(100),
  difficulty: z.enum(["Easy", "Medium", "Hard"]),
  explanation: z.string().optional(),
  options: z.array(z.string()).optional(), // For MCQs
  correctAnswer: z.string().optional(),
  topic: z.string().optional(),
});

export const settingsSchema = z.object({
  duration: z.number().min(5, "Duration must be at least 5 minutes"),
  totalMarks: z.number().min(1),
  passingPercentage: z.number().min(0).max(100),
  negativeMarking: z.number().min(0).max(1).default(0),
  attemptsAllowed: z.number().min(1).default(1),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  isTimeBound: z.boolean().default(true),
  shuffleQuestions: z.boolean().default(false),
  showResultsImmediately: z.boolean().default(true),
});

export const testFormSchema = z.object({
  ...testInfoSchema.shape,
  ...settingsSchema.shape,
  questions: z.array(questionSchema).min(1, "At least one question is required"),
});

export const defaultValues = {
  title: "",
  description: "",
  subject: "",
  topics: "",
  difficulty: "Medium",
  duration: 60,
  totalMarks: 100,
  passingPercentage: 50,
  negativeMarking: 0,
  attemptsAllowed: 1,
  isTimeBound: true,
  shuffleQuestions: false,
  showResultsImmediately: true,
  questions: [],
};
