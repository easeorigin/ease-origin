import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, CloudUpload, FileText, Upload, X } from "lucide-react";
import { useCallback, useState } from "react";

type UploadState = "idle" | "uploading" | "success" | "error";

export function ResumeUploadZone({
  uploadState,
  uploadProgress,
  uploadError,
  uploadedFileName,
  hasError,
  onFile,
  onClear,
    label,
}: {
  uploadState: UploadState;
  uploadProgress: number;
  uploadError: string | null;
  uploadedFileName: string;
  hasError: boolean;
  onFile: (file: File) => void;
  onClear: () => void;
  label: string;
}) {
  const [dragOver, setDragOver] = useState(false);

  

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) onFile(file);
    },
    [onFile]
  );

  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
        {label} <span className="text-red-400">*</span>
      </label>

      {/* Drop zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); if (uploadState !== "uploading") setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={cn(
          "relative rounded-xl border-2 border-dashed transition-all duration-200 overflow-hidden",
          uploadState === "uploading"
            ? "border-eo-blue bg-blue-50 cursor-not-allowed"
            : uploadState === "success"
            ? "border-green-400 bg-green-50"
            : uploadState === "error" || hasError
            ? "border-red-300 bg-red-50 cursor-pointer"
            : dragOver
            ? "border-eo-blue bg-blue-50 cursor-copy"
            : "border-gray-200 bg-slate-50 hover:border-eo-blue hover:bg-blue-50/20 cursor-pointer"
        )}
      >
        {/* Hidden file input — only active when not uploading/success */}
        {uploadState !== "uploading" && (
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onFile(f);
              e.target.value = "";
            }}
          />
        )}

        <div className="p-8">
          <AnimatePresence mode="wait">

            {/* Uploading state */}
            {uploadState === "uploading" && (
              <motion.div
                key="uploading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="relative">
                  <CloudUpload className="h-10 w-10 text-eo-blue" />
                </div>
                <div className="w-full">
                  <div className="flex justify-between text-xs font-medium text-eo-blue mb-1.5">
                    <span className="truncate max-w-[70%]">{uploadedFileName}</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="h-2 w-full bg-blue-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-eo-blue rounded-full"
                      animate={{ width: `${uploadProgress}%` }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </div>
                  <p className="text-xs text-eo-blue text-center mt-2 font-medium">
                    Uploading resume…
                  </p>
                </div>
              </motion.div>
            )}

            {/* Success state */}
            {uploadState === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-green-100 border border-green-200 flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
                <div className="grow min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{uploadedFileName}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-500 shrink-0" />
                    <p className="text-xs text-green-600 font-medium">Uploaded successfully</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); onClear(); }}
                  className="p-1.5 rounded-lg hover:bg-green-100 text-gray-400 hover:text-gray-600 transition-colors shrink-0 relative z-10"
                >
                  <X className="h-4 w-4" />
                </button>
              </motion.div>
            )}

            {/* Error / Idle state */}
            {(uploadState === "idle" || uploadState === "error") && (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <Upload className={cn("h-8 w-8", dragOver ? "text-eo-blue" : uploadState === "error" ? "text-red-300" : "text-gray-300")} />
                {uploadState === "error" && uploadError ? (
                  <div>
                    <p className="text-sm font-semibold text-red-600">Upload failed</p>
                    <p className="text-xs text-red-500 mt-0.5">{uploadError} — click to try again</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Drag & drop or <span className="text-eo-blue font-semibold">browse</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">PDF, DOC, DOCX — max 4 MB</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}