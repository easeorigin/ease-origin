import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-4">
          404
        </p>
        <h1 className="text-4xl font-extrabold text-eo-navy mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-500 leading-relaxed mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-eo-navy text-white font-bold text-sm hover:bg-eo-blue transition-colors shadow-md"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-gray-200 text-eo-navy font-bold text-sm hover:border-eo-navy transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
