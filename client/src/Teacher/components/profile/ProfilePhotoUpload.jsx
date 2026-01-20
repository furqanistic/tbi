// File: client/src/Teacher/components/profile/ProfilePhotoUpload.jsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera } from "lucide-react";
import { useRef, useState } from "react";

export default function ProfilePhotoUpload({
  currentImage = "https://github.com/shadcn.png",
  onImageChange,
  initials = "FA",
  size = "lg", // sm, md, lg, xl
}) {
  const [previewUrl, setPreviewUrl] = useState(currentImage);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef(null);

  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-20 w-20",
    xl: "h-28 w-28",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
    xl: "w-6 h-6",
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Image must be less than 5MB");
        return;
      }

      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      onImageChange?.(file, url);
    }
  };

  return (
    <div className="relative group">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="sr-only"
        id="profile-photo-upload"
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-all"
      >
        <Avatar
          className={`${sizeClasses[size]} border-2 border-background shadow-md transition-all duration-200 ${isHovered ? "scale-105" : ""}`}
        >
          <AvatarImage
            src={previewUrl}
            alt="Profile photo"
            className="object-cover"
          />
          <AvatarFallback className="text-lg font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>

        {/* Camera Overlay */}
        <div
          className={`absolute inset-0 rounded-full bg-black/50 flex items-center justify-center transition-opacity duration-200 ${
            isHovered ? "opacity-100" : "opacity-0 sm:opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-1">
            <Camera className={`${iconSizes[size]} text-white`} />
            <span className="text-[9px] text-white/80 font-medium hidden sm:block">
              Change
            </span>
          </div>
        </div>

        {/* Mobile indicator - always visible */}
        <div className="absolute -bottom-0.5 -right-0.5 p-1.5 bg-primary rounded-full shadow-sm sm:hidden">
          <Camera className="w-3 h-3 text-primary-foreground" />
        </div>
      </button>
    </div>
  );
}
