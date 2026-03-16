export default function SubmitResumeLoading() {
  return (
    <div className="min-h-screen bg-surface animate-pulse">
      <div className="bg-eo-navy pt-32 pb-16 lg:pt-44 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-5 w-28 bg-white/10 rounded-full mb-6" />
          <div className="h-10 w-2/3 bg-white/10 rounded mb-4" />
          <div className="h-5 w-1/2 bg-white/10 rounded" />
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <div className="h-12 w-full bg-border-subtle rounded-lg" />
        <div className="h-12 w-full bg-border-subtle rounded-lg" />
        <div className="h-12 w-full bg-border-subtle rounded-lg" />
        <div className="h-32 w-full bg-border-subtle rounded-lg" />
        <div className="h-12 w-40 bg-border-subtle rounded-lg" />
      </div>
    </div>
  );
}
