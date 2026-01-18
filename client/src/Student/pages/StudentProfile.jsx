// File: client/src/pages/dashboard/StudentProfile.jsx
import { useState } from "react";
import { User, Shield, Bell } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Profile Components
import ProfileHeader from "../components/studentProfile/ProfileHeader";
import GeneralSettings from "../components/studentProfile/GeneralSettings";
import SecuritySettings from "../components/studentProfile/SecuritySettings";
import NotificationSettings from "../components/studentProfile/NotificationSettings";

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
    <div className="w-full mx-auto space-y-6 animate-in fade-in duration-500">
      <ProfileHeader isLoading={isLoading} onSave={handleSave} />

      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="w-full justify-start h-auto p-0 bg-transparent rounded-none mb-6 gap-4">
          <TabsTrigger
            value="general"
            className="rounded-md data-[state=active]:bg-muted/50 data-[state=active]:text-foreground data-[state=active]:shadow-none px-3 py-1.5 text-xs font-medium transition-all text-muted-foreground hover:text-foreground hover:bg-muted/20"
          >
            <User className="w-3.5 h-3.5 mr-1.5" />
            General
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="rounded-md data-[state=active]:bg-muted/50 data-[state=active]:text-foreground data-[state=active]:shadow-none px-3 py-1.5 text-xs font-medium transition-all text-muted-foreground hover:text-foreground hover:bg-muted/20"
          >
            <Shield className="w-3.5 h-3.5 mr-1.5" />
            Security
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="rounded-md data-[state=active]:bg-muted/50 data-[state=active]:text-foreground data-[state=active]:shadow-none px-3 py-1.5 text-xs font-medium transition-all text-muted-foreground hover:text-foreground hover:bg-muted/20"
          >
            <Bell className="w-3.5 h-3.5 mr-1.5" />
            Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <GeneralSettings />
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <SecuritySettings />
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <NotificationSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
