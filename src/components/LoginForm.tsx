import { useState } from "react";
import { Shield } from "lucide-react";
import LovableLogo from "./LovableLogo";
import GoogleIcon from "./GoogleIcon";
import GitHubIcon from "./GitHubIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center px-4 py-20">
      <div className="relative flex w-full max-w-[350px] flex-col items-start justify-center">
        {/* Logo */}
        <div className="mb-6">
          <LovableLogo />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold tracking-tight mb-8">Log in</h1>

        {/* Social buttons */}
        <div className="w-full space-y-3 mb-6">
          <Button
            variant="outline"
            className="w-full h-10 justify-center gap-2 text-sm font-medium"
          >
            <GoogleIcon />
            Continue with Google
          </Button>
          <Button
            variant="outline"
            className="w-full h-10 justify-center gap-2 text-sm font-medium"
          >
            <GitHubIcon />
            Continue with GitHub
          </Button>
        </div>

        {/* Divider */}
        <div className="relative w-full flex items-center mb-6">
          <div className="flex-1 h-px bg-border" />
          <span className="px-4 text-xs text-muted-foreground uppercase tracking-wider">Or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Email form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10"
            />
          </div>
          <Button type="submit" className="w-full h-10 text-sm font-medium">
            Continue
          </Button>
        </form>

        {/* Footer links */}
        <p className="mt-6 text-sm text-muted-foreground text-center w-full">
          Don't have an account?{" "}
          <a href="#" className="text-foreground underline underline-offset-2 font-medium">
            Create your account
          </a>
        </p>

        <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground w-full justify-center">
          <Shield className="w-3.5 h-3.5" />
          <span>
            SSO available on{" "}
            <a href="#" className="underline underline-offset-2">
              Business and Enterprise
            </a>{" "}
            plans
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
