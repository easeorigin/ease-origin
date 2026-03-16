export default function LoginLoading() {
  return (
    <div className="min-h-screen bg-surface animate-pulse flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <div className="h-10 w-40 bg-border-subtle rounded mx-auto mb-8" />
        <div className="space-y-4">
          <div className="h-12 w-full bg-border-subtle rounded-lg" />
          <div className="h-12 w-full bg-border-subtle rounded-lg" />
          <div className="h-12 w-full bg-border-subtle rounded-lg mt-4" />
        </div>
      </div>
    </div>
  );
}
