import { isLoggedIn } from "@/lib/auth";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { FinalCTA } from "@/components/landing/FinalCTA";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

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
        <header
          className="
    fixed top-0 left-0 right-0 z-50
    bg-white/5
    backdrop-blur-xl
    border-b border-white/10
    supports-[backdrop-filter]:bg-white/5
    supports-[backdrop-filter]:backdrop-blur-2xl
    shadow-[0_8px_32px_rgba(0,0,0,0.25)]
  "
        >
          <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="text-brand">Konn</span>
            </Link>

            <nav>
              {!loggedIn ? (
                <div className="flex gap-4 items-center">
                  <Button href="/login" variant="outline">
                    Entrar
                  </Button>

                  <Button
                    href="/signup"
                    className="
                      px-4 py-2 rounded-lg 
                      bg-brand hover:bg-brandHover 
                      transition
                    "
                    variant="link"
                  >
                    Criar conta
                  </Button>
                </div>
              ) : (
                <Button
                  href="/dashboard"
                  className="opacity-80 hover:opacity-100 hover:underline"
                  variant="outline"
                >
                  Ir para Dashboard
                </Button>
              )}
            </nav>
          </div>
        </header>

        {/* SECTIONS */}
        <Hero loggedIn={loggedIn} />
        <Features />
        <FinalCTA loggedIn={loggedIn} />

        {/* FOOTER */}
        <footer className="opacity-50 text-center py-8 text-sm">
          Tecnologia Smartol — {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
