import LoginForm from "@/components/LoginForm";
import GradientPanel from "@/components/GradientPanel";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="grid h-full min-h-screen lg:grid-cols-2">
        <LoginForm />
        <GradientPanel />
      </div>
    </div>
  );
};

export default Index;
