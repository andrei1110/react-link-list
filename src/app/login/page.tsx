export const metadata = {
  title: "Login | Konn",
};

import LoginForm from "./LoginForm";
import LadingHeader from "@/components/lading-header/LandingHeader";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: "url('/lading-background.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/95" />

      <div className="absolute top-0 left-0 w-full z-20">
        <LadingHeader />
      </div>

      <div className="relative z-10 w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
