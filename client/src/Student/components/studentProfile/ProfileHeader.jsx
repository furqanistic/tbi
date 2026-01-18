// File: client/src/Student/components/ProfileHeader.jsx
import { Camera, Loader2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { profileData } from "../../data/profileData";

export default function ProfileHeader({ isLoading, onSave }) {
  const { user } = profileData;

  return (
    <div className="flex items-center justify-between pb-4 border-b border-border/40">
      <div className="flex items-center gap-4">
        <div className="relative group shrink-0">
          <Avatar className="h-12 w-12 border-2 border-border/40 cursor-pointer transition-all hover:border-primary/50">
            <AvatarImage src={user.avatar} />
            <AvatarFallback className="text-xs bg-muted">
              {user.initials}
            </AvatarFallback>
          </Avatar>
          <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
            <Camera className="w-3.5 h-3.5 text-white/90" />
          </div>
        </div>
        <div className="space-y-0.5">
          <h1 className="text-base font-semibold text-foreground">
            {user.name}
          </h1>
          <p className="text-xs text-muted-foreground">{user.email}</p>
        </div>
      </div>
      <Button
        onClick={onSave}
        disabled={isLoading}
        size="sm"
        className="h-8 text-xs font-medium px-3"
      >
        {isLoading ? (
          <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
        ) : (
          <Save className="mr-1.5 h-3.5 w-3.5" />
        )}
        Save Changes
      </Button>
    </div>
  );
}
