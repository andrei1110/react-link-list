import { isLoggedIn } from "@/lib/auth";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function LadingHeader({}) {
  return (
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
        <Link
          href="/"
          className="text-xl font-bold tracking-tight flex items-center gap-2 group"
        >
          <Image
            width={40}
            height={40}
            src="/transparent-konn-logo.png"
            alt="Konn Logo"
            className="w-8 h-8 object-contain group-hover:scale-105 transition mr-4"
          />
          <span className="text-brand">Konn</span>
        </Link>

        <nav>
          {!isLoggedIn ? (
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
  );
}
