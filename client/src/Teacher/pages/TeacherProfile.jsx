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
        {/* Tab Navigation with Bottom Border */}
        <div className="w-full overflow-x-auto border-b border-border pb-3">
          <TabsList className="w-full sm:w-auto h-10 p-1 bg-muted/50 dark:bg-muted/20 border border-border/50 rounded-lg inline-flex">
            <TabsTrigger
              value="general"
              className="gap-1.5 rounded-md px-3 text-xs sm:text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
            >
              <User className="w-3.5 h-3.5" />
              General
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="gap-1.5 rounded-md px-3 text-xs sm:text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
            >
              <Shield className="w-3.5 h-3.5" />
              Security
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
