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
import { CreditCard, DollarSign, Wallet } from "lucide-react";

export default function PayoutSettings() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Current Balance Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-primary/80 to-primary text-primary-foreground rounded-xl p-6 space-y-2 shadow-lg">
          <p className="text-sm font-medium opacity-90">Available for Payout</p>
          <h2 className="text-3xl font-bold flex items-center gap-1">
            <DollarSign className="w-6 h-6" />
            1,250.00
          </h2>
          <Button
            variant="secondary"
            size="sm"
            className="w-full mt-2 bg-white/10 hover:bg-white/20 border-0 text-white"
          >
            Request Payout
          </Button>
        </div>

        <div className="md:col-span-2 bg-card dark:bg-card/30 border border-border rounded-xl p-6 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg">Payout Method</h3>
              <p className="text-sm text-muted-foreground">
                Where should we send your money?
              </p>
            </div>
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </div>

          <div className="flex items-center gap-3 mt-4 p-3 border border-border rounded-lg bg-background/50">
            <div className="p-2 bg-muted rounded-md">
              <Wallet className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">PayPal</p>
              <p className="text-xs text-muted-foreground">
                te*****@example.com
              </p>
            </div>
            <Badge
              variant="secondary"
              className="ml-auto bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
            >
              Active
            </Badge>
          </div>
        </div>
      </div>

      {/* Payout History */}
      <div className="bg-card dark:bg-card/30 border border-border rounded-xl overflow-hidden">
        <div className="p-4 border-b border-border">
          <h3 className="font-semibold">Payout History</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Date</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3].map((i) => (
              <TableRow key={i}>
                <TableCell className="text-xs">Oct {20 - i}, 2024</TableCell>
                <TableCell className="text-xs flex items-center gap-2">
                  <CreditCard className="w-3 h-3 text-muted-foreground" />
                  Direct Deposit
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-[10px] font-normal">
                    Processed
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-medium text-xs">
                  $450.00
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
