export default function CapabilityStatementLoading() {
  return (
    <div className="min-h-screen bg-surface animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-eo-navy pt-32 pb-16 lg:pt-44 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-6 w-44 bg-white/10 rounded-full mb-6" />
          <div className="h-12 w-3/4 bg-white/10 rounded mb-6" />
          <div className="h-5 w-1/2 bg-white/10 rounded" />
        </div>
      </div>
      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          <div className="h-8 w-48 bg-border-default rounded" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-32 bg-border-subtle rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
