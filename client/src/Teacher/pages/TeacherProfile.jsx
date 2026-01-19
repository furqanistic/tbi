import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Shield, User } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import GeneralSettings from "../components/profile/GeneralSettings";
import PayoutSettings from "../components/profile/PayoutSettings";
import SecuritySettings from "../components/profile/SecuritySettings";

export default function TeacherProfile() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "general";

  const handleTabChange = (value) => {
    setSearchParams({ tab: value });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-5xl mx-auto w-full pb-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground text-sm">
          Manage your account settings and preferences.
        </p>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full space-y-6"
      >
        <div className="w-full overflow-x-auto pb-2 sm:pb-0">
          <TabsList className="w-full h-12 p-1 bg-muted/50 dark:bg-muted/20 border border-border/50 rounded-xl grid grid-cols-3">
            <TabsTrigger
              value="general"
              className="gap-2 rounded-lg text-xs sm:text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
            >
              <User className="w-4 h-4" />
              General
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="gap-2 rounded-lg text-xs sm:text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
            >
              <Shield className="w-4 h-4" />
              Security
            </TabsTrigger>
            <TabsTrigger
              value="payout"
              className="gap-2 rounded-lg text-xs sm:text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
            >
              <CreditCard className="w-4 h-4" />
              Payout
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="general" className="m-0 outline-none">
          <GeneralSettings />
        </TabsContent>

        <TabsContent value="security" className="m-0 outline-none">
          <SecuritySettings />
        </TabsContent>

        <TabsContent value="payout" className="m-0 outline-none">
          <PayoutSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
