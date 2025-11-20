import Link from "next/link";
import { Button } from "../ui/Button";

export function FinalCTA({ loggedIn }: { loggedIn: boolean }) {
  return (
    <section className="py-24 text-center px-6 cursor-default">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Pronto para criar sua página?
      </h2>

      {loggedIn ? (
        <Link
          href="/dashboard/pages/new"
          className="px-10 py-4 rounded-xl bg-brand text-white text-lg font-semibold hover:bg-brandHover transition"
        >
          Criar nova página
        </Link>
      ) : (
        <Button
          href="/signup"
          className="px-10 py-4 rounded-xl bg-brand text-white text-lg font-semibold hover:bg-brandHover transition"
          variant="primary"
        >
          Começar agora
        </Button>
      )}
    </section>
  );
}
