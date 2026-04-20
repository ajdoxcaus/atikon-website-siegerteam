import { ChevronDown } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  return (
    <details
      className="group border-b border-neutral-200 last:border-b-0"
      open={defaultOpen || undefined}
    >
      <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 px-1 text-left font-semibold text-atikon-black transition-colors hover:bg-neutral-50 rounded-lg select-none list-none [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <ChevronDown
          size={20}
          className="shrink-0 text-atikon-orange transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <div className="pb-5 px-1 text-sm leading-relaxed text-neutral-600">
        {answer}
      </div>
    </details>
  );
}
