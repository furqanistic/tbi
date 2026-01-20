// File: client/src/Teacher/components/CourseEditor/PriceTab.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, Lock, Users, Clock } from "lucide-react";
import { TabsContent } from "@/components/ui/tabs";

export default function PriceTab() {
  return (
    <TabsContent
      value="settings"
      className="space-y-3 mt-0 focus-visible:ring-0 outline-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Pricing Card */}
        <Card className="border border-border/40 dark:border-border/20 bg-card/50 dark:bg-card/30 shadow-none">
          <CardHeader className="pb-2 pt-3 px-3 sm:px-4 border-b border-border/30">
            <CardTitle className="text-sm font-semibold flex items-center gap-2">
              <div className="p-1.5 bg-emerald-500/10 rounded-md">
                <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
              </div>
              Pricing
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 sm:p-4 space-y-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-muted-foreground">
                Course Price (PKR)
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground">
                  Rs.
                </span>
                <Input
                  type="number"
                  placeholder="5000"
                  className="h-9 text-sm bg-muted/50 rounded-sm pl-10"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-muted-foreground">
                Discounted Price (Optional)
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-emerald-500">
                  Rs.
                </span>
                <Input
                  type="number"
                  placeholder="3500"
                  className="h-9 text-sm bg-emerald-500/5 border-emerald-500/20 rounded-sm pl-10"
                />
              </div>
              <p className="text-[10px] text-muted-foreground">
                Leave empty for no discount
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Access Control Card */}
        <Card className="border border-border/40 dark:border-border/20 bg-card/50 dark:bg-card/30 shadow-none">
          <CardHeader className="pb-2 pt-3 px-3 sm:px-4 border-b border-border/30">
            <CardTitle className="text-sm font-semibold flex items-center gap-2">
              <div className="p-1.5 bg-emerald-500/10 rounded-md">
                <Lock className="w-3.5 h-3.5 text-emerald-500" />
              </div>
              Access Control
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 sm:p-4 space-y-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                <Users className="w-3 h-3" />
                Enrollment Limit
              </Label>
              <Input
                type="number"
                placeholder="Unlimited"
                className="h-9 text-sm bg-muted/50 rounded-sm"
              />
              <p className="text-[10px] text-muted-foreground">
                Leave empty for unlimited enrollments
              </p>
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                Access Duration (Months)
              </Label>
              <Input
                type="number"
                placeholder="12"
                className="h-9 text-sm bg-muted/50 rounded-sm"
              />
              <p className="text-[10px] text-muted-foreground">
                How long students can access the course
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
}
