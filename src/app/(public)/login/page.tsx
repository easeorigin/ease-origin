"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Shield,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function AdminLoginPage() {
  const [showPw, setShowPw] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginValues) {
    setIsLoading(true);

    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    setIsLoading(false);

    if (res?.error) {
      toast({
        title: "Invalid Credentials",
        description: "Please check your email and password.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Login Successful",
      description: "Welcome back, Admin.",
    });

    router.push("/admin/dashboard");
  }

  const inputBase =
    "w-full pl-10 pr-4 py-3 rounded-lg border bg-white/5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200";

  return (
    <div className="min-h-screen bg-[#080f1c] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-blue-600 rounded-full blur-[140px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-eo-gold rounded-full blur-[180px] opacity-[0.04] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo / Brand */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 justify-center mb-4 shadow-lg">
            <Image
              src={"/logo/main-logo.png"}
              alt="EaseOrigin Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <h1 className="text-2xl font-extrabold text-white tracking-tight font-mont">
              EaseOrigin
            </h1>
          </div>

          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mt-1">
            Admin Portal
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/4 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-sm overflow-hidden">
          {/* Card header */}
          <div className="px-8 pt-7 pb-5 border-b border-white/6">
            <h2 className="text-base font-bold text-white">
              Sign In to Your Account
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Authorized personnel only.
            </p>
          </div>

          {/* Card body */}
          <div className="px-8 py-7">
            <AnimatePresence mode="wait">
              <motion.form
                key="form"
                onSubmit={form.handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="admin@eofederal.com"
                      {...form.register("email")}
                      className={cn(
                        inputBase,
                        "border-white/10 focus:border-eo-blue/60 focus:ring-eo-blue/20",
                      )}
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Password
                    </label>
                    <button
                      type="button"
                      className="text-xs text-eo-gold hover:text-white transition-colors font-medium"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <input
                      type={showPw ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="••••••••••"
                      {...form.register("password")}
                      className={cn(
                        inputBase,
                        "pr-11",
                        "border-white/10 focus:border-eo-blue/60 focus:ring-eo-blue/20",
                      )}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw((s) => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {showPw ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-lg bg-eo-navy border border-eo-blue/30 text-white font-bold text-sm hover:bg-eo-blue transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />{" "}
                      Authenticating…
                    </>
                  ) : (
                    <>
                      <Shield className="h-4 w-4 text-eo-gold" /> Sign In
                      Securely
                    </>
                  )}
                </button>
              </motion.form>
            </AnimatePresence>
          </div>

          {/* Card footer */}
          <div className="px-8 py-4 bg-white/2 border-t border-white/6 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <p className="text-xs text-gray-500">
              Secure connection · TLS 1.3 encrypted
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          © {new Date().getFullYear()} EaseOrigin · All rights reserved
        </p>
      </motion.div>
    </div>
  );
}
