// File: client/src/Admin/pages/AdminSettings.jsx
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Settings,
  Shield,
  Upload,
  Save,
  Eye,
  EyeOff,
  Building2,
  Globe,
  Image,
  Lock,
  Timer,
} from "lucide-react";

export default function AdminSettings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "general";

  const handleTabChange = (value) => {
    setSearchParams({ tab: value });
  };

  // General settings state - Academy Info
  const [academyName, setAcademyName] = useState("The Bureaucrats Institute");
  const [supportEmail, setSupportEmail] = useState("support@tbi.edu.pk");
  const [phoneNumber, setPhoneNumber] = useState("+92 300 1234567");
  const [address, setAddress] = useState(
    "123 Education Street, Islamabad, Pakistan",
  );

  // General settings state - Site Configuration
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [publicRegistration, setPublicRegistration] = useState(true);

  // General settings state - Branding
  const [logoPreview, setLogoPreview] = useState(null);
  const [faviconPreview, setFaviconPreview] = useState(null);

  // Security settings state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState(true);

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFaviconUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFaviconPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    console.log("Saving settings:", {
      general: {
        academyName,
        supportEmail,
        phoneNumber,
        address,
        maintenanceMode,
        publicRegistration,
        logoPreview,
        faviconPreview,
      },
      security: {
        currentPassword,
        newPassword,
        twoFactorEnabled,
        sessionTimeout,
      },
    });
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Settings
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage your admin portal preferences
          </p>
        </div>
      </div>

      {/* Settings Content */}
      <div className="rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50">
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          {/* Tab Navigation */}
          <div className="border-b border-gray-300 dark:border-border/50 px-4 pt-4 pb-4">
            <TabsList className="w-full bg-transparent h-auto p-0 gap-2">
              <TabsTrigger
                value="general"
                className={`
                  flex-1 px-4 py-2.5 text-sm font-medium rounded-t-md border
                  data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground
                  data-[state=inactive]:border-border data-[state=inactive]:dark:border-border/50
                  data-[state=active]:bg-blue-600 data-[state=active]:text-white
                  data-[state=active]:border-blue-600
                  transition-colors
                `}
              >
                <Settings className="w-4 h-4 mr-2" />
                General
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className={`
                  flex-1 px-4 py-2.5 text-sm font-medium rounded-t-md border
                  data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground
                  data-[state=inactive]:border-border data-[state=inactive]:dark:border-border/50
                  data-[state=active]:bg-blue-600 data-[state=active]:text-white
                  data-[state=active]:border-blue-600
                  transition-colors
                `}
              >
                <Shield className="w-4 h-4 mr-2" />
                Security
              </TabsTrigger>
            </TabsList>
          </div>

          {/* General Tab Content */}
          <TabsContent value="general" className="p-4 sm:p-5 space-y-5 mt-0">
            {/* Academy Info Section */}
            <div className="rounded-lg border border-gray-300 dark:border-border/50 bg-transparent p-4">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-semibold text-foreground">
                  Academy Information
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Academy Name */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="academyName"
                    className="text-xs font-medium text-muted-foreground"
                  >
                    Academy Name
                  </Label>
                  <Input
                    id="academyName"
                    value={academyName}
                    onChange={(e) => setAcademyName(e.target.value)}
                    placeholder="Enter academy name"
                    className="h-9 border-gray-300 dark:border-border/50 bg-transparent shadow-none text-sm"
                  />
                </div>
                {/* Support Email */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="supportEmail"
                    className="text-xs font-medium text-muted-foreground"
                  >
                    Support Email
                  </Label>
                  <Input
                    id="supportEmail"
                    type="email"
                    value={supportEmail}
                    onChange={(e) => setSupportEmail(e.target.value)}
                    placeholder="Enter support email"
                    className="h-9 border-gray-300 dark:border-border/50 bg-transparent shadow-none text-sm"
                  />
                </div>
                {/* Phone Number */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="phoneNumber"
                    className="text-xs font-medium text-muted-foreground"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter phone number"
                    className="h-9 border-gray-300 dark:border-border/50 bg-transparent shadow-none text-sm"
                  />
                </div>
                {/* Physical Address */}
                <div className="space-y-1.5 sm:col-span-2">
                  <Label
                    htmlFor="address"
                    className="text-xs font-medium text-muted-foreground"
                  >
                    Physical Address
                  </Label>
                  <Textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter physical address"
                    rows={2}
                    className="border-gray-300 dark:border-border/50 bg-transparent shadow-none text-sm resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Site Configuration Section */}
            <div className="rounded-lg border border-gray-300 dark:border-border/50 bg-transparent p-4">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-semibold text-foreground">
                  Site Configuration
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Maintenance Mode */}
                <div className="flex items-center justify-between p-3 rounded-md border border-gray-300 dark:border-border/50 bg-transparent">
                  <div className="space-y-0.5">
                    <Label
                      htmlFor="maintenanceMode"
                      className="text-sm font-medium text-foreground cursor-pointer"
                    >
                      Maintenance Mode
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Students will see an Under Maintenance page
                    </p>
                  </div>
                  <Switch
                    id="maintenanceMode"
                    checked={maintenanceMode}
                    onCheckedChange={setMaintenanceMode}
                  />
                </div>
                {/* Public Registration */}
                <div className="flex items-center justify-between p-3 rounded-md border border-gray-300 dark:border-border/50 bg-transparent">
                  <div className="space-y-0.5">
                    <Label
                      htmlFor="publicRegistration"
                      className="text-sm font-medium text-foreground cursor-pointer"
                    >
                      Public Registration
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Allow or disallow new student signups on the platform
                    </p>
                  </div>
                  <Switch
                    id="publicRegistration"
                    checked={publicRegistration}
                    onCheckedChange={setPublicRegistration}
                  />
                </div>
              </div>
            </div>

            {/* Branding Section */}
            <div className="rounded-lg border border-gray-300 dark:border-border/50 bg-transparent p-4">
              <div className="flex items-center gap-2 mb-4">
                <Image className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-semibold text-foreground">
                  Branding
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Main Logo Upload */}
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground">
                    Main Logo
                  </Label>
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-16 rounded-md border-2 border-dashed border-gray-300 dark:border-border/50 flex items-center justify-center bg-slate-50 dark:bg-card/30 overflow-hidden shrink-0">
                      {logoPreview ? (
                        <img
                          src={logoPreview}
                          alt="Logo preview"
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <Upload className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="logo-upload">
                        <Button
                          variant="outline"
                          size="sm"
                          className="cursor-pointer h-8 text-xs border-gray-300 dark:border-border/50 shadow-none"
                          asChild
                        >
                          <span>
                            <Upload className="w-3 h-3 mr-1.5" />
                            Upload
                          </span>
                        </Button>
                        <input
                          id="logo-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleLogoUpload}
                          className="hidden"
                        />
                      </label>
                      <p className="text-[10px] text-muted-foreground">
                        PNG, JPG, SVG. Max 2MB
                      </p>
                    </div>
                  </div>
                </div>
                {/* Favicon Upload */}
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground">
                    Favicon
                  </Label>
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-16 rounded-md border-2 border-dashed border-gray-300 dark:border-border/50 flex items-center justify-center bg-slate-50 dark:bg-card/30 overflow-hidden shrink-0">
                      {faviconPreview ? (
                        <img
                          src={faviconPreview}
                          alt="Favicon preview"
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <Upload className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="favicon-upload">
                        <Button
                          variant="outline"
                          size="sm"
                          className="cursor-pointer h-8 text-xs border-gray-300 dark:border-border/50 shadow-none"
                          asChild
                        >
                          <span>
                            <Upload className="w-3 h-3 mr-1.5" />
                            Upload
                          </span>
                        </Button>
                        <input
                          id="favicon-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleFaviconUpload}
                          className="hidden"
                        />
                      </label>
                      <p className="text-[10px] text-muted-foreground">
                        ICO, PNG. 32x32px
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Security Tab Content */}
          <TabsContent value="security" className="p-4 sm:p-5 space-y-5 mt-0">
            {/* Password Update Card */}
            <div className="rounded-lg border border-gray-300 dark:border-border/50 bg-transparent p-4">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-semibold text-foreground">
                  Password Update
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Current Password */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="currentPassword"
                    className="text-xs font-medium text-muted-foreground"
                  >
                    Current Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="currentPassword"
                      type={showCurrentPassword ? "text" : "password"}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Enter current password"
                      className="h-9 pr-9 border-gray-300 dark:border-border/50 bg-transparent shadow-none text-sm"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-2.5 hover:bg-transparent"
                      onClick={() =>
                        setShowCurrentPassword(!showCurrentPassword)
                      }
                    >
                      {showCurrentPassword ? (
                        <EyeOff className="w-3.5 h-3.5 text-muted-foreground" />
                      ) : (
                        <Eye className="w-3.5 h-3.5 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>
                {/* New Password */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="newPassword"
                    className="text-xs font-medium text-muted-foreground"
                  >
                    New Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="h-9 pr-9 border-gray-300 dark:border-border/50 bg-transparent shadow-none text-sm"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-2.5 hover:bg-transparent"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? (
                        <EyeOff className="w-3.5 h-3.5 text-muted-foreground" />
                      ) : (
                        <Eye className="w-3.5 h-3.5 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground mt-2">
                Password must be at least 8 characters with uppercase,
                lowercase, and numbers.
              </p>
            </div>

            {/* Security Toggles */}
            <div className="rounded-lg border border-gray-300 dark:border-border/50 bg-transparent p-4">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-semibold text-foreground">
                  Security Options
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Two-Factor Authentication */}
                <div className="flex items-center justify-between p-3 rounded-md border border-gray-300 dark:border-border/50 bg-slate-50 dark:bg-card/30">
                  <div className="space-y-0.5">
                    <Label
                      htmlFor="twoFactor"
                      className="text-sm font-medium text-foreground cursor-pointer"
                    >
                      Two-Factor Authentication
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Extra layer of security
                    </p>
                  </div>
                  <Switch
                    id="twoFactor"
                    checked={twoFactorEnabled}
                    onCheckedChange={setTwoFactorEnabled}
                  />
                </div>
                {/* Session Timeout */}
                <div className="flex items-center justify-between p-3 rounded-md border border-gray-300 dark:border-border/50 bg-slate-50 dark:bg-card/30">
                  <div className="space-y-0.5">
                    <Label
                      htmlFor="sessionTimeout"
                      className="text-sm font-medium text-foreground cursor-pointer"
                    >
                      Session Timeout
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Auto-logout after inactivity
                    </p>
                  </div>
                  <Switch
                    id="sessionTimeout"
                    checked={sessionTimeout}
                    onCheckedChange={setSessionTimeout}
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Save Button - Bottom Right */}
        <div className="flex justify-end p-4 border-t border-gray-300 dark:border-border/50">
          <Button onClick={handleSaveChanges} className="shadow-none">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
