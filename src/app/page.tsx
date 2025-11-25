import { isLoggedIn } from "@/lib/auth";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { FinalCTA } from "@/components/landing/FinalCTA";
import LadingHeader from "@/components/lading-header/LandingHeader";

export default async function HomePage() {
  const loggedIn = await isLoggedIn();

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: "url('/lading-background.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/95" />

      <div className="relative z-10">
        <LadingHeader />
        <Hero loggedIn={loggedIn} />
        <Features />
        <FinalCTA loggedIn={loggedIn} />

        <footer className="opacity-50 text-center py-8 text-sm">
          Tecnologia Smartol — {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
