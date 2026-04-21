import { Users } from "lucide-react";
import { Badge } from "../ui/Badge";

export function TeamHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-max py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <Badge variant="violet" size="sm">
            <Users size={12} className="mr-1" />
            Unser Team
          </Badge>

          <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] font-extrabold tracking-tight">
            <span className="text-atikon-black">Kreativ, zuverlässig und </span>
            <span className="text-atikon-orange">für Sie da!</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-neutral-600 mx-auto max-w-2xl">
            Bei Atikon bekommen Sie alles für Ihr Marketing aus einer Hand. Rund
            80 Spezialist:innen kümmern sich darum, dass Ihre Website und Ihre
            Marketingprodukte effizient für Sie arbeiten.
          </p>
        </div>
      </div>
    </section>
  );
}
