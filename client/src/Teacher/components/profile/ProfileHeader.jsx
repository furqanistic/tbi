// File: client/src/Teacher/components/profile/ProfileHeader.jsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, MapPin, Share2 } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between p-6 bg-card dark:bg-card/30 border border-border rounded-xl">
      <div className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left w-full md:w-auto">
        <Avatar className="h-20 w-20 border-2 border-background shadow-sm">
          <AvatarImage
            src="https://api.dicebear.com/9.x/adventurer/svg?seed=Kingston"
            alt="@teacher"
          />
          <AvatarFallback>FA</AvatarFallback>
        </Avatar>

        <div className="space-y-1 my-auto">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <h2 className="text-xl font-bold tracking-tight">Furqan Afzal</h2>
            <Badge
              variant="secondary"
              className="text-[10px] h-5 px-1.5 font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-0"
            >
              Verified Teacher
            </Badge>
          </div>

          <div className="flex items-center gap-3 text-sm text-muted-foreground justify-center md:justify-start">
            <div className="flex items-center gap-1">
              <span className="font-medium text-foreground">
                Senior Instructor
              </span>
            </div>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>San Francisco, CA</span>
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
        <Button size="sm" className="flex-1 md:flex-none h-8 text-xs gap-1.5">
          <Edit className="w-3.5 h-3.5" />
          Edit Profile
        </Button>
      </div>
    </div>
  );
}
