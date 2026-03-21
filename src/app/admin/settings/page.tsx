/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { Settings, useSettings, useUpdateSettings } from "@/hooks/use-settings";
import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import {
  Bell,
  Phone,
  MapPin,
  Clock,
  Share2,
  Hash,
  Building2,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type FormState = {
  company: {
    name: string;
    shortName: string;
    description: string;
    url: string;
    domain: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      full: string;
    };
    contact: { email: string; phone: string };
    hours: { days: string; time: string };
    social: {
      linkedin: string;
      twitter: string;
      facebook: string;
      instagram: string;
    };
    identifiers: { uei: string; cage: string; naics: string };
  };
};

type NotificationKey =
  | "newJobApplication"
  | "newSubscriber"
  | "newResume"
  | "statusChange"
  | "jobExpiry"
  | "weeklySummary";

const NOTIFICATION_OPTIONS: {
  key: NotificationKey;
  label: string;
  description: string;
}[] = [
  {
    key: "newJobApplication",
    label: "New Application Received",
    description: "Get notified whenever a candidate submits a job application.",
  },
  {
    key: "newSubscriber",
    label: "New Subscriber / Contact Message",
    description: "Alert when someone submits a contact or subscribe form.",
  },
  {
    key: "newResume",
    label: "New Resume Submitted",
    description: "Notify when an applicant attaches a resume.",
  },
  {
    key: "statusChange",
    label: "Application Status Changes",
    description: "Alert when an application status is updated.",
  },
  {
    key: "jobExpiry",
    label: "Job Posting Activity",
    description: "Remind when a job posting is unpublished or about to expire.",
  },
  {
    key: "weeklySummary",
    label: "Weekly Summary Report",
    description: "Receive a weekly digest of applications and activity.",
  },
];

const EMPTY_FORM: FormState = {
  company: {
    name: "",
    shortName: "",
    description: "",
    url: "",
    domain: "",
    address: { street: "", city: "", state: "", zip: "", full: "" },
    contact: { email: "", phone: "" },
    hours: { days: "", time: "" },
    social: { linkedin: "", twitter: "", facebook: "", instagram: "" },
    identifiers: { uei: "", cage: "", naics: "" },
  },
};

// ─── Utilities ────────────────────────────────────────────────────────────────

