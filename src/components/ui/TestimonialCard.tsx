import { Quote } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  layout?: "card" | "centered";
};

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  image,
  layout = "card",
}: TestimonialCardProps) {
  if (layout === "centered") {
    return (
      <figure className="max-w-3xl mx-auto text-center">
        <Quote size={36} className="mx-auto text-atikon-violet/15 mb-4" aria-hidden="true" />
        <blockquote className="text-lg leading-relaxed text-neutral-700 italic">
          &bdquo;{quote}&ldquo;
        </blockquote>
        <figcaption className="mt-6 flex flex-col items-center gap-3">
          {image && (
            <img
              src={image}
              alt=""
              className="h-14 w-14 rounded-full object-cover ring-2 ring-white shadow"
            />
          )}
          <div>
            <span className="block text-sm font-semibold text-atikon-black">{name}</span>
            <span className="block text-sm text-neutral-500">{role}</span>
            <span className="block text-xs text-atikon-violet mt-1">{company}</span>
          </div>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="relative flex h-full flex-col rounded-[var(--radius-md)] bg-neutral-50 p-8 border-l-4 border-l-atikon-violet">
      <Quote size={28} className="absolute top-6 right-6 text-atikon-violet/10" aria-hidden="true" />
      <blockquote className="flex-1 text-sm leading-relaxed text-neutral-700 italic">
        &bdquo;{quote}&ldquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        {image && (
          <img
            src={image}
            alt=""
            className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-white shadow"
          />
        )}
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-semibold text-atikon-black">{name}</span>
          <span className="text-xs text-neutral-500">{role}</span>
          <span className="text-xs text-atikon-violet">{company}</span>
        </div>
      </figcaption>
    </figure>
  );
}
