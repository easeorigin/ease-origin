export default function JobDetailLoading() {
  return (
    <div className="min-h-screen bg-surface animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-eo-navy pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-40 bg-white/10 rounded mb-8" />
          <div className="h-5 w-28 bg-white/10 rounded-full mb-5" />
          <div className="h-12 w-3/4 bg-white/10 rounded mb-6" />
          <div className="flex gap-3">
            <div className="h-8 w-28 bg-white/10 rounded-lg" />
            <div className="h-8 w-24 bg-white/10 rounded-lg" />
          </div>
        </div>
      </div>
      {/* Content skeleton */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-3">
            <div className="h-6 w-32 bg-border-default rounded" />
            <div className="h-4 w-full bg-border-subtle rounded" />
            <div className="h-4 w-5/6 bg-border-subtle rounded" />
          </div>
          <div className="space-y-3">
            <div className="h-6 w-40 bg-border-default rounded" />
            <div className="h-4 w-full bg-border-subtle rounded" />
            <div className="h-4 w-4/6 bg-border-subtle rounded" />
          </div>
        </div>
        <div className="h-64 bg-border-subtle rounded-2xl" />
      </div>
    </div>
  );
}
