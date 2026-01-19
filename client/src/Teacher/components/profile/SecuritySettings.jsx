import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Shield, Smartphone } from "lucide-react";

export default function SecuritySettings() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Change Password */}
      <div className="bg-card dark:bg-card/30 border border-border rounded-xl p-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Password</h3>
          <p className="text-sm text-muted-foreground">
            Modify your current password.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="current">Current Password</Label>
            <Input id="current" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new">New Password</Label>
            <Input id="new" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm">Confirm Password</Label>
            <Input id="confirm" type="password" />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <Button>Update Password</Button>
        </div>
      </div>

      {/* 2FA */}
      <div className="bg-card dark:bg-card/30 border border-border rounded-xl p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-500" />
              Two-Factor Authentication
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Add an extra layer of security to your account.
            </p>
          </div>
          <Switch />
        </div>

        <div className="bg-secondary/20 p-4 rounded-lg flex items-center gap-3">
          <div className="p-2 bg-background rounded-full">
            <Smartphone className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Authenticator App</p>
            <p className="text-xs text-muted-foreground">
              Use an app like Google Authenticator or Authy.
            </p>
          </div>
          <Button variant="ghost" size="sm" className="ml-auto text-xs">
            Setup
          </Button>
        </div>
      </div>
    </div>
  );
}
