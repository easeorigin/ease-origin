"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState, useEffect } from "react";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Newspaper,
  Mail,
  Settings,
  Menu,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdminLogoutButton } from "@/components/LogoutButton";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import ReactQueryProvider from "@/QueryClientProvider";
import Image from "next/image";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
  { icon: Briefcase, label: "Jobs", href: "/admin/jobs" },
  { icon: FileText, label: "Applications", href: "/admin/applications" },
  { icon: Newspaper, label: "Case Studies", href: "/admin/case-studies" },
  { icon: Mail, label: "Contacts", href: "/admin/contacts" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <ReactQueryProvider>
      <div className="flex h-screen bg-[#080f1c] text-foreground overflow-hidden font-sans">
        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isMobile && isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-[#080f1c]/80 backdrop-blur-sm z-40 lg:hidden"
            />
          )}
        </AnimatePresence>

        {/* Sidebar */}
        <motion.aside
          initial={false}
          animate={{
            width: isSidebarOpen ? 256 : isMobile ? 0 : 80,
          }}
          className={`fixed lg:static bg-[#080f1c] inset-y-0 left-0 z-50 flex flex-col border-r border-border overflow-hidden shrink-0 transition-all duration-300 ease-in-out`}
        >
          <div className="h-16 flex items-center justify-between px-4 border-b border-border shrink-0">
            <AnimatePresence>
              {(isSidebarOpen || !isMobile) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 overflow-hidden whitespace-nowrap"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                    <Image 
                    src={"/logo/main-logo.webp"}
                    alt="EaseOrigin Logo"
                    width={50}
                    height={30}
                    />
                  </div>
                  {isSidebarOpen && (
                    <h1 className="font-mont font-bold text-lg text-white">
                      Ease<span className={"text-eo-gold"}>Origin</span>
                    </h1>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            {isSidebarOpen && !isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSidebarOpen(false)}
                className="h-8 w-8 shrink-0"
              >
                <ChevronLeft className="h-4 w-4 text-eo-gold" />
              </Button>
            )}
          </div>

          <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className="block">
                  <Button
                    variant={"ghost"}
                    className={`w-full cursor-pointer justify-start ${isActive ? "bg-eo-gold text-white font-medium" : "text-eo-gold hover:text-muted-foreground"} ${!isSidebarOpen ? "px-0 justify-center" : ""}`}
                    onClick={() => isMobile && setIsSidebarOpen(false)}
                  >
                    <item.icon
                      className={`h-5 w-5 ${isSidebarOpen ? "mr-3" : ""}`}
                    />
                    {isSidebarOpen && <span>{item.label}</span>}
                  </Button>
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-border">
            <AdminLogoutButton isSidebarOpen={isSidebarOpen} />
          </div>
        </motion.aside>

        {/* Main Content */}
        <div className="bg-[#080f1c] flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Header */}
          <header className="h-16 flex items-center justify-between px-4 lg:px-8 border-b border-border bg-[#080f1c] backdrop-blur-md sticky top-0 z-30">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
              {!isSidebarOpen && !isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSidebarOpen(true)}
                  className={"cursor-pointer"}
                >
                  <Menu className="h-5 w-5 text-white" />
                </Button>
              )}
              <h1 className="text-xl text-white font-sans font-semibold hidden sm:block">
                {navItems.find((i) => pathname === i.href)?.label ||
                  "Admin Dashboard"}
              </h1>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 bg-[#080f1c] overflow-y-auto p-4 lg:p-8 relative">
            <div
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="max-w-7xl mx-auto space-y-8"
            >
              {children}
              <Toaster />
            </motion.div>
          </main>
        </div>
      </div>
    </ReactQueryProvider>
  );
}
