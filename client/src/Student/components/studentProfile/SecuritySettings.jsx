// File: client/src/Student/components/SecuritySettings.jsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Shield } from "lucide-react";

export default function SecuritySettings() {
  return (
    <div className="bg-card dark:bg-card/30 rounded-sm border border-border shadow-none p-6 space-y-6">
      <div className="grid sm:grid-cols-3 gap-4 items-start">
        <div className="col-span-1 space-y-1">
          <Label className="text-sm font-medium text-foreground">
            Password
          </Label>
          <p className="text-[11px] text-muted-foreground">
            Ensure your account is using a long, random password to stay secure.
          </p>
        </div>
        <div className="col-span-2 space-y-3">
          <Input
            type="password"
            placeholder="Current Password"
            className="h-9 text-xs bg-background/50 border-border/60 focus:border-primary/50 rounded-sm"
          />
          <Input
            type="password"
            placeholder="New Password"
            className="h-9 text-xs bg-background/50 border-border/60 focus:border-primary/50 rounded-sm"
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            className="h-9 text-xs bg-background/50 border-border/60 focus:border-primary/50 rounded-sm"
          />
          <div className="flex justify-end pt-2">
            <Button size="sm" variant="outline" className="h-8 text-xs">
              Update Password
            </Button>
          </div>
        </div>
      </div>

      <Separator className="bg-border/40" />

      <div className="grid sm:grid-cols-3 gap-4 items-center">
        <div className="col-span-1 space-y-1">
          <Label className="text-sm font-medium text-foreground">
            Two-Factor Authentication
          </Label>
          <p className="text-[11px] text-muted-foreground">
            Add an extra layer of security.
          </p>
        </div>
        <div className="col-span-2 flex items-center justify-between p-3 border border-border/40 rounded-sm bg-muted/20">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-medium">Protect your account</span>
          </div>
          <Switch />
        </div>
      </div>
    </div>
  );
}
