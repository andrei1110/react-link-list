"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function Hero({ loggedIn }: { loggedIn: boolean }) {
  return (
    <section className="relative overflow-hidden py-28 px-6 text-center">
      <div
        className="
      absolute inset-0 
      bg-gradient-to-b from-brand/20 to-transparent 
      opacity-40 blur-3xl 
      pointer-events-none
    "
      />

      <h1 className="relative text-5xl md:text-6xl font-bold tracking-tight cursor-default">
        Seu link único.
        <br />
        Sua identidade online.
      </h1>

      <p className="mt-6 text-lg opacity-80 max-w-xl mx-auto cursor-default">
        Crie sua página de links personalizada, estilize do seu jeito e
        compartilhe com o mundo.
      </p>

      <div className="mt-10 flex justify-center gap-4 relative z-10">
        {!loggedIn ? (
          <>
            <Button href="/signup" variant="link">
              Criar conta <ArrowRight size={18} />
            </Button>

            <Button href="/login" variant="outline">
              Entrar
            </Button>
          </>
        ) : (
          <Button href="/dashboard" variant="link">
            Ir para o Dashboard <ArrowRight size={18} />
          </Button>
        )}
      </div>
    </section>
  );
}
