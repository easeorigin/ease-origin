export default function SolutionsLoading() {
  return (
    <div className="min-h-screen bg-surface animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-eo-navy pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="h-6 w-40 bg-white/10 rounded-full mb-6" />
          <div className="h-12 w-1/2 bg-white/10 rounded mb-6" />
          <div className="h-5 w-2/3 bg-white/10 rounded mb-10" />
          <div className="h-14 w-44 bg-white/10 rounded-md" />
        </div>
      </div>
      {/* Grid skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-14 space-y-3">
          <div className="h-4 w-24 bg-border-subtle rounded mx-auto" />
          <div className="h-8 w-56 bg-border-default rounded mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-60 bg-border-subtle rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
