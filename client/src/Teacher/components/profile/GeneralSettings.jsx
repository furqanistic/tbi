// File: client/src/Teacher/components/profile/GeneralSettings.jsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Eye, Info } from "lucide-react";
import { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import TagInput from "./TagInput";

export default function GeneralSettings({ onSave }) {
  const [formData, setFormData] = useState({
    firstName: "Furqan",
    lastName: "Afzal",
    headline: "CSS/PMS Mentor & Subject Specialist",
    bio: `• 8+ years of experience mentoring CSS/PMS aspirants
• Cleared CSS examination with distinction in Pakistan Affairs
• Former Federal Government Officer (17th Grade)
• Specialized in Essay Writing, Pakistan Affairs & Current Affairs
• 200+ successful candidates mentored`,
    expertise: [
      "Pakistan Affairs",
      "Essay Writing",
      "Current Affairs",
      "Islamic Studies",
      "Economy",
    ],
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
      {/* Left Column - Editable Form */}
      <div className="lg:col-span-2 space-y-5">
        {/* 1. Header & Photo Upload */}
        <ProfileHeader
          onPhotoChange={(file, url) => console.log("Photo changed:", file)}
        />

        {/* 2. Public Profile Form */}
        <div className="bg-card dark:bg-card/30 border border-border rounded-xl p-5 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold">Profile Information</h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Update your public profile details
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-xs font-medium">
                First Name
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="h-9 text-sm rounded-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-xs font-medium">
                Last Name
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="h-9 text-sm rounded-sm"
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="headline" className="text-xs font-medium">
                Professional Headline
              </Label>
              <Input
                id="headline"
                value={formData.headline}
                onChange={(e) => handleInputChange("headline", e.target.value)}
                placeholder="e.g., CSS/PMS Mentor & Subject Specialist"
                className="h-9 text-sm rounded-sm"
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="bio" className="text-xs font-medium">
                  Bio / About Me
                </Label>
                <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                  <Info className="w-3 h-3" />
                  Use bullet points (•) for better formatting
                </span>
              </div>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => handleInputChange("bio", e.target.value)}
                className="min-h-35 text-sm leading-relaxed rounded-sm font-mono"
                placeholder="Describe your experience, achievements, and teaching philosophy..."
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label className="text-xs font-medium">Areas of Expertise</Label>
              <TagInput
                tags={formData.expertise}
                onTagsChange={(tags) => handleInputChange("expertise", tags)}
                placeholder="Type a subject and press Enter..."
                maxTags={8}
              />
              <p className="text-[10px] text-muted-foreground">
                Add subjects you specialize in (e.g., Pakistan Affairs, Essay
                Writing)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Live Preview */}
      <div className="lg:col-span-1 space-y-3">
        {/* Public View Indicator */}
        <div className="flex items-center gap-2 px-1">
          <Badge
            variant="outline"
            className="text-[10px] font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30 px-2 py-0.5"
          >
            <Eye className="w-3 h-3 mr-1" />
            Public View
          </Badge>
          <span className="text-[10px] text-muted-foreground">
            How students see you
          </span>
        </div>

        {/* Preview Card */}
        <div className="bg-card dark:bg-card/30 border border-border rounded-xl p-5 space-y-4 sticky top-20">
          <div>
            <h4 className="text-sm font-semibold mb-2">About Me</h4>
            <div className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
              {formData.bio || "No bio added yet..."}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">Expertise</h4>
            <div className="flex flex-wrap gap-1.5">
              {formData.expertise.length > 0 ? (
                formData.expertise.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="font-normal text-[10px] bg-secondary/50 px-2 py-0.5"
                  >
                    {skill}
                  </Badge>
                ))
              ) : (
                <span className="text-xs text-muted-foreground italic">
                  No expertise added yet...
                </span>
              )}
            </div>
          </div>

          <div className="pt-3 border-t border-border/50">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">
                {formData.firstName} {formData.lastName}
              </span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span className="truncate">{formData.headline}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
