import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-14">
      <span className="mb-2.5 block text-[13px] font-extrabold uppercase tracking-[0.08em] text-accent-ink">
        {eyebrow}
      </span>
      <h2 className="mb-3.5 font-display text-[clamp(1.7rem,3vw,2.4rem)] font-extrabold tracking-tight text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-[15.5px] leading-relaxed text-ink-soft">{subtitle}</p>
      )}
    </Reveal>
  );
}
