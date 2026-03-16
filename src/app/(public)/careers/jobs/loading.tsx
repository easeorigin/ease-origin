export default function JobsLoading() {
  return (
    <div className="min-h-screen bg-surface animate-pulse">
      <div className="bg-eo-navy pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-5 w-28 bg-white/10 rounded-full mb-6" />
          <div className="h-10 w-2/3 bg-white/10 rounded mb-4" />
          <div className="h-5 w-1/2 bg-white/10 rounded" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="h-12 w-full bg-border-subtle rounded-lg mb-8" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-52 bg-border-subtle rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
