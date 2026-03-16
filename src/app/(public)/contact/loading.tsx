export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-surface animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-eo-navy pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-6 w-28 bg-white/10 rounded-full mb-6" />
          <div className="h-12 w-1/2 bg-white/10 rounded mb-6" />
          <div className="h-5 w-2/3 bg-white/10 rounded" />
        </div>
      </div>
      {/* Contact form skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-8 w-48 bg-border-default rounded" />
            <div className="h-4 w-full bg-border-subtle rounded" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-border-subtle" />
                <div className="space-y-2 flex-1">
                  <div className="h-3 w-16 bg-border-subtle rounded" />
                  <div className="h-4 w-3/4 bg-border-subtle rounded" />
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-3">
            <div className="bg-surface rounded-2xl border border-border-subtle p-8 space-y-5">
              <div className="h-7 w-48 bg-border-default rounded" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="h-12 bg-border-subtle rounded-lg" />
                <div className="h-12 bg-border-subtle rounded-lg" />
              </div>
              <div className="h-12 bg-border-subtle rounded-lg" />
              <div className="h-12 bg-border-subtle rounded-lg" />
              <div className="h-32 bg-border-subtle rounded-lg" />
              <div className="h-12 w-40 bg-border-default rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
