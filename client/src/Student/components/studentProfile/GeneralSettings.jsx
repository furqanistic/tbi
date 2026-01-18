// File: client/src/Student/components/GeneralSettings.jsx
import { Camera, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { profileData } from "../../data/profileData";

export default function GeneralSettings() {
  const { user } = profileData;

  return (
    <div className="space-y-6">
      <div className="bg-card dark:bg-card/30 rounded-sm border border-border shadow-sm p-6 space-y-6">
        {/* Avatar Row */}
        <div className="flex items-center justify-between pb-6 border-b border-border/60">
          <div className="flex items-center gap-4">
            <div className="relative group shrink-0">
              <Avatar className="h-16 w-16 border-2 border-border/40 cursor-pointer transition-all hover:border-primary/50">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="text-xs">
                  {user.initials}
                </AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <Camera className="w-4 h-4 text-white/90" />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-foreground">Avatar</h3>
              <p className="text-xs text-muted-foreground">
                Click on the image to upload.
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="h-8 text-xs text-muted-foreground hover:text-destructive hover:border-destructive/30"
          >
            Remove
          </Button>
        </div>

        {/* Form Rows */}
        <div className="space-y-4">
          <div className="grid sm:grid-cols-3 gap-4 items-center">
            <Label
              htmlFor="name"
              className="text-xs text-muted-foreground font-medium col-span-1"
            >
              Display Name
            </Label>
            <Input
              id="name"
              defaultValue={user.name}
              className="h-9 text-xs bg-background/50 border-border/60 focus:border-primary/50 col-span-2 rounded-sm"
            />
          </div>
          <div className="grid sm:grid-cols-3 gap-4 items-center">
            <Label className="text-xs text-muted-foreground font-medium col-span-1">
              Email Address
            </Label>
            <div className="flex items-center justify-between col-span-2 gap-2 p-2 bg-muted/30 rounded-sm border border-border/40">
              <span className="text-xs text-foreground/90 font-mono">
                {user.email}
              </span>
              {user.emailVerified && (
                <span className="text-[10px] px-1.5 py-0 rounded-sm bg-emerald-500/10 text-emerald-500 font-medium border border-emerald-500/20">
                  Verified
                </span>
              )}
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 items-center">
            <Label
              htmlFor="phone"
              className="text-xs text-muted-foreground font-medium col-span-1"
            >
              Phone
            </Label>
            <Input
              id="phone"
              defaultValue={user.phone}
              className="h-9 text-xs bg-background/50 border-border/60 focus:border-primary/50 col-span-2 rounded-sm"
            />
          </div>
          <div className="grid sm:grid-cols-3 gap-4 items-center">
            <Label
              htmlFor="bio"
              className="text-xs text-muted-foreground font-medium col-span-1"
            >
              Bio
            </Label>
            <Input
              id="bio"
              placeholder="Write a short bio..."
              className="h-9 text-xs bg-background/50 border-border/60 focus:border-primary/50 col-span-2 rounded-sm"
            />
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-card dark:bg-card/30 rounded-sm border border-destructive/20 shadow-sm p-6">
        <h3 className="text-xs font-bold text-destructive mb-4 uppercase tracking-wider flex items-center gap-2">
          <LogOut className="w-3 h-3" /> Danger Zone
        </h3>
        <div className="flex items-center justify-between p-4 border border-destructive/10 rounded-sm bg-destructive/5">
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">
              Delete Account
            </p>
            <p className="text-xs text-muted-foreground">
              Permanently remove your account and all data.
            </p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="destructive"
                size="sm"
                className="h-8 text-xs font-medium shadow-none opacity-90 hover:opacity-100"
              >
                Delete Account
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
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
    </div>
  );
}
