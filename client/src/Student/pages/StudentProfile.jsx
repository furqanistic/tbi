// File: client/src/pages/dashboard/StudentProfile.jsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, User } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

// Profile Components
import GeneralSettings from "../components/studentProfile/GeneralSettings";
import ProfileHeader from "../components/studentProfile/ProfileHeader";
import SecuritySettings from "../components/studentProfile/SecuritySettings";

export default function StudentProfile() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "general";

  const handleTabChange = (value) => {
    setSearchParams({ tab: value });
  };

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full mx-auto space-y-8 animate-in fade-in duration-500">
      <ProfileHeader isLoading={isLoading} onSave={handleSave} />

      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <div className="w-full bg-muted/30 backdrop-blur-sm border border-border/50 rounded-2xl p-1.5 shadow-sm">
          <TabsList className="w-full grid grid-cols-2 h-14 bg-transparent gap-2">
            <TabsTrigger
              value="general"
              className="group flex items-center justify-center gap-3 rounded-xl text-sm font-bold transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md text-muted-foreground hover:bg-muted/50 border border-transparent"
            >
              <User className="size-4 shrink-0 opacity-70 group-data-[state=active]:opacity-100" />
              General Settings
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="group flex items-center justify-center gap-3 rounded-xl text-sm font-bold transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md text-muted-foreground hover:bg-muted/50 border border-transparent"
            >
              <Shield className="size-4 shrink-0 opacity-70 group-data-[state=active]:opacity-100" />
              Security & Privacy
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="mt-8">
          <TabsContent value="general" className="m-0 outline-none">
            <GeneralSettings />
          </TabsContent>

          <TabsContent value="security" className="m-0 outline-none">
            <SecuritySettings />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
