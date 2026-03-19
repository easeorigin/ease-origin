import { useState, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ChevronRight,
  ChevronLeft,
  Plus,
  Trash2,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  AlertCircle,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ResumeUploadZone } from "./uploadZone";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Experience {
  id: string;
  roleTitle: string;
  employer: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  currentRole: boolean;
  description: string;
  technologies: string;
}

interface Education {
  id: string;
  degree: string;
  courseOfStudy: string;
  school: string;
  specialization: string;
  startDate: string;
  endDate: string;
  status: string;
}

interface AppData {
  // Step 1
  fullName: string;
  email: string;
  phone: string;
  country: string;
  currentLocation: string;
  willingToRelocate: boolean;
  // Step 2
  summary: string;
  skills: string[];
  // Step 3
  experiences: Experience[];
  // Step 4
  education: Education[];
  // Step 5
  noticePeriod: string;
  workAuthorization: string;
  clearance: string;
  // Step 6
  resumeFile: File | null;
  coverLetterFile: File | null;
  resumeUrl: string;
  coverLetterUrl: string;
  linkedin: string;
  portfolio: string;
  github: string;
  // Step 7
  confirmAccurate: boolean;
  consentStorage: boolean;
}

function makeId() {
  return Math.random().toString(36).slice(2);
}

function emptyExp(): Experience {
  return {
    id: makeId(),
    roleTitle: "",
    employer: "",
    employmentType: "Full-time",
    startDate: "",
    endDate: "",
    currentRole: false,
    description: "",
    technologies: "",
  };
}
function emptyEdu(): Education {
  return {
    id: makeId(),
    degree: "Bachelor",
    courseOfStudy: "",
    school: "",
    specialization: "",
    startDate: "",
    endDate: "",
    status: "Completed",
  };
}

const initialData: AppData = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  currentLocation: "",
  willingToRelocate: false,
  summary: "",
  skills: [],
  experiences: [emptyExp()],
  education: [emptyEdu()],
  noticePeriod: "",
  workAuthorization: "",
  clearance: "",
  resumeFile: null,
  coverLetterFile: null,
  resumeUrl: "",
  coverLetterUrl: "",
  linkedin: "",
  portfolio: "",
  github: "",
  confirmAccurate: false,
  consentStorage: false,
};

const STEPS = [
  "Personal Information",
  "Professional Summary & Skills",
  "Work Experience",
  "Education",
  "Availability & Eligibility",
  "Resume & Links",
  "Review & Submit",
];

// ─── Shared field styles ──────────────────────────────────────────────────────

const inputBase =
  "w-full px-3.5 py-3 rounded-lg border text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all";
const inputOk = "border-gray-200 focus:border-eo-blue focus:ring-eo-blue/20";
const inputErr = "border-red-400 focus:border-red-400 focus:ring-red-100";
const labelCls =
  "block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5";
const selectCls = cn(inputBase, inputOk, "appearance-none cursor-pointer");

function Err({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
      <AlertCircle className="h-3 w-3 shrink-0" />
      {msg}
    </p>
  );
}

// ─── Step 1: Personal Info ────────────────────────────────────────────────────

