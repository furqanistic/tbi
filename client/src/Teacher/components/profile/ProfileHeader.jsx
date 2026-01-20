// File: client/src/Teacher/components/profile/ProfileHeader.jsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Share2 } from "lucide-react";
import ProfilePhotoUpload from "./ProfilePhotoUpload";

export default function ProfileHeader({ onPhotoChange }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between p-5 bg-card dark:bg-card/30 border border-border rounded-xl">
      <div className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left w-full md:w-auto">
        <ProfilePhotoUpload
          currentImage="https://github.com/shadcn.png"
          onImageChange={onPhotoChange}
          initials="FA"
          size="lg"
        />

        <div className="space-y-1.5 my-auto">
          <div className="flex items-center gap-2 justify-center md:justify-start flex-wrap">
            <h2 className="text-xl font-bold tracking-tight">Furqan Afzal</h2>
            <Badge
              variant="secondary"
              className="text-[10px] h-5 px-1.5 font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-0"
            >
              Verified Teacher
            </Badge>
          </div>

          <div className="flex items-center gap-3 text-sm text-muted-foreground justify-center md:justify-start flex-wrap">
            <div className="flex items-center gap-1">
              <span className="font-medium text-foreground">
                CSS/PMS Mentor
              </span>
            </div>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/30 hidden sm:block" />
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 w-full md:w-auto mt-2 md:mt-0">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 md:flex-none h-8 text-xs gap-1.5"
        >
          <Share2 className="w-3.5 h-3.5" />
          Share Profile
        </Button>
      </div>
    </div>
  );
}
