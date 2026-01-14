// File: client/src/pages/CoursePayment.jsx
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { courses } from "@/lib/data/coursesData";
import { motion as Motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ArrowLeft,
  ShieldCheck,
  CreditCard,
  Wallet,
  Building2,
  BookOpen,
  Clock,
  Users,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const CoursePayment = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen pt-44 text-center">
        <h2 className="text-3xl font-bold">Course not found</h2>
        <Button
          onClick={() => navigate("/courses")}
          className="mt-4 rounded-lg"
        >
          Back to Courses
        </Button>
      </div>
    );
  }

  const handlePayment = (e) => {
    e.preventDefault();
    // Placeholder for payment processing
    alert("Payment functionality will be integrated with a payment gateway!");
  };

  return (
    <main className="min-h-screen  text-foreground pt-28 pb-16 px-6 lg:px-24">
      {/* Background patterns */}
      <div
        className="fixed inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate(`/courses/${courseId}`)}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Course
          </Button>
        </Motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h1 className="text-3xl font-black tracking-tight mb-2">
                Complete Your Purchase
              </h1>
              <p className="text-muted-foreground">
                Secure checkout powered by trusted payment partners
              </p>
            </div>

            {/* Payment Method Selection */}
            <Card className="rounded-xl border-muted-foreground/10 dark:bg-background/70  backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Select Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="card" className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 rounded-lg border border-muted-foreground/10 hover:border-primary/50 transition-colors cursor-pointer">
                    <RadioGroupItem value="card" id="card" />
                    <Label
                      htmlFor="card"
                      className="flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <CreditCard className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-bold">Credit / Debit Card</div>
                        <div className="text-xs text-muted-foreground">
                          Visa, Mastercard, UnionPay
                        </div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-4 p-4 rounded-lg border border-muted-foreground/10 hover:border-primary/50 transition-colors cursor-pointer">
                    <RadioGroupItem value="easypaisa" id="easypaisa" />
                    <Label
                      htmlFor="easypaisa"
                      className="flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <Wallet className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="font-bold">Easypaisa / JazzCash</div>
                        <div className="text-xs text-muted-foreground">
                          Mobile wallet payment
                        </div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-4 p-4 rounded-lg border border-muted-foreground/10 hover:border-primary/50 transition-colors cursor-pointer">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label
                      htmlFor="bank"
                      className="flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <Building2 className="h-5 w-5 text-blue-500" />
                      <div>
                        <div className="font-bold">Bank Transfer</div>
                        <div className="text-xs text-muted-foreground">
                          Direct bank transfer
                        </div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Card Details Form */}
            <Card className="rounded-xl border-muted-foreground/10  dark:bg-background/70  backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input
                      id="cardName"
                      placeholder="Enter your full name"
                      className="rounded-sm  dark:bg-background/70  backdrop-blur-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="rounded-sm  dark:bg-background/70  backdrop-blur-md"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        className="rounded-sm  dark:bg-background/70  backdrop-blur-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        type="password"
                        className="rounded-sm  dark:bg-background/70  backdrop-blur-md"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    Your payment information is encrypted and secure
                  </div>

                  <Button
                    type="submit"
                    className="w-full lg:h-13 hover:bg-transparent hover:border hover:scale-105 cursor-pointer rounded-sm  text-accent-foreground font-bold "
                  >
                    <Lock className="h-5 w-5 mr-2" />
                    Pay Rs. {course.price.toLocaleString()}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Motion.div>

          {/* Order Summary Sidebar */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 "
          >
            <div className="lg:sticky lg:top-28 space-y-6 ">
              <Card className=" border-muted-foreground/10 overflow-hidden rounded-sm  dark:bg-background/70  backdrop-blur-md">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-5">
                  <div>
                    <Badge className="mb-3">{course.category}</Badge>
                    <h3 className="text-lg font-bold leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      by {course.instructor}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.chapters} Chapters</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      <span>{course.lessons} Lessons</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Pricing */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Original Price
                      </span>
                      <span className="line-through text-muted-foreground">
                        Rs. {(course.price * 2).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Discount</span>
                      <span className="text-green-500 font-bold">-50%</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-primary">
                        Rs. {course.price.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>30-Day Money-Back Guarantee</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <ShieldCheck className="h-4 w-4 text-blue-500" />
                      <span>Lifetime Access</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 text-purple-500" />
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

export default CoursePayment;