function setNestedValue<T extends Record<string, unknown>>(
  obj: T,
  path: string,
  value: string,
): T {
  const keys = path.split(".");
  const next = structuredClone(obj);

  let cursor: Record<string, unknown> = next;

  keys.forEach((key, i) => {
    if (i === keys.length - 1) {
      cursor[key] = value;
    } else {
      if (typeof cursor[key] !== "object" || cursor[key] === null) {
        cursor[key] = {};
      }
      cursor = cursor[key] as Record<string, unknown>;
    }
  });

  return next;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionCard({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="border-border/50 shadow-sm bg-eo-blue overflow-hidden">
      <CardHeader className="border-b border-border/50 bg-eo-blue/75 pb-4">
        <CardTitle className="flex items-center gap-2 text-base text-white">
          <Icon className="w-4 h-4 text-blue-500" />
          {title}
        </CardTitle>
        <CardDescription className="text-xs text-white">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-5 space-y-4">{children}</CardContent>
    </Card>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  textarea = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={name} className="text-sm text-white">
        {label}
      </Label>
      {textarea ? (
        <Textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={3}
          className="resize-none text-sm bg-eo-blue text-white"
        />
      ) : (
        <Input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="text-sm bg-eo-blue text-white"
        />
      )}
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function AdminSettings() {
  const { data: serverSettings, isLoading } = useSettings();
  const updateMutation = useUpdateSettings();
  const { toast } = useToast();

  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [notifications, setNotifications] = useState<
    Record<NotificationKey, boolean>
  >({
    newJobApplication: true,
    newSubscriber: true,
    newResume: false,
    statusChange: true,
    jobExpiry: true,
    weeklySummary: false,
  });

  // Populate form when data arrives
  function transformServerSettings(serverSettings: Settings): {
    form: FormState;
    notifications: Record<NotificationKey, boolean>;
  } {
    const c = serverSettings.company;

    return {
      form: {
        company: {
          name: c?.name || "",
          shortName: c?.shortName || "",
          description: c?.description || "",
          url: c?.url || "",
          domain: c?.domain || "",
          address: {
            street: c?.address?.street || "",
            city: c?.address?.city || "",
            state: c?.address?.state || "",
            zip: c?.address?.zip || "",
            full: c?.address?.full || "",
          },
          contact: {
            email: c?.contact?.email || "",
            phone: c?.contact?.phone || "",
          },
          hours: {
            days: c?.hours?.days || "",
            time: c?.hours?.time || "",
          },
          social: {
            linkedin: c?.social?.linkedin || "",
            twitter: c?.social?.twitter || "",
            facebook: c?.social?.facebook || "",
            instagram: c?.social?.instagram || "",
          },
          identifiers: {
            uei: c?.identifiers?.uei || "",
            cage: c?.identifiers?.cage || "",
            naics: c?.identifiers?.naics || "",
          },
        },
      },

      notifications: {
        newSubscriber: serverSettings.notifications?.newSubscriber ?? true,
        newResume: serverSettings.notifications?.newResume ?? false,
        newJobApplication:
          serverSettings.notifications?.newJobApplication ?? true,
        statusChange: true,
        jobExpiry: true,
        weeklySummary: false,
      },
    };
  }

  useEffect(() => {
    if (!serverSettings) return;

    const transformed = transformServerSettings(serverSettings);

    // ✅ Only initialize ONCE (prevents overwriting user edits)
    setForm((prev) => (prev === EMPTY_FORM ? transformed.form : prev));

    setNotifications((prev) =>
      Object.keys(prev).length === 0 ? transformed.notifications : prev,
    );
  }, [serverSettings]);
  // useEffect(() => {
  //   if (!serverSettings) return;
  //   const c = serverSettings.company;
  //   if (!c) return;

  //   setForm({
  //     company: {
  //       name:        c.name        || "",
  //       shortName:   c.shortName   || "",
  //       description: c.description || "",
  //       url:         c.url         || "",
  //       domain:      c.domain      || "",
  //       address: {
  //         street: c.address?.street || "",
  //         city:   c.address?.city   || "",
  //         state:  c.address?.state  || "",
  //         zip:    c.address?.zip    || "",
  //         full:   c.address?.full   || "",
  //       },
  //       contact: {
  //         email: c.contact?.email || "",
  //         phone: c.contact?.phone || "",
  //       },
  //       hours: {
  //         days: c.hours?.days || "",
  //         time: c.hours?.time || "",
  //       },
  //       social: {
  //         linkedin:  c.social?.linkedin  || "",
  //         twitter:   c.social?.twitter   || "",
  //         facebook:  c.social?.facebook  || "",
  //         instagram: c.social?.instagram || "",
  //       },
  //       identifiers: {
  //         uei:   c.identifiers?.uei   || "",
  //         cage:  c.identifiers?.cage  || "",
  //         naics: c.identifiers?.naics || "",
  //       },
  //     },
  //   });

  //   if (serverSettings.notifications) {
  //   setNotifications({
  //     newSubscriber: serverSettings.notifications.newSubscriber,
  //     newResume: serverSettings.notifications.newResume,
  //     newJobApplication: serverSettings.notifications.newJobApplication,

  //     // fallback for ones not in backend yet
  //     statusChange: true,
  //     jobExpiry: true,
  //     weeklySummary: false,
  //   });
  // }
  // }, [serverSettings]);

  // Dot-notation nested updater
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => setNestedValue(prev, name, value));
  };

  const handleSave = () => {
    updateMutation.mutate(
      {
        ...form,
        notifications, // include notifications too
      },
      {
        onSuccess: () => toast({ title: "Settings saved successfully" }),
        onError: (err: unknown) => {
          const message =
            err instanceof Error ? err.message : "Something went wrong";

          toast({
            title: "Failed to save settings",
            description: message,
            variant: "destructive",
          });
        },
      },
    );
  };

  const toggleNotification = (key: NotificationKey) =>
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));

  const saveNotifications = () => {
    updateMutation.mutate(
      {
        notifications: {
          newSubscriber: notifications.newSubscriber,
          newResume: notifications.newResume,
          newJobApplication: notifications.newJobApplication,
        },
      },
      {
        onSuccess: () => toast({ title: "Notification preferences saved" }),
      },
    );
  };

  if (isLoading) {
    return <div className="animate-pulse h-125 bg-card rounded-xl" />;
  }

  const { company } = form;

  return (
    <div className="space-y-8 max-w-5xl">
      <PageHeader
        title="Settings"
        description="Manage company configuration and platform preferences"
      />

      {/* ── Company Info ── */}
      <SectionCard
        icon={Building2}
        title="Company Info"
        description="Basic company identity and online presence"
      >
        <Field
          label="Company Name *"
          name="company.name"
          value={company.name}
          onChange={handleChange}
          placeholder="EaseOrigin LLC"
        />
        <Row>
          <Field
            label="Short Name"
            name="company.shortName"
            value={company.shortName}
            onChange={handleChange}
            placeholder="EaseOrigin"
          />
          <Field
            label="Domain"
            name="company.domain"
            value={company.domain}
            onChange={handleChange}
            placeholder="easeorigin.com"
          />
        </Row>
        <Row>
          <Field
            label="Website URL"
            name="company.url"
            value={company.url}
            onChange={handleChange}
            placeholder="https://easeorigin"
          />
        </Row>
        <Field
          label="Description"
          name="company.description"
          value={company.description}
          onChange={handleChange}
          placeholder="Brief overview of the company…"
          textarea
        />
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ── Contact Info ── */}
        <SectionCard
          icon={Phone}
          title="Contact Info"
          description="Primary contact details"
        >
          <Field
            label="Email"
            name="company.contact.email"
            value={company.contact.email}
            onChange={handleChange}
            placeholder="info@easeorigin"
            type="email"
          />
          <Field
            label="Phone"
            name="company.contact.phone"
            value={company.contact.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
          />
        </SectionCard>

        {/* ── Business Hours ── */}
        <SectionCard
          icon={Clock}
          title="Business Hours"
          description="Operating days and time"
        >
          <Field
            label="Days"
            name="company.hours.days"
            value={company.hours.days}
            onChange={handleChange}
            placeholder="Monday – Friday"
          />
          <Field
            label="Time"
            name="company.hours.time"
            value={company.hours.time}
            onChange={handleChange}
            placeholder="9:00 AM – 5:00 PM EST"
          />
        </SectionCard>
      </div>

      {/* ── Address ── */}
      <SectionCard
        icon={MapPin}
        title="Address"
        description="Office or mailing address"
      >
        <Field
          label="Street"
          name="company.address.street"
          value={company.address.street}
          onChange={handleChange}
          placeholder="123 Main Street"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <Field
            label="City"
            name="company.address.city"
            value={company.address.city}
            onChange={handleChange}
            placeholder="Washington"
          />
          <Field
            label="State"
            name="company.address.state"
            value={company.address.state}
            onChange={handleChange}
            placeholder="TX"
          />
          <Field
            label="ZIP Code"
            name="company.address.zip"
            value={company.address.zip}
            onChange={handleChange}
            placeholder="20001"
          />
        </div>
        <Field
          label="Full Address (optional — shown on site)"
          name="company.address.full"
          value={company.address.full}
          onChange={handleChange}
          placeholder="123 Main Street, Washington, DC 20001"
        />
      </SectionCard>

      {/* ── Social Links ── */}
      <SectionCard
        icon={Share2}
        title="Social Links"
        description="Public social media profiles"
      >
        <Row>
          <Field
            label="LinkedIn"
            name="company.social.linkedin"
            value={company.social.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/company/tgfederal"
          />
          <Field
            label="Twitter"
            name="company.social.twitter"
            value={company.social.twitter}
            onChange={handleChange}
            placeholder="https://twitter.com/tgfederal"
          />
        </Row>
        <Row>
          <Field
            label="Facebook"
            name="company.social.facebook"
            value={company.social.facebook}
            onChange={handleChange}
            placeholder="https://facebook.com/tgfederal"
          />
          <Field
            label="Instagram"
            name="company.social.instagram"
            value={company.social.instagram}
            onChange={handleChange}
            placeholder="https://instagram.com/tgfederal"
          />
        </Row>
      </SectionCard>

      {/* ── Identifiers ── */}
      <SectionCard
        icon={Hash}
        title="Business Identifiers"
        description="Government contracting registration numbers"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Field
            label="UEI"
            name="company.identifiers.uei"
            value={company.identifiers.uei}
            onChange={handleChange}
            placeholder="Unique Entity ID"
          />
          <Field
            label="CAGE"
            name="company.identifiers.cage"
            value={company.identifiers.cage}
            onChange={handleChange}
            placeholder="CAGE Code"
          />
          <Field
            label="NAICS"
            name="company.identifiers.naics"
            value={company.identifiers.naics}
            onChange={handleChange}
            placeholder="NAICS Code"
          />
        </div>
      </SectionCard>

      {/* Save button */}
      <div className="flex justify-end">
        <Button
          size="lg"
          onClick={handleSave}
          disabled={updateMutation.isPending}
          className="min-w-40"
        >
          {updateMutation.isPending ? "Saving…" : "Save All Settings"}
        </Button>
      </div>

      {/* ── Notifications ── */}
      <Card className="border-border/50 shadow-sm">
        <CardHeader className="border-b border-border/50 bg-muted/20">
          <CardTitle className="flex items-center gap-2 text-base">
            <Bell className="w-4 h-4 text-primary" /> Notification Settings
          </CardTitle>
          <CardDescription className="text-xs">
            Choose which events trigger admin notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="p-5">
          <div className="space-y-1">
            {NOTIFICATION_OPTIONS.map((opt, idx) => (
              <div key={opt.key}>
                <div className="flex items-center justify-between py-3.5">
                  <div className="pr-6">
                    <p className="text-sm font-medium">{opt.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {opt.description}
                    </p>
                  </div>
                  <Switch
                    checked={notifications[opt.key]}
                    onCheckedChange={() => toggleNotification(opt.key)}
                  />
                </div>
                {idx < NOTIFICATION_OPTIONS.length - 1 && (
                  <Separator className="bg-border/40" />
                )}
              </div>
            ))}
          </div>
          <Button className="mt-5 w-full" onClick={saveNotifications}>
            Save Notification Preferences
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
