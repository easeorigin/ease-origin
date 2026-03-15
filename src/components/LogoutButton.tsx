"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function AdminLogoutButton({
  isSidebarOpen = true,
}: {
  isSidebarOpen?: boolean;
}) {
  return (
    <Button
        variant="ghost"
        className={`w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10 ${!isSidebarOpen ? "px-0 justify-center" : ""}`}
        onClick={() =>
          signOut({
            callbackUrl: "/login",
          })
        }
      >
        <LogOut className={`h-5 w-5 ${isSidebarOpen ? "mr-3" : ""}`} />
        {isSidebarOpen && <span>Logout</span>}
      </Button>
  );
}
