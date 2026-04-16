// components/resume-pdf-viewer.tsx
"use client";

import { memo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Worker set here — inside the client-only file
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Props {
  signedUrl: string;
  pageNumber: number;
  scale: number;
  onLoadSuccess: ({ numPages }: { numPages: number }) => void;
  onLoadError: () => void;
}

export const ResumePdfViewer = memo(function ResumePdfViewer({
  signedUrl,
  pageNumber,
  scale,
  onLoadSuccess,
  onLoadError,
}: Props) {
  return (
    <Document
      key={signedUrl}
      file={signedUrl}
      onLoadSuccess={onLoadSuccess}
      onLoadError={onLoadError}
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
  );
});