"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-4">
          Error
        </p>
        <h1 className="text-4xl font-extrabold text-eo-navy mb-4">
          Something Went Wrong
        </h1>
        <p className="text-gray-500 leading-relaxed mb-8">
          An unexpected error occurred. Please try again or contact us if the
          problem persists.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-eo-navy text-white font-bold text-sm hover:bg-eo-blue transition-colors shadow-md"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
