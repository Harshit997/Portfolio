import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="bg-surface-soft py-24 md:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading eyebrow="Achievements" title="Milestones along the way" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.id} delay={Math.min(i * 0.05, 0.2)}>
                <div className="h-full rounded-xl2 border border-line bg-white p-6 shadow-sm2 transition-all hover:-translate-y-1 hover:shadow-md2">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
                    <Icon size={20} />
                  </div>
                  <h4 className="mb-1.5 text-[15px] font-bold">{item.title}</h4>
                  <p className="text-[13.5px] leading-relaxed text-ink-soft">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
