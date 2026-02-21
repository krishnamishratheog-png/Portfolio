export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
    </div>
  );
}
