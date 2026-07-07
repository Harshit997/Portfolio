import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Hands-on research experience building real NLP systems."
        />

        <div className="relative pl-[34px]">
          <div className="absolute bottom-1.5 left-2 top-1.5 w-0.5 bg-line" />
          {experience.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.1} className="relative pb-9 last:pb-0">
              <div className="absolute -left-[34px] top-1 h-[18px] w-[18px] rounded-full border-[3px] border-accent bg-white shadow-[0_0_0_5px_rgba(239,244,255,1)]" />
              <div className="rounded-xl2 border border-line bg-white p-7 shadow-sm2 transition-all hover:-translate-y-1 hover:shadow-md2">
                <h3 className="mb-1 font-display text-[1.05rem] font-extrabold">{item.role}</h3>
                <div className="mb-1 text-sm font-semibold text-accent-ink">{item.org}</div>
                <span className="mb-3.5 inline-block text-[12.5px] font-bold uppercase tracking-[0.05em] text-ink-faint">
                  {item.date}
                </span>
                <ul className="list-disc space-y-1 pl-[18px] text-[14.5px] leading-[1.8] text-ink-soft">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
//dfevwvwevv