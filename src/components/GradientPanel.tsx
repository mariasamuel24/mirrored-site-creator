import { ArrowUp } from "lucide-react";

const GradientPanel = () => (
  <div className="relative hidden lg:flex h-full min-h-screen items-center justify-center overflow-hidden">
    {/* Gradient background */}
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(200,215,255,0.7) 20%, rgba(120,160,255,0.6) 40%, rgba(200,100,240,0.7) 60%, rgba(255,80,180,0.8) 75%, rgba(255,100,80,0.9) 90%, rgba(255,120,40,1) 100%)",
        }}
      />
      {/* Extra radial overlays for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.8) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 80%, rgba(255,60,100,0.4) 0%, transparent 50%)",
        }}
      />
    </div>

    {/* Chat input overlay */}
    <div className="relative z-10 w-full max-w-sm mx-auto px-6">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex items-center px-4 py-3 gap-3">
        <span className="text-sm text-foreground/80 flex-1">
          Ask Lovable to build your saas startup.
          <span className="inline-block w-px h-4 bg-foreground/40 animate-pulse ml-0.5 align-middle" />
        </span>
        <button className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
          <ArrowUp className="w-4 h-4 text-background" />
        </button>
      </div>
    </div>
  </div>
);

export default GradientPanel;
