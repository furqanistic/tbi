// File: client/src/Teacher/pages/TeacherProfile.jsx
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, Shield, User } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import GeneralSettings from "../components/profile/GeneralSettings";

import SecuritySettings from "../components/profile/SecuritySettings";

export default function TeacherProfile() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "general";

  const handleTabChange = (value) => {
    setSearchParams({ tab: value });
  };

  const handleSave = () => {
    console.log("Saving changes...");
    // In real app: API call to save
    alert("Changes saved successfully!");
  };

  return (
    <div className="space-y-5 animate-in fade-in duration-500 max-w-6xl mx-auto w-full pb-10">
      {/* Header with Save Button */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
            Settings
          </h1>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Manage your account settings and public profile.
          </p>
        </div>
        <Button
          onClick={handleSave}
          size="sm"
          className="h-9 text-xs font-semibold gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white self-end sm:self-auto"
        >
          <Save className="w-3.5 h-3.5" />
          Save Changes
        </Button>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full space-y-5"
      >
        {/* Tab Navigation */}
        <div className="w-full bg-muted/30 backdrop-blur-sm border border-border/50 rounded-2xl p-1.5 shadow-none">
          <TabsList className="w-full grid grid-cols-2 h-14 bg-transparent gap-2">
            <TabsTrigger
              value="general"
              className="group flex items-center justify-center gap-3 rounded-xl text-sm font-bold transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none text-muted-foreground hover:bg-muted/50 border border-transparent"
            >
              <User className="size-4 shrink-0 opacity-70 group-data-[state=active]:opacity-100" />
              General Settings
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="group flex items-center justify-center gap-3 rounded-xl text-sm font-bold transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none text-muted-foreground hover:bg-muted/50 border border-transparent"
            >
              <Shield className="size-4 shrink-0 opacity-70 group-data-[state=active]:opacity-100" />
              Security & Privacy
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="general" className="m-0 outline-none">
          <GeneralSettings onSave={handleSave} />
        </TabsContent>

        <TabsContent value="security" className="m-0 outline-none">
          <SecuritySettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
