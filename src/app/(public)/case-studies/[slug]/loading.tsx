export default function CaseStudyLoading() {
  return (
    <div className="min-h-screen bg-surface animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-eo-navy pt-32 pb-16 lg:pt-44 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-32 bg-white/10 rounded mb-6" />
          <div className="h-6 w-24 bg-white/10 rounded-full mb-4" />
          <div className="h-12 w-3/4 bg-white/10 rounded mb-6" />
          <div className="h-5 w-2/3 bg-white/10 rounded" />
        </div>
      </div>
      {/* Content skeleton */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          <div className="h-8 w-40 bg-border-default rounded" />
          <div className="h-4 w-full bg-border-subtle rounded" />
          <div className="h-4 w-5/6 bg-border-subtle rounded" />
          <div className="h-4 w-4/6 bg-border-subtle rounded" />
        </div>
      </div>
    </div>
  );
}
