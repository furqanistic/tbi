// File: client/src/Student/components/NotificationSettings.jsx
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { notificationSettings } from "../../data/profileData";

export default function NotificationSettings() {
  return (
    <div className="bg-card dark:bg-card/30 rounded-sm border border-border shadow-sm p-6 space-y-6">
      {/* Email Notifications */}
      <div className="space-y-4">
        <h3 className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
          Email Notifications
        </h3>
        <div className="space-y-2">
          {notificationSettings.email.map((setting) => (
            <div
              key={setting.id}
              className="flex items-center justify-between p-3 border border-border/40 rounded-sm hover:bg-muted/20 transition-colors"
            >
              <div className="space-y-0.5">
                <Label className="text-xs font-medium">{setting.label}</Label>
                <p className="text-[10px] text-muted-foreground">
                  {setting.description}
                </p>
              </div>
              <Switch
                defaultChecked={setting.defaultChecked}
                disabled={setting.disabled}
              />
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-border/40" />

      {/* Push Notifications */}
      <div className="space-y-4">
        <h3 className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
          Push Notifications
        </h3>
        <div className="space-y-2">
          {notificationSettings.push.map((setting) => (
            <div
              key={setting.id}
              className="flex items-center justify-between p-3 border border-border/40 rounded-sm hover:bg-muted/20 transition-colors"
            >
              <div className="space-y-0.5">
                <Label className="text-xs font-medium">{setting.label}</Label>
                <p className="text-[10px] text-muted-foreground">
                  {setting.description}
                </p>
              </div>
              <Switch
                defaultChecked={setting.defaultChecked}
                disabled={setting.disabled}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
