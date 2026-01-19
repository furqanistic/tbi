import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";

export default function GeneralSettings() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* 1. Header & Quick View */}
      <ProfileHeader />

      {/* 2. Public Profile Information */}
      <div className="bg-card dark:bg-card/30 border border-border rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Public Profile</h3>
            <p className="text-sm text-muted-foreground">
              This is how students see you on the platform.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" defaultValue="Furqan" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" defaultValue="Afzal" />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="headline">Headline</Label>
            <Input
              id="headline"
              defaultValue="Senior Instructor & Web Developer"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              className="min-h-[100px]"
              defaultValue="I am a passionate educator with over 10 years of experience..."
            />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <Button>Save Changes</Button>
        </div>
      </div>

      {/* 3. Detailed Info Preview (Reuse existing component) */}
      <div>
        <h3 className="text-lg font-semibold mb-3 px-1">Preview Details</h3>
        <ProfileInfo />
      </div>
    </div>
  );
}
