// File: client/src/Teacher/components/profile/SecuritySettings.jsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  Lock,
  Shield,
  Smartphone,
} from "lucide-react";
import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

// Zod schema for password validation
const passwordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Password strength calculator
const getPasswordStrength = (password) => {
  if (!password) return { score: 0, label: "", color: "" };

  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return { score: 1, label: "Weak", color: "bg-red-500" };
  if (score <= 4) return { score: 2, label: "Medium", color: "bg-amber-500" };
  if (score <= 5) return { score: 3, label: "Strong", color: "bg-emerald-500" };
  return { score: 4, label: "Very Strong", color: "bg-emerald-600" };
};

// Password Input with Show/Hide
function PasswordInput({ id, label, error, register, ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-xs font-medium">
        {label}
      </Label>
      <div className="relative">
        <Input
          id={id}
          type={showPassword ? "text" : "password"}
          className={cn(
            "h-9 text-sm pr-9 rounded-sm",
            error && "border-destructive focus-visible:ring-destructive",
          )}
          {...register(id)}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        >
          {showPassword ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
        </button>
      </div>
      {error && (
        <p className="text-[10px] text-destructive flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {error.message}
        </p>
      )}
    </div>
  );
}

export default function SecuritySettings() {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [setupDialogOpen, setSetupDialogOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const newPassword = watch("newPassword");
  const passwordStrength = useMemo(
    () => getPasswordStrength(newPassword),
    [newPassword],
  );

  const onSubmit = async (data) => {
    console.log("Password update:", data);
    // In real app: API call
    alert("Password updated successfully!");
    reset();
  };

  return (
    <div className="space-y-5 animate-in fade-in duration-500">
      {/* Password Section - Bento Block */}
      <div className="bg-card dark:bg-card/30 border border-border rounded-xl p-5 space-y-5">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-base font-semibold">Password</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Update your password to keep your account secure
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <PasswordInput
              id="currentPassword"
              label="Current Password"
              register={register}
              error={errors.currentPassword}
              placeholder="••••••••"
            />
            <PasswordInput
              id="newPassword"
              label="New Password"
              register={register}
              error={errors.newPassword}
              placeholder="••••••••"
            />
            <PasswordInput
              id="confirmPassword"
              label="Confirm Password"
              register={register}
              error={errors.confirmPassword}
              placeholder="••••••••"
            />
          </div>

          {/* Password Strength Meter */}
          {newPassword && (
            <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">
                  Password Strength
                </span>
                <span
                  className={cn(
                    "text-[10px] font-semibold",
                    passwordStrength.score === 1 && "text-red-500",
                    passwordStrength.score === 2 && "text-amber-500",
                    passwordStrength.score >= 3 && "text-emerald-500",
                  )}
                >
                  {passwordStrength.label}
                </span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={cn(
                      "h-1.5 flex-1 rounded-full transition-colors duration-300",
                      level <= passwordStrength.score
                        ? passwordStrength.color
                        : "bg-muted",
                    )}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <Button
              type="submit"
              size="sm"
              disabled={isSubmitting}
              className="h-8 text-xs"
            >
              <KeyRound className="w-3.5 h-3.5 mr-1.5" />
              Update Password
            </Button>
          </div>
        </form>
      </div>

      {/* Two-Factor Authentication - Bento Block */}
      <div className="bg-card dark:bg-card/30 border border-border rounded-xl p-5 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Lock className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold">
                  Two-Factor Authentication
                </h3>
                {is2FAEnabled && (
                  <Badge className="text-[9px] h-4 px-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-0">
                    Enabled
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Protect your account with an extra layer of security
              </p>
            </div>
          </div>
          <Switch
            checked={is2FAEnabled}
            onCheckedChange={setIs2FAEnabled}
            className="data-[state=checked]:bg-emerald-500"
          />
        </div>

        {/* Authenticator App Card */}
        <div className="bg-muted/30 dark:bg-muted/10 border border-border/50 rounded-lg p-4 flex items-center gap-4">
          <div className="p-2.5 bg-background border border-border rounded-lg shadow-sm">
            <Smartphone className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">Authenticator App</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Use Google Authenticator, Authy, or similar apps
            </p>
          </div>

          <Dialog open={setupDialogOpen} onOpenChange={setSetupDialogOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-8 text-xs shrink-0"
              >
                {is2FAEnabled ? "Manage" : "Setup"}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-emerald-500" />
                  Setup Authenticator App
                </DialogTitle>
                <DialogDescription>
                  Scan the QR code below with your authenticator app to enable
                  two-factor authentication.
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-col items-center gap-4 py-4">
                {/* Placeholder QR Code */}
                <div className="w-40 h-40 bg-white border border-border rounded-lg flex items-center justify-center">
                  <div className="w-32 h-32 bg-muted rounded grid grid-cols-8 gap-0.5 p-2">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "rounded-sm",
                          Math.random() > 0.5
                            ? "bg-foreground"
                            : "bg-transparent",
                        )}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Can't scan? Enter this code manually:
                  <br />
                  <code className="text-xs font-mono bg-muted px-2 py-1 rounded mt-1 inline-block">
                    ABCD-EFGH-IJKL-MNOP
                  </code>
                </p>

                <div className="w-full space-y-2">
                  <Label htmlFor="verifyCode" className="text-xs">
                    Enter verification code
                  </Label>
                  <Input
                    id="verifyCode"
                    placeholder="000000"
                    className="text-center font-mono text-lg tracking-widest"
                    maxLength={6}
                  />
                </div>
              </div>

              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setSetupDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    setIs2FAEnabled(true);
                    setSetupDialogOpen(false);
                  }}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  <CheckCircle2 className="w-4 h-4 mr-1.5" />
                  Verify & Enable
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
