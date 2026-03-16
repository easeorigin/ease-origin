export default function PrivacyPolicyLoading() {
  return (
    <div className="min-h-screen bg-surface animate-pulse">
      <div className="bg-eo-navy pt-32 pb-16 lg:pt-44 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-10 w-1/2 bg-white/10 rounded mb-4" />
          <div className="h-5 w-1/3 bg-white/10 rounded" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-4 w-full bg-border-subtle rounded" />
        ))}
      </div>
    </div>
  );
}
