"use client";

import { useState, useCallback, memo, useEffect } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import {
  X,
  ZoomIn,
  ZoomOut,
  Download,
  ChevronLeft,
  ChevronRight,
  FileText,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  { ssr: false }
);

const Page = dynamic(
  () => import("react-pdf").then((mod) => mod.Page),
  { ssr: false }
);

const MIN_SCALE = 0.5;
const MAX_SCALE = 2.5;
const SCALE_STEP = 0.2;

interface ResumeViewerProps {
  resumeUrl: string;
  applicantName: string;
  jobTitle?: string;
}

const ResumeViewer = memo(function ResumeViewer({
  resumeUrl,
  applicantName,
  jobTitle,
}: ResumeViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // ✅ Reset state when URL changes
  useEffect(() => {
    setLoading(true);
    setError(false);
    setPageNumber(1);
  }, [resumeUrl]);

  useEffect(() => {
  import("react-pdf").then((mod) => {
    mod.pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      window.location.href
    ).toString();
  });
}, []);

  // ✅ Global ESC handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const active = document.activeElement as HTMLElement;
        active?.blur();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const onDocumentLoadSuccess = useCallback(
    ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
      setLoading(false);
      setError(false);
    },
    []
  );

  const onDocumentLoadError = useCallback(() => {
    setLoading(false);
    setError(true);
  }, []);

  const zoomIn = () =>
    setScale((s) => Math.min(s + SCALE_STEP, MAX_SCALE));
  const zoomOut = () =>
    setScale((s) => Math.max(s - SCALE_STEP, MIN_SCALE));
  const prevPage = () =>
    setPageNumber((p) => Math.max(p - 1, 1));
  const nextPage = () =>
    setPageNumber((p) => Math.min(p + 1, numPages));

  // ✅ Better PDF validation
  const isSafePdf = (() => {
    try {
      const url = new URL(resumeUrl);
      return url.pathname.toLowerCase().endsWith(".pdf");
    } catch {
      return false;
    }
  })();

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="shrink-0 px-6 py-4 border-b border-border bg-muted/30">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground leading-tight">
              {applicantName}
            </h3>
            <p className="text-xs text-muted-foreground">{jobTitle}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto bg-muted/20 flex flex-col items-center py-6 px-4 gap-4 min-h-0">
        {!isSafePdf ? (
          <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
            <AlertCircle className="w-10 h-10 text-destructive" />
            <div>
              <p className="font-medium">Invalid file type</p>
              <p className="text-sm text-muted-foreground mt-1">
                Only PDF resumes can be previewed.
              </p>
            </div>
            <Button asChild variant="outline">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" /> Download File
              </a>
            </Button>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
            <AlertCircle className="w-10 h-10 text-destructive" />
            <div>
              <p className="font-medium">Unable to load resume</p>
              <p className="text-sm text-muted-foreground mt-1">
                Please download the file instead.
              </p>
            </div>
            <Button asChild variant="outline">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" /> Download Resume
              </a>
            </Button>
          </div>
        ) : (
          <>
            {loading && (
              <div className="flex items-center gap-2 text-muted-foreground py-8">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="text-sm">Loading resume…</span>
              </div>
            )}

            <Document
              key={resumeUrl} // ✅ critical fix
              file={resumeUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={null}
              className="flex flex-col items-center gap-4"
            >
              <Page
                key={pageNumber}
                pageNumber={pageNumber}
                scale={scale}
                renderAnnotationLayer
                renderTextLayer
                className="shadow-xl rounded-sm overflow-hidden"
              />
            </Document>
          </>
        )}
      </div>

      {/* Footer */}
      {!error && isSafePdf && (
        <div className="shrink-0 flex items-center justify-between gap-3 px-6 py-3 border-t border-border bg-card flex-wrap">
          {/* Pagination */}
          {numPages > 1 && (
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={prevPage}
                disabled={pageNumber <= 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <span className="text-xs text-muted-foreground px-1 min-w-16 text-center">
                {pageNumber} / {numPages}
              </span>

              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={nextPage}
                disabled={pageNumber >= numPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}

          {/* Zoom */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={zoomOut}
              disabled={scale <= MIN_SCALE}
            >
              <ZoomOut className="w-4 h-4" />
            </Button>

            <span className="text-xs text-muted-foreground w-12 text-center">
              {Math.round(scale * 100)}%
            </span>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={zoomIn}
              disabled={scale >= MAX_SCALE}
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
          </div>

          {/* Download */}
          <Button asChild variant="outline" size="sm">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-2" /> Download
            </a>
          </Button>
        </div>
      )}
    </div>
  );
});

interface ResumeDrawerProps {
  open: boolean;
  onClose: () => void;
  resumeUrl: string | null | undefined;
  applicantName: string;
  jobTitle?: string;
}

export function ResumeDrawer({
  open,
  onClose,
  resumeUrl,
  applicantName,
  jobTitle,
}: ResumeDrawerProps) {
  // ✅ Global ESC to close drawer
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed top-0 right-0 z-50 h-full bg-card border-l border-border shadow-2xl flex flex-col",
          "transition-transform duration-300 ease-in-out",
          "w-full sm:w-170",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card shrink-0">
          <h2 className="text-base font-semibold">Applicant Resume</h2>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Body */}
        <div className="flex-1 min-h-0 overflow-hidden">
          {open && resumeUrl ? (
            <ResumeViewer
              resumeUrl={resumeUrl}
              applicantName={applicantName}
              jobTitle={jobTitle}
            />
          ) : open && !resumeUrl ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-8">
              <FileText className="w-10 h-10 text-muted-foreground" />
              <div>
                <p className="font-medium">No resume uploaded</p>
                <p className="text-sm text-muted-foreground mt-1">
                  This applicant did not attach a resume.
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </aside>
    </>
  );
}