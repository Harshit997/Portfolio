import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="bg-surface-soft py-24 md:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with"
          subtitle="A working toolkit spanning core computer science, AI/ML, and full stack web development."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.id} delay={Math.min(i * 0.05, 0.2)}>
                <div className="h-full rounded-xl2 border border-line bg-white p-6 shadow-sm2 transition-all hover:-translate-y-1 hover:border-[#DCE7FE] hover:shadow-md2">
                  <div className="mb-4 flex items-center gap-2.5">
                    <div className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-[11px] bg-accent-soft text-accent-ink">
                      <Icon size={19} />
                    </div>
                    <h4 className="text-[15px] font-bold">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-surface-soft-2 px-3 py-1.5 text-[12.5px] font-semibold text-ink-soft transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
