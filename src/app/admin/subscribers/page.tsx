"use client";

import { useState } from "react";
import { useSubscribers, useDeleteSubscriber } from "@/hooks/use-subscribers";
import { PageHeader } from "@/components/page-header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

export default function Subscriber() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: subscribers, isLoading } = useSubscribers();
  const deleteMutation = useDeleteSubscriber();
  const { toast } = useToast();

  const handleDelete = (id: string) => {
    if (confirm("Remove this subscriber?")) {
      deleteMutation.mutate(id, {
        onSuccess: () => toast({ title: "Subscriber removed" }),
      });
    }
  };

  // if (!subscribers) {
  //   return (
  //     <div className="space-y-6">
  //       <PageHeader
  //         title="Subscribers"
  //         description="Everyone who has subscribed or reached out via the website"
  //       />
  //       <div className="p-8 text-center text-white">
  //         No subscribers found.
  //       </div>
  //     </div>
  //   );
  // }

  const filtered =
    subscribers?.filter((s) =>
      s.email.toLowerCase().includes(searchTerm.toLowerCase()),
    ) || [];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Subscribers"
        description="Everyone who has subscribed or reached out via the website"
      />

      {/* Summary card */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="bg-eo-blue border border-eo-navy rounded-xl p-4">
          <p className="text-xs text-white mb-1">
            Total Subscribers
          </p>
          <p className="text-2xl font-bold text-white/75">{subscribers?.length ?? "—"}</p>
        </div>
        <div className="bg-eo-blue border border-eo-navy rounded-xl p-4">
          <p className="text-xs text-white mb-1">This Month</p>
          <p className="text-2xl font-bold text-white/75">
            {subscribers?.filter((s) => {
              const d = new Date(s.subscribedAt);
              const now = new Date();
              return (
                d.getMonth() === now.getMonth() &&
                d.getFullYear() === now.getFullYear()
              );
            }).length ?? "—"}
          </p>
        </div>
        <div className="bg-eo-blue border border-eo-navy rounded-xl p-4 hidden sm:block">
          <p className="text-xs text-white mb-1">Showing</p>
          <p className="text-2xl font-bold text-white/75">{filtered.length}</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-eo-blue border border-eo-navy rounded-xl p-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
          <Input
            placeholder="Search by email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 bg-eo-navy"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-eo-blue border border-eo-navy rounded-xl shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-eo-navy">
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Date Subscribed</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="h-32 text-center text-white"
                >
                  Loading subscribers…
                </TableCell>
              </TableRow>
            ) : filtered.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="h-32 text-center text-white"
                >
                  {searchTerm
                    ? "No subscribers match your search."
                    : "No subscribers yet."}
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((subscriber, index) => (
                <TableRow key={subscriber._id} className="hover:bg-muted/30">
                  <TableCell className="text-white text-sm w-12">
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    <span className="font-medium text-white/75">
                      {subscriber.email}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm text-white">
                    {format(new Date(subscriber.subscribedAt), "MMM d, yyyy")}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-white hover:text-destructive hover:bg-destructive/10"
                      onClick={() => handleDelete(subscriber._id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