function Step1({
  data,
  set,
  errors,
}: {
  data: AppData;
  set: (k: keyof AppData, v: AppData[keyof AppData]) => void;
  errors: Partial<Record<keyof AppData, string>>;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input
            className={cn(inputBase, errors.fullName ? inputErr : inputOk)}
            placeholder="Jane Smith"
            value={data.fullName}
            onChange={(e) => set("fullName", e.target.value)}
          />
          <Err msg={errors.fullName} />
        </div>
        <div>
          <label className={labelCls}>Email Address *</label>
          <input
            type="email"
            className={cn(inputBase, errors.email ? inputErr : inputOk)}
            placeholder="jane@example.com"
            value={data.email}
            onChange={(e) => set("email", e.target.value)}
          />
          <Err msg={errors.email} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Phone Number *</label>
          <input
            className={cn(inputBase, errors.phone ? inputErr : inputOk)}
            placeholder="+1 (555) 000-0000"
            value={data.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
          <Err msg={errors.phone} />
        </div>
        <div>
          <label className={labelCls}>Country *</label>
          <div className="relative">
            <select
              className={cn(selectCls, errors.country ? inputErr : "")}
              value={data.country}
              onChange={(e) => set("country", e.target.value)}
            >
              <option value="">Select country</option>
              {[
                "United States",
                "Canada",
                "UK",
                "Nigeria",
                "India",
                "Other",
              ].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <SelArrow />
          </div>
          <Err msg={errors.country} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Current Location</label>
        <input
          className={cn(inputBase, inputOk)}
          placeholder="Arlington, VA"
          value={data.currentLocation}
          onChange={(e) => set("currentLocation", e.target.value)}
        />
      </div>
      <label className="flex items-center gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border-gray-300 accent-eo-blue"
          checked={data.willingToRelocate}
          onChange={(e) => set("willingToRelocate", e.target.checked)}
        />
        <span className="text-sm text-gray-700">Willing to Relocate</span>
      </label>
    </div>
  );
}

function SelArrow() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
      <svg
        className="h-4 w-4 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

// ─── Step 2: Summary & Skills ─────────────────────────────────────────────────

function SkillInput({
  skills,
  onChange,
}: {
  skills: string[];
  onChange: (s: string[]) => void;
}) {
  const [input, setInput] = useState("");
  const addSkill = () => {
    const s = input.trim();
    if (s && !skills.includes(s)) {
      onChange([...skills, s]);
    }
    setInput("");
  };
  return (
    <div>
      <label className={labelCls}>Skills</label>
      <div className="flex flex-wrap gap-2 mb-2 min-h-10">
        {skills.map((sk) => (
          <span
            key={sk}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 text-eo-blue text-xs font-semibold rounded-full"
          >
            {sk}
            <button
              type="button"
              onClick={() => onChange(skills.filter((x) => x !== sk))}
              className="hover:text-red-500 transition-colors"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className={cn(inputBase, inputOk, "grow")}
          placeholder="e.g. AWS, Python, Cybersecurity"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addSkill();
            }
          }}
        />
        <button
          type="button"
          onClick={addSkill}
          className="px-4 py-2 rounded-lg bg-eo-navy text-white text-sm font-bold hover:bg-eo-blue transition-colors shrink-0"
        >
          <Tag className="h-4 w-4" />
        </button>
      </div>
      <p className="text-xs text-gray-400 mt-1.5">
        Press Enter or click + to add a skill
      </p>
    </div>
  );
}

function Step2({
  data,
  set,
}: {
  data: AppData;
  set: (k: keyof AppData, v: AppData[keyof AppData]) => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <label className={labelCls}>Professional Summary</label>
        <textarea
          rows={5}
          className={cn(inputBase, inputOk, "resize-none")}
          placeholder="Briefly describe your professional background, key strengths, and what makes you an ideal candidate..."
          value={data.summary}
          onChange={(e) => set("summary", e.target.value)}
        />
      </div>
      <SkillInput skills={data.skills} onChange={(s) => set("skills", s)} />
    </div>
  );
}

// ─── Step 3: Work Experience ──────────────────────────────────────────────────

function ExperienceEntry({
  exp,
  onChange,
  onDelete,
  index,
}: {
  exp: Experience;
  onChange: (e: Experience) => void;
  onDelete: () => void;
  index: number;
}) {
  const set = (k: keyof Experience, v: Experience[keyof Experience]) =>
    onChange({ ...exp, [k]: v });
  return (
    <div className="bg-slate-50 rounded-xl border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-bold text-eo-navy">
          Experience #{index + 1}
        </h4>
        {index > 0 && (
          <button
            type="button"
            onClick={onDelete}
            className="text-gray-400 hover:text-red-500 transition-colors p-1"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Role Title *</label>
            <input
              className={cn(inputBase, inputOk)}
              placeholder="Senior Cloud Engineer"
              value={exp.roleTitle}
              onChange={(e) => set("roleTitle", e.target.value)}
            />
          </div>
          <div>
            <label className={labelCls}>Employer *</label>
            <input
              className={cn(inputBase, inputOk)}
              placeholder="Acme Corp"
              value={exp.employer}
              onChange={(e) => set("employer", e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className={labelCls}>Employment Type</label>
          <div className="relative">
            <select
              className={selectCls}
              value={exp.employmentType}
              onChange={(e) => set("employmentType", e.target.value)}
            >
              {["Full-time", "Contract", "Freelance", "Internship"].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <SelArrow />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Start Date *</label>
            <input
              type="month"
              className={cn(inputBase, inputOk)}
              value={exp.startDate}
              onChange={(e) => set("startDate", e.target.value)}
            />
          </div>
          {!exp.currentRole && (
            <div>
              <label className={labelCls}>End Date</label>
              <input
                type="month"
                className={cn(inputBase, inputOk)}
                value={exp.endDate}
                onChange={(e) => set("endDate", e.target.value)}
              />
            </div>
          )}
        </div>
        <label className="flex items-center gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-gray-300 accent-eo-blue"
            checked={exp.currentRole}
            onChange={(e) => set("currentRole", e.target.checked)}
          />
          <span className="text-sm text-gray-700">I currently work here</span>
        </label>
        <div>
          <label className={labelCls}>Description</label>
          <textarea
            rows={3}
            className={cn(inputBase, inputOk, "resize-none")}
            placeholder="Describe your responsibilities and achievements..."
            value={exp.description}
            onChange={(e) => set("description", e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls}>
            Technologies Used{" "}
            <span className="text-gray-400 normal-case font-normal">
              (optional)
            </span>
          </label>
          <input
            className={cn(inputBase, inputOk)}
            placeholder="AWS, Kubernetes, Python..."
            value={exp.technologies}
            onChange={(e) => set("technologies", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

function Step3({
  data,
  set,
  errors,
}: {
  data: AppData;
  set: (k: keyof AppData, v: AppData[keyof AppData]) => void;
  errors: Partial<Record<keyof AppData, string>>;
}) {
  const update = (id: string, e: Experience) =>
    set(
      "experiences",
      (data.experiences as Experience[]).map((x) => (x.id === id ? e : x)),
    );
  const remove = (id: string) =>
    set(
      "experiences",
      (data.experiences as Experience[]).filter((x) => x.id !== id),
    );
  const add = () =>
    set("experiences", [...(data.experiences as Experience[]), emptyExp()]);
  return (
    <div className="flex flex-col gap-4">
      {(data.experiences as Experience[]).map((exp, i) => (
        <ExperienceEntry
          key={exp.id}
          exp={exp}
          index={i}
          onChange={(e) => update(exp.id, e)}
          onDelete={() => remove(exp.id)}
        />
      ))}
      <Err msg={errors.experiences} />
      <button
        type="button"
        onClick={add}
        className="flex items-center gap-2 px-4 py-3 rounded-lg border-2 border-dashed border-gray-300 text-sm font-semibold text-gray-500 hover:border-eo-blue hover:text-eo-blue transition-colors"
      >
        <Plus className="h-4 w-4" /> Add Another Experience
      </button>
    </div>
  );
}

// ─── Step 4: Education ────────────────────────────────────────────────────────

function EducationEntry({
  edu,
  onChange,
  onDelete,
  index,
}: {
  edu: Education;
  onChange: (e: Education) => void;
  onDelete: () => void;
  index: number;
}) {
  const set = (k: keyof Education, v: Education[keyof Education]) =>
    onChange({ ...edu, [k]: v });
  return (
    <div className="bg-slate-50 rounded-xl border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-bold text-eo-navy">
          Education #{index + 1}
        </h4>
        {index > 0 && (
          <button
            type="button"
            onClick={onDelete}
            className="text-gray-400 hover:text-red-500 transition-colors p-1"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Degree *</label>
            <div className="relative">
              <select
                className={selectCls}
                value={edu.degree}
                onChange={(e) => set("degree", e.target.value)}
              >
                {["Bachelor", "Master", "PhD", "Diploma", "Other"].map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
              <SelArrow />
            </div>
          </div>
          <div>
            <label className={labelCls}>Graduation Status</label>
            <div className="relative">
              <select
                className={selectCls}
                value={edu.status}
                onChange={(e) => set("status", e.target.value)}
              >
                {["Completed", "In Progress"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <SelArrow />
            </div>
          </div>
        </div>
        <div>
          <label className={labelCls}>School / College *</label>
          <input
            className={cn(inputBase, inputOk)}
            placeholder="University of Maryland"
            value={edu.school}
            onChange={(e) => set("school", e.target.value)}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Course of Study *</label>
            <input
              className={cn(inputBase, inputOk)}
              placeholder="Computer Science"
              value={edu.courseOfStudy}
              onChange={(e) => set("courseOfStudy", e.target.value)}
            />
          </div>
          <div>
            <label className={labelCls}>
              Specialization{" "}
              <span className="text-gray-400 font-normal normal-case">
                (optional)
              </span>
            </label>
            <input
              className={cn(inputBase, inputOk)}
              placeholder="Cybersecurity"
              value={edu.specialization}
              onChange={(e) => set("specialization", e.target.value)}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Start Date</label>
            <input
              type="month"
              className={cn(inputBase, inputOk)}
              value={edu.startDate}
              onChange={(e) => set("startDate", e.target.value)}
            />
          </div>
          <div>
            <label className={labelCls}>End Date</label>
            <input
              type="month"
              className={cn(inputBase, inputOk)}
              value={edu.endDate}
              onChange={(e) => set("endDate", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Step4({
  data,
  set,
}: {
  data: AppData;
  set: (k: keyof AppData, v: AppData[keyof AppData]) => void;
}) {
  const update = (id: string, e: Education) =>
    set(
      "education",
      (data.education as Education[]).map((x) => (x.id === id ? e : x)),
    );
  const remove = (id: string) =>
    set(
      "education",
      (data.education as Education[]).filter((x) => x.id !== id),
    );
  const add = () =>
    set("education", [...(data.education as Education[]), emptyEdu()]);
  return (
    <div className="flex flex-col gap-4">
      {(data.education as Education[]).map((edu, i) => (
        <EducationEntry
          key={edu.id}
          edu={edu}
          index={i}
          onChange={(e) => update(edu.id, e)}
          onDelete={() => remove(edu.id)}
        />
      ))}
      <button
        type="button"
        onClick={add}
        className="flex items-center gap-2 px-4 py-3 rounded-lg border-2 border-dashed border-gray-300 text-sm font-semibold text-gray-500 hover:border-eo-blue hover:text-eo-blue transition-colors"
      >
        <Plus className="h-4 w-4" /> Add Another Education
      </button>
    </div>
  );
}

// ─── Step 5: Availability & Eligibility ──────────────────────────────────────

function Step5({
  data,
  set,
  errors,
}: {
  data: AppData;
  set: (k: keyof AppData, v: AppData[keyof AppData]) => void;
  errors: Partial<Record<keyof AppData, string>>;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <label className={labelCls}>Notice Period *</label>
        <div className="relative">
          <select
            className={cn(selectCls, errors.noticePeriod ? inputErr : "")}
            value={data.noticePeriod}
            onChange={(e) => set("noticePeriod", e.target.value)}
          >
            <option value="">Select notice period</option>
            {[
              "Immediately Available",
              "2 Weeks",
              "1 Month",
              "3 Months",
              "Other",
            ].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
          <SelArrow />
        </div>
        <Err msg={errors.noticePeriod} />
      </div>
      <div>
        <label className={labelCls}>Work Authorization *</label>
        <div className="relative">
          <select
            className={cn(selectCls, errors.workAuthorization ? inputErr : "")}
            value={data.workAuthorization}
            onChange={(e) => set("workAuthorization", e.target.value)}
          >
            <option value="">Select authorization</option>
            {["US Citizen", "Permanent Resident", "Work Visa", "Other"].map(
              (a) => (
                <option key={a}>{a}</option>
              ),
            )}
          </select>
          <SelArrow />
        </div>
        <Err msg={errors.workAuthorization} />
      </div>
      <div>
        <label className={labelCls}>Security Clearance</label>
        <div className="relative">
          <select
            className={selectCls}
            value={data.clearance}
            onChange={(e) => set("clearance", e.target.value)}
          >
            <option value="">Select clearance level</option>
            {["None", "Secret", "Top Secret", "TS/SCI"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <SelArrow />
        </div>
      </div>
    </div>
  );
}

// ─── Step 6: Resume & Links ───────────────────────────────────────────────────

function Step6({
  data,
  set,
  errors,
}: {
  data: AppData;
  set: (k: keyof AppData, v: AppData[keyof AppData]) => void;
  errors: Partial<Record<keyof AppData, string>>;
}) {
  type UploadState = "idle" | "uploading" | "success" | "error";
  const [uploadState, setUploadState] = useState<UploadState>("idle");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = async (
    type: "resume" | "coverLetter",
    file: File | null,
  ) => {
    if (!file) return;

    // store file for UI
    set(type === "resume" ? "resumeFile" : "coverLetterFile", file);

    const formData = new FormData();
    formData.append("file", file);
    setUploadState("uploading");
    setUploadError(null);
    setUploadedFileName(file.name);
    setUploadProgress(10); //

    try {
      const res = await fetch(`/api/upload?type=${type}`, {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      // store URL for submission
      set(
        type === "resume" ? "resumeUrl" : "coverLetterUrl",
        result.secure_url,
      );
    } catch (err) {
      console.error(`${type} upload failed`, err);
    }
  };

  const handleClearFile = useCallback(
    (key: "resumeFile" | "coverLetterFile") => {
      setUploadState("idle");
      setUploadedFileName("");
      setUploadError(null);
      set(key, null); // Clear the File object
    },
    [set],
  );

  return (
    <div className="flex flex-col gap-5">
      <div>
        <ResumeUploadZone
          label="Resume/CV"
          uploadState={uploadState}
          uploadProgress={uploadProgress}
          uploadError={uploadError}
          uploadedFileName={uploadedFileName}
          hasError={!!(errors.resumeUrl || uploadError)}
          onFile={(file) => handleFileChange("resume", file)}
          onClear={() => handleClearFile("resumeFile")}
        />
        {errors.resumeUrl && (
          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="h-3 w-3 shrink-0" /> {errors.resumeUrl}
          </p>
        )}
      </div>
      <div>
        <ResumeUploadZone
          label="Cover Letter"
          uploadState={uploadState}
          uploadProgress={uploadProgress}
          uploadError={uploadError}
          uploadedFileName={uploadedFileName}
          hasError={!!(errors.coverLetterUrl || uploadError)}
          onFile={(file) => handleFileChange("coverLetter", file)}
          onClear={() => handleClearFile("coverLetterFile")}
        />
        {errors.coverLetterUrl && (
          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="h-3 w-3 shrink-0" /> {errors.coverLetterUrl}
          </p>
        )}
      </div>
      <div className="pt-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Professional Links
        </p>
        <div className="flex flex-col gap-4">
          <div>
            <label className={labelCls}>LinkedIn URL</label>
            <input
              className={cn(inputBase, inputOk)}
              placeholder="https://linkedin.com/in/your-profile"
              value={data.linkedin}
              onChange={(e) => set("linkedin", e.target.value)}
            />
          </div>
          <div>
            <label className={labelCls}>Portfolio Website</label>
            <input
              className={cn(inputBase, inputOk)}
              placeholder="https://yourportfolio.com"
              value={data.portfolio}
              onChange={(e) => set("portfolio", e.target.value)}
            />
          </div>
          <div>
            <label className={labelCls}>
              GitHub{" "}
              <span className="text-gray-400 font-normal normal-case">
                (optional)
              </span>
            </label>
            <input
              className={cn(inputBase, inputOk)}
              placeholder="https://github.com/username"
              value={data.github}
              onChange={(e) => set("github", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Step 7: Review & Submit ──────────────────────────────────────────────────

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
        {label}
      </span>
      <span className="text-sm text-eo-navy mt-0.5 leading-snug">
        {value || <span className="text-gray-300 italic">—</span>}
      </span>
    </div>
  );
}

function Step7({
  data,
  set,
  errors,
}: {
  data: AppData;
  set: (k: keyof AppData, v: AppData[keyof AppData]) => void;
  errors: Partial<Record<keyof AppData, string>>;
}) {
  const exps = data.experiences as Experience[];
  const edus = data.education as Education[];
  return (
    <div className="flex flex-col gap-6">
      {/* Summary preview */}
      <div className="bg-slate-50 rounded-2xl border border-gray-100 p-6 flex flex-col gap-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-eo-gold mb-3">
            Personal
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <ReviewRow label="Name" value={data.fullName} />
            <ReviewRow label="Email" value={data.email} />
            <ReviewRow label="Phone" value={data.phone} />
            <ReviewRow label="Country" value={data.country} />
            <ReviewRow label="Location" value={data.currentLocation} />
            <ReviewRow
              label="Willing to Relocate"
              value={data.willingToRelocate ? "Yes" : "No"}
            />
          </div>
        </div>
        {data.skills.length > 0 && (
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-eo-gold mb-3">
              Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {(data.skills as string[]).map((s, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-blue-50 border border-blue-100 text-eo-blue text-xs font-semibold rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-eo-gold mb-3">
            Work Experience
          </p>
          {exps
            .filter((e) => e.roleTitle)
            .map((e, i) => (
              <div key={i} className="text-sm text-eo-navy mb-1">
                <strong>{e.roleTitle}</strong> at {e.employer}
                {e.currentRole ? " · Current" : ""}
              </div>
            ))}
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-eo-gold mb-3">
            Education
          </p>
          {edus
            .filter((e) => e.school)
            .map((e, i) => (
              <div key={i} className="text-sm text-eo-navy mb-1">
                <strong>{e.degree}</strong> in {e.courseOfStudy} · {e.school}
              </div>
            ))}
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-eo-gold mb-3">
            Eligibility
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            <ReviewRow label="Notice Period" value={data.noticePeriod} />
            <ReviewRow
              label="Work Authorization"
              value={data.workAuthorization}
            />
            <ReviewRow label="Clearance" value={data.clearance || "None"} />
          </div>
        </div>
        {data.resumeFile && (
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-eo-gold mb-2">
              Resume
            </p>
            <p className="text-sm text-eo-navy">
              {(data.resumeFile as File).name}
            </p>
          </div>
        )}
      </div>

      {/* Agreements */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
          Agreement
        </p>
        {[
          {
            key: "confirmAccurate" as keyof AppData,
            label:
              "I confirm that all information provided is accurate and complete.",
          },
          {
            key: "consentStorage" as keyof AppData,
            label:
              "I consent to EaseOrigin storing my information for recruitment purposes.",
          },
        ].map(({ key, label }) => (
          <label key={key} className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 mt-0.5 rounded border-gray-300 bg-eo-blue shrink-0"
              checked={data[key] as boolean}
              onChange={(e) => set(key, e.target.checked)}
            />
            <span className="text-sm text-gray-700 leading-snug">{label}</span>
          </label>
        ))}
        <Err msg={errors.confirmAccurate || errors.consentStorage} />
      </div>
    </div>
  );
}

// ─── Validation ───────────────────────────────────────────────────────────────

function validate(
  step: number,
  data: AppData,
): Partial<Record<keyof AppData, string>> {
  const err: Partial<Record<keyof AppData, string>> = {};
  if (step === 1) {
    if (!data.fullName.trim()) err.fullName = "Full name is required.";
    if (!data.email.trim()) err.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      err.email = "Enter a valid email.";
    if (!data.phone.trim()) err.phone = "Phone is required.";
    if (!data.country) err.country = "Country is required.";
  }
  if (step === 3) {
    const exps = data.experiences as Experience[];
    if (exps.length === 0 || exps.every((e) => !e.roleTitle.trim())) {
      err.experiences = "Please add at least one experience.";
    }
  }
  if (step === 5) {
    if (!data.noticePeriod) err.noticePeriod = "Please select a notice period.";
    if (!data.workAuthorization)
      err.workAuthorization = "Work authorization is required.";
  }
  if (step === 6) {
    if (!data.resumeFile) err.resumeFile = "Please upload your resume.";
  }
  if (step === 7) {
    if (!data.confirmAccurate)
      err.confirmAccurate = "Please agree to the terms before submitting.";
    if (!data.consentStorage)
      err.consentStorage = "Please agree to the terms before submitting.";
  }
  return err;
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────

function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span className="font-semibold text-eo-navy">
          Step {step} of {total}
        </span>
        <span>{STEPS[step - 1]}</span>
      </div>
      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-eo-gold rounded-full"
          animate={{ width: `${(step / total) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      {/* Step dots */}
      <div className="flex justify-between mt-1">
        {STEPS.map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-5 h-5 rounded-full text-[9px] font-bold flex items-center justify-center transition-all",
              i + 1 < step
                ? "bg-eo-gold text-eo-navy"
                : i + 1 === step
                  ? "bg-eo-navy text-white ring-2 ring-eo-navy ring-offset-2"
                  : "bg-gray-100 text-gray-400",
            )}
          >
            {i + 1 < step ? <CheckCircle2 className="h-3 w-3" /> : i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Success Screen ───────────────────────────────────────────────────────────

function SuccessScreen({
  jobTitle,
  onClose,
}: {
  jobTitle: string;
  onClose: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6 grow gap-5">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-20 h-20 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center"
      >
        <CheckCircle2 className="h-10 w-10 text-green-500" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-2xl font-extrabold text-eo-navy mb-3">
          Application Submitted Successfully!
        </h2>
        <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">
          Thank you for applying for{" "}
          <strong className="text-eo-navy">{jobTitle}</strong>. Our team will
          review your application and contact you if your qualifications match
          our needs.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-3 mt-4"
      >
        <Link href="/careers">
          <span
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-eo-navy text-white font-bold text-sm hover:bg-eo-blue transition-colors cursor-pointer"
          >
            Return to Careers
          </span>
        </Link>
        <Link href="/careers/jobs">
          <span
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-eo-navy text-eo-navy font-bold text-sm hover:bg-eo-navy hover:text-white transition-colors cursor-pointer"
          >
            View Other Jobs <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </motion.div>
    </div>
  );
}

// ─── Main Drawer ──────────────────────────────────────────────────────────────

interface ApplicationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export function ApplicationDrawer({
  isOpen,
  onClose,
  jobTitle,
}: ApplicationDrawerProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<AppData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof AppData, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const TOTAL = STEPS.length;

  const setField = (k: keyof AppData, v: AppData[keyof AppData]) =>
    setData((d) => ({ ...d, [k]: v }));

  const scrollTop = () => {
    setTimeout(
      () => scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" }),
      50,
    );
  };

  const next = () => {
    const e = validate(step, data);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    if (step < TOTAL) {
      setStep((s) => s + 1);
      scrollTop();
    }
  };

  const back = () => {
    if (step > 1) {
      setStep((s) => s - 1);
      setErrors({});
      scrollTop();
    }
  };

  const submit = () => {
    const e = validate(TOTAL, data);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1400);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setData(initialData);
      setErrors({});
      setSubmitted(false);
    }, 400);
  };

  const stepProps = { data, set: setField, errors };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Drawer — slides from bottom, full width */}
          <motion.div
            key="drawer"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 35 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl flex flex-col"
            style={{ height: "100vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle bar */}
            <div className="flex justify-center pt-3 pb-1 shrink-0">
              <div className="w-10 h-1 bg-gray-200 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-start justify-between px-6 pt-3 pb-4 border-b border-gray-100 shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <Briefcase className="h-4 w-4 text-eo-gold" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-eo-gold">
                    Job Application
                  </p>
                </div>
                <h2 className="text-lg font-extrabold text-eo-navy leading-tight line-clamp-1">
                  {jobTitle}
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-xl hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors shrink-0 ml-4"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable body */}
            <div ref={scrollRef} className="grow overflow-y-auto">
              <div className="max-w-3xl mx-auto px-6 py-6">
                {submitted ? (
                  <SuccessScreen jobTitle={jobTitle} onClose={handleClose} />
                ) : (
                  <>
                    <ProgressBar step={step} total={TOTAL} />

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="text-lg font-bold text-eo-navy mb-5">
                          {STEPS[step - 1]}
                        </h3>
                        {step === 1 && <Step1 {...stepProps} />}
                        {step === 2 && <Step2 {...stepProps} />}
                        {step === 3 && <Step3 {...stepProps} />}
                        {step === 4 && <Step4 {...stepProps} />}
                        {step === 5 && <Step5 {...stepProps} />}
                        {step === 6 && <Step6 {...stepProps} />}
                        {step === 7 && <Step7 {...stepProps} />}
                      </motion.div>
                    </AnimatePresence>
                  </>
                )}
              </div>
            </div>

            {/* Footer nav */}
            {!submitted && (
              <div className="flex items-center justify-between gap-4 px-6 py-4 border-t border-gray-100 bg-white shrink-0">
                <button
                  onClick={back}
                  disabled={step === 1}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-gray-200 text-sm font-bold text-gray-600 hover:border-gray-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>

                {step < TOTAL ? (
                  <button
                    onClick={next}
                    className="inline-flex items-center gap-2 px-7 py-2.5 rounded-lg bg-eo-navy text-white text-sm font-bold hover:bg-eo-blue transition-colors shadow-sm"
                  >
                    Continue <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={submit}
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-7 py-2.5 rounded-lg bg-eo-gold text-eo-navy text-sm font-bold hover:bg-yellow-400 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <span className="h-4 w-4 border-2 border-eo-navy/30 border-t-eo-navy rounded-full animate-spin" />{" "}
                        Submitting…
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="h-4 w-4" /> Submit Application
                      </>
                    )}
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
