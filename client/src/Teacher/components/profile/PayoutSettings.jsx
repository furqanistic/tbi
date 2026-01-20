// File: client/src/Teacher/components/profile/PayoutSettings.jsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowUpRight,
  Banknote,
  CreditCard,
  DollarSign,
  FileDown,
  Settings2,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Sample payout history data
const payoutHistory = [
  {
    id: 1,
    date: "Jan 15, 2026",
    method: "Bank Transfer",
    status: "Processed",
    amount: 750.0,
  },
  {
    id: 2,
    date: "Dec 20, 2025",
    method: "PayPal",
    status: "Processed",
    amount: 520.0,
  },
  {
    id: 3,
    date: "Nov 18, 2025",
    method: "Bank Transfer",
    status: "Pending",
    amount: 890.0,
  },
  {
    id: 4,
    date: "Oct 10, 2025",
    method: "PayPal",
    status: "Failed",
    amount: 340.0,
  },
];

// Status badge styles
const statusStyles = {
  Processed:
    "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  Pending:
    "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
  Failed: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30",
};

export default function PayoutSettings() {
  const [manageDialogOpen, setManageDialogOpen] = useState(false);

  return (
    <div className="space-y-5 animate-in fade-in duration-500">
      {/* Balance Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Available for Payout - Premium Bento Card */}
        <div className="relative overflow-hidden bg-card dark:bg-card/30 border border-border rounded-xl p-5 group">
          {/* Subtle gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                Available for Payout
              </span>
              <div className="p-1.5 bg-emerald-500/10 rounded-md">
                <Wallet className="w-4 h-4 text-emerald-500" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold flex items-baseline gap-0.5">
              <span className="text-lg text-muted-foreground">$</span>
              1,250
              <span className="text-lg text-muted-foreground">.00</span>
            </h2>
            <Button
              size="sm"
              className="w-full h-8 text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              <ArrowUpRight className="w-3.5 h-3.5 mr-1.5" />
              Request Payout
            </Button>
          </div>
        </div>

        {/* Total Earned Card */}
        <div className="bg-card dark:bg-card/30 border border-border rounded-xl p-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                Total Earned (All Time)
              </span>
              <div className="p-1.5 bg-primary/10 rounded-md">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold flex items-baseline gap-0.5">
              <span className="text-lg text-muted-foreground">$</span>
              8,940
              <span className="text-lg text-muted-foreground">.00</span>
            </h2>
            <p className="text-[10px] text-muted-foreground flex items-center gap-1">
              <span className="text-emerald-500 font-medium">+12.5%</span>
              vs last month
            </p>
          </div>
        </div>

        {/* Payout Method Card */}
        <div className="sm:col-span-2 lg:col-span-1 bg-card dark:bg-card/30 border border-border rounded-xl p-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                Payout Method
              </span>
              <Dialog
                open={manageDialogOpen}
                onOpenChange={setManageDialogOpen}
              >
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 text-[10px] px-2"
                  >
                    <Settings2 className="w-3 h-3 mr-1" />
                    Manage
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Manage Payout Method</DialogTitle>
                    <DialogDescription>
                      Update where you receive your earnings
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label className="text-xs">PayPal Email</Label>
                      <Input
                        defaultValue="teacher@example.com"
                        placeholder="your.email@paypal.com"
                        className="h-9 text-sm"
                      />
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg border border-border/50">
                      <p className="text-[10px] text-muted-foreground">
                        💡 Tip: Make sure your PayPal email is verified to avoid
                        payment delays.
                      </p>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setManageDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button onClick={() => setManageDialogOpen(false)}>
                      Save Changes
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-muted rounded-lg">
                <Banknote className="w-5 h-5 text-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">PayPal</p>
                <p className="text-[10px] text-muted-foreground truncate">
                  te*****@example.com
                </p>
              </div>
              <Badge className="text-[9px] h-5 px-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-0">
                Active
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Payout History Table */}
      <div className="bg-card dark:bg-card/30 border border-border rounded-xl overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold">Payout History</h3>
            <p className="text-[10px] text-muted-foreground mt-0.5">
              View and download your past payouts
            </p>
          </div>
          <Badge variant="outline" className="text-[10px] font-normal">
            {payoutHistory.length} transactions
          </Badge>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent bg-muted/30">
                <TableHead className="text-[10px] font-semibold uppercase tracking-wider">
                  Date
                </TableHead>
                <TableHead className="text-[10px] font-semibold uppercase tracking-wider">
                  Method
                </TableHead>
                <TableHead className="text-[10px] font-semibold uppercase tracking-wider">
                  Status
                </TableHead>
                <TableHead className="text-[10px] font-semibold uppercase tracking-wider text-right">
                  Amount
                </TableHead>
                <TableHead className="text-[10px] font-semibold uppercase tracking-wider text-right">
                  Invoice
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payoutHistory.map((payout) => (
                <TableRow key={payout.id} className="hover:bg-muted/20">
                  <TableCell className="text-xs font-medium">
                    {payout.date}
                  </TableCell>
                  <TableCell className="text-xs">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-3.5 h-3.5 text-muted-foreground" />
                      {payout.method}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-[10px] font-medium px-2 py-0.5",
                        statusStyles[payout.status],
                      )}
                    >
                      {payout.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="text-xs font-semibold">
                      ${payout.amount.toFixed(2)}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-muted-foreground hover:text-primary"
                      title="Download Invoice"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
