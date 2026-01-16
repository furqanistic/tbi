// File: client/src/pages/Auth.jsx
// File: client/src/pages/Auth.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion as Motion } from "motion/react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import logo from "@/assets/logo-1.png";
import logoLight from "@/assets/icon-dark.png";
// --- Validation Schemas ---
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signupSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const Auth = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // --- Forms ---
  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const signupForm = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  // --- Handlers ---
  const onLoginSubmit = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Login Data:", data);
    setIsLoading(false);
    navigate("/"); // Redirect to dashboard/home
  };

  const onSignupSubmit = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Signup Data:", data);
    setIsLoading(false);
    navigate("/"); // Redirect to dashboard/home
  };

  return (
    <div className="min-h-lvh w-full relative overflow-hidden text-foreground flex items-center justify-center bg-background/50 dark:bg-background/30">
      <BackgroundPattern />

      {/* --- Auth Form Container --- */}
      <div className="relative w-full max-w-md px-4 sm:px-8 flex flex-col justify-center">
        <Motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <div className="text-center flex flex-col items-center mb-2">
            <div className="hidden md:block">
              <img
                src={logo}
                alt="Logo"
                className="h-14 scale-[2.4] w-auto hidden dark:block"
              />
              <img
                src={logoLight}
                alt="Logo"
                className="h-14 scale-[2.4] w-auto block dark:hidden"
              />
            </div>
            <h1 className="text-2xl font-black tracking-tight mb-2">
              The Bureaucrats Institute
            </h1>

            <p className="text-muted-foreground text-xs font-medium">
              Your gateway to success
            </p>
          </div>

          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <Tabs
                defaultValue="login"
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 mb-4 h-11 bg-zinc-100 dark:bg-muted/50 p-1.5 rounded-2xl">
                  <TabsTrigger
                    value="signup"
                    className="rounded-xl text-sm font-bold data-[state=active]:bg-gray-300/90 data-[state=active]:text-black dark:data-[state=active]:bg-background/5 transition-all shadow-none cursor-pointer"
                  >
                    Sign Up
                  </TabsTrigger>
                  <TabsTrigger
                    value="login"
                    className="rounded-xl text-sm font-bold data-[state=active]:bg-gray-300/90 data-[state=active]:text-black dark:data-[state=active]:bg-background/5 transition-all shadow-none cursor-pointer"
                  >
                    Log In
                  </TabsTrigger>
                </TabsList>

                {/* Login Form */}
                <TabsContent value="login" className="space-y-6">
                  <form
                    onSubmit={loginForm.handleSubmit(onLoginSubmit)}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative group">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                          id="email"
                          placeholder="name@example.com"
                          className="pl-10 h-11 rounded-xl bg-white dark:bg-muted/30 border-zinc-200 dark:border-muted focus-visible:ring-primary/20 transition-all font-medium"
                          {...loginForm.register("email")}
                        />
                      </div>
                      {loginForm.formState.errors.email && (
                        <p className="text-xs text-red-500 font-medium ml-1">
                          {loginForm.formState.errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link
                          to="#"
                          className="text-xs font-bold text-primary hover:text-primary/80 transition-colors cursor-pointer underline-offset-4 hover:underline"
                          onClick={(e) => e.preventDefault()}
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative group">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                          id="password"
                          placeholder="Password"
                          type={showPassword ? "text" : "password"}
                          className="pl-10 pr-10 h-11 rounded-xl bg-white dark:bg-muted/30 border-zinc-200 dark:border-muted focus-visible:ring-primary/20 transition-all font-medium"
                          {...loginForm.register("password")}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors outline-none cursor-pointer"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      {loginForm.formState.errors.password && (
                        <p className="text-xs text-red-500 font-medium ml-1">
                          {loginForm.formState.errors.password.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 rounded-xl text-base font-bold hover:-translate-y-0.5 active:translate-y-0 transition-all mt-4 cursor-pointer"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      ) : (
                        "Sign In"
                      )}
                    </Button>
                  </form>
                </TabsContent>

                {/* Signup Form */}
                <TabsContent value="signup" className="space-y-6">
                  <form
                    onSubmit={signupForm.handleSubmit(onSignupSubmit)}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative group">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                          id="name"
                          placeholder="John Doe"
                          className="pl-10 h-11 rounded-xl bg-white dark:bg-muted/30 border-zinc-200 dark:border-muted focus-visible:ring-primary/20 transition-all font-medium"
                          {...signupForm.register("name")}
                        />
                      </div>
                      {signupForm.formState.errors.name && (
                        <p className="text-xs text-red-500 font-medium ml-1">
                          {signupForm.formState.errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email Address</Label>
                      <div className="relative group">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                          id="signup-email"
                          placeholder="name@example.com"
                          className="pl-10 h-11 rounded-xl bg-white dark:bg-muted/30 border-zinc-200 dark:border-muted focus-visible:ring-primary/20 transition-all font-medium"
                          {...signupForm.register("email")}
                        />
                      </div>
                      {signupForm.formState.errors.email && (
                        <p className="text-xs text-red-500 font-medium ml-1">
                          {signupForm.formState.errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signup-password">Password</Label>
                        <div className="relative group">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                          <Input
                            id="signup-password"
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            className="pl-10 pr-10 h-11 rounded-xl bg-white dark:bg-muted/30 border-zinc-200 dark:border-muted focus-visible:ring-primary/20 transition-all font-medium"
                            {...signupForm.register("password")}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors outline-none cursor-pointer"
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                        {signupForm.formState.errors.password && (
                          <p className="text-xs text-red-500 font-medium ml-1">
                            {signupForm.formState.errors.password.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">
                          Confirm Password
                        </Label>
                        <div className="relative group">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                          <Input
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            type={showPassword ? "text" : "password"}
                            className="pl-10 pr-10 h-11 rounded-xl bg-white dark:bg-muted/30 border-zinc-200 dark:border-muted focus-visible:ring-primary/20 transition-all font-medium"
                            {...signupForm.register("confirmPassword")}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors outline-none cursor-pointer"
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                        {signupForm.formState.errors.confirmPassword && (
                          <p className="text-xs text-red-500 font-medium ml-1">
                            {
                              signupForm.formState.errors.confirmPassword
                                .message
                            }
                          </p>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-11 rounded-xl text-base font-bold hover:-translate-y-0.5 active:translate-y-0 transition-all mt-4 cursor-pointer"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      ) : (
                        "Create Account"
                      )}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>

            <CardFooter className="flex justify-center pb-0 px-0">
              <p className="text-xs text-center text-muted-foreground">
                By continuing, you agree to our{" "}
                <Link
                  to="#"
                  className="underline hover:text-primary font-medium"
                >
                  Terms
                </Link>{" "}
                and{" "}
                <Link
                  to="#"
                  className="underline hover:text-primary font-medium"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </CardFooter>
          </Card>
        </Motion.div>
      </div>
    </div>
  );
};

export default Auth;
