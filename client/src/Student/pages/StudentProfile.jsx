// File: client/src/pages/dashboard/StudentProfile.jsx
import { useState } from "react";
import {
  User,
  Shield,
  Bell,
  Camera,
  Loader2,
  Save,
  Mail,
  Smartphone,
  Globe,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function StudentProfile() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between pb-2 border-b border-border/40">
        <div>
          <h1 className="text-lg font-semibold tracking-tight text-foreground">
            Settings
          </h1>
          <p className="text-xs text-muted-foreground">
            Manage your account and preferences.
          </p>
        </div>
        <Button
          onClick={handleSave}
          disabled={isLoading}
          size="sm"
          className="h-7 text-xs font-medium px-3"
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-3 w-3 animate-spin" />
          ) : (
            <Save className="mr-2 h-3 w-3" />
          )}
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="w-full justify-start h-auto p-0 bg-transparent rounded-none mb-6 gap-6">
          <TabsTrigger
            value="general"
            className="rounded-md data-[state=active]:bg-muted/50 data-[state=active]:text-foreground data-[state=active]:shadow-none px-3 py-1.5 text-xs font-medium transition-all text-muted-foreground hover:text-foreground hover:bg-muted/20"
          >
            General
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="rounded-md data-[state=active]:bg-muted/50 data-[state=active]:text-foreground data-[state=active]:shadow-none px-3 py-1.5 text-xs font-medium transition-all text-muted-foreground hover:text-foreground hover:bg-muted/20"
          >
            Security
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="rounded-md data-[state=active]:bg-muted/50 data-[state=active]:text-foreground data-[state=active]:shadow-none px-3 py-1.5 text-xs font-medium transition-all text-muted-foreground hover:text-foreground hover:bg-muted/20"
          >
            Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          {/* Avatar Row */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-4">
              <div className="relative group shrink-0">
                <Avatar className="h-12 w-12 border border-border/60">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="text-xs">AK</AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera className="w-3 h-3 text-white/90" />
                </div>
              </div>
              <div className="space-y-0.5">
                <h3 className="text-sm font-medium text-foreground">Avatar</h3>
                <p className="text-[11px] text-muted-foreground">
                  Click on the image to upload.
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-xs text-muted-foreground"
            >
              Remove
            </Button>
          </div>

          <Separator className="bg-border/30" />

          {/* Form Rows */}
          <div className="space-y-1">
            <div className="grid sm:grid-cols-3 gap-4 items-center py-3 border-b border-border/30 last:border-0 hover:bg-muted/10 px-2 rounded-md transition-colors">
              <Label
                htmlFor="name"
                className="text-xs text-muted-foreground font-normal col-span-1"
              >
                Display Name
              </Label>
              <Input
                id="name"
                defaultValue="Ali Khan"
                className="h-8 text-xs bg-transparent border-border/40 focus:border-primary/50 col-span-2"
              />
            </div>
            <div className="grid sm:grid-cols-3 gap-4 items-center py-3 border-b border-border/30 last:border-0 hover:bg-muted/10 px-2 rounded-md transition-colors">
              <Label className="text-xs text-muted-foreground font-normal col-span-1">
                Email Address
              </Label>
              <div className="flex items-center justify-between col-span-2 gap-2">
                <span className="text-xs text-foreground/90">
                  ali.khan@example.com
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-medium border border-emerald-500/20">
                  Verified
                </span>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 items-center py-3 border-b border-border/30 last:border-0 hover:bg-muted/10 px-2 rounded-md transition-colors">
              <Label
                htmlFor="phone"
                className="text-xs text-muted-foreground font-normal col-span-1"
              >
                Phone
              </Label>
              <Input
                id="phone"
                defaultValue="+92 300 1234567"
                className="h-8 text-xs bg-transparent border-border/40 focus:border-primary/50 col-span-2"
              />
            </div>
            <div className="grid sm:grid-cols-3 gap-4 items-center py-3 border-b border-border/30 last:border-0 hover:bg-muted/10 px-2 rounded-md transition-colors">
              <Label
                htmlFor="bio"
                className="text-xs text-muted-foreground font-normal col-span-1"
              >
                Bio
              </Label>
              <Input
                id="bio"
                placeholder="Write a short bio..."
                className="h-8 text-xs bg-transparent border-border/40 focus:border-primary/50 col-span-2"
              />
            </div>
          </div>

          <div className="pt-6">
            <h3 className="text-xs font-semibold text-destructive mb-3 uppercase tracking-wider">
              Danger Zone
            </h3>
            <div className="flex items-center justify-between p-3 border border-destructive/20 rounded-md bg-destructive/5">
              <div className="space-y-0.5">
                <p className="text-sm font-medium text-foreground">
                  Delete Account
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Permanently remove your account and all data.
                </p>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 text-xs text-destructive hover:bg-destructive/10 hover:text-destructive cursor-pointer"
                  >
                    Delete Account
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                      Delete Account
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="space-y-1">
            <div className="grid sm:grid-cols-3 gap-4 items-start py-3 border-b border-border/30 last:border-0 hover:bg-muted/10 px-2 rounded-md transition-colors">
              <Label className="text-xs text-muted-foreground font-normal col-span-1 pt-2">
                Change Password
              </Label>
              <div className="col-span-2 space-y-3">
                <Input
                  type="password"
                  placeholder="Current Password"
                  className="h-8 text-xs bg-transparent border-border/40 focus:border-primary/50"
                />
                <Input
                  type="password"
                  placeholder="New Password"
                  className="h-8 text-xs bg-transparent border-border/40 focus:border-primary/50"
                />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  className="h-8 text-xs bg-transparent border-border/40 focus:border-primary/50"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 items-center py-3 border-b border-border/30 last:border-0 hover:bg-muted/10 px-2 rounded-md transition-colors">
              <Label className="text-xs text-muted-foreground font-normal col-span-1">
                Two-Factor Auth
              </Label>
              <div className="col-span-2 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Add an extra layer of security.
                </span>
                <Switch />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-xs font-semibold text-foreground/70 mb-2 px-2">
              Email Notifications
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 items-center py-3 border-b border-border/30 last:border-0 hover:bg-muted/10 px-2 rounded-md transition-colors">
              <Label className="text-xs text-muted-foreground font-normal col-span-1">
                Marketing Emails
              </Label>
              <div className="col-span-2 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Receive news and product updates.
                </span>
                <Switch defaultChecked />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 items-center py-3 border-b border-border/30 last:border-0 hover:bg-muted/10 px-2 rounded-md transition-colors">
              <Label className="text-xs text-muted-foreground font-normal col-span-1">
                Security Emails
              </Label>
              <div className="col-span-2 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Receive security alerts and activity.
                </span>
                <Switch defaultChecked disabled />
              </div>
            </div>
            <h3 className="text-xs font-semibold text-foreground/70 mb-2 mt-6 px-2">
              Push Notifications
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 items-center py-3 border-b border-border/30 last:border-0 hover:bg-muted/10 px-2 rounded-md transition-colors">
              <Label className="text-xs text-muted-foreground font-normal col-span-1">
                Messages
              </Label>
              <div className="col-span-2 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Receive direct messages in real-time.
                </span>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
