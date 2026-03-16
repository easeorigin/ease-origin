export default function CaseStudiesLoading() {
  return (
    <div className="min-h-screen bg-surface animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-eo-navy pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-6 w-32 bg-white/10 rounded-full mb-6" />
          <div className="h-12 w-1/2 bg-white/10 rounded mb-5" />
          <div className="h-5 w-2/3 bg-white/10 rounded" />
        </div>
      </div>
      {/* Grid skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center gap-2 mb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-9 w-24 bg-border-subtle rounded-full" />
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-48 bg-border-subtle rounded-2xl" />
              <div className="h-5 w-3/4 bg-border-subtle rounded" />
              <div className="h-4 w-full bg-border-subtle rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
