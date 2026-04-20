type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const wrapper =
    align === "center" ? "text-center max-w-2xl mx-auto mb-12" : "max-w-2xl mb-12";

  return (
    <div className={wrapper}>
      <h2>{title}</h2>
      {subtitle && (
        <p className="mt-4 text-neutral-600 text-lg">{subtitle}</p>
      )}
    </div>
  );
}
