export default function CareersLoading() {
  return (
    <div className="min-h-screen bg-surface animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-eo-navy pt-32 pb-16 lg:pt-44 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-6 w-36 bg-white/10 rounded-full mb-6" />
          <div className="h-12 w-2/3 bg-white/10 rounded mb-5" />
          <div className="h-5 w-1/2 bg-white/10 rounded mb-8" />
          <div className="flex gap-4">
            <div className="h-12 w-44 bg-white/10 rounded-lg" />
            <div className="h-12 w-36 bg-white/10 rounded-lg" />
          </div>
        </div>
      </div>
      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12 space-y-3">
          <div className="h-4 w-32 bg-border-subtle rounded mx-auto" />
          <div className="h-8 w-64 bg-border-default rounded mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-48 bg-border-subtle rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
