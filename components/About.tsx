import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";
import { stats } from "@/lib/data";

const tags = ["Deep Learning", "NLP", "Full Stack Development", "Competitive Programming"];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
          <Reveal>
            <span className="mb-2.5 block text-[13px] font-extrabold uppercase tracking-[0.08em] text-accent-ink">
              About Me
            </span>
            <h2 className="mb-3.5 font-display text-[clamp(1.7rem,3vw,2.4rem)] font-extrabold tracking-tight">
              A curious builder, one problem at a time.
            </h2>
            <div className="space-y-4 text-[15.5px] leading-[1.85] text-ink-soft">
              <p>
                I&apos;m a third-year B.Tech student in Electronics &amp; Communication Engineering
                at Jalpaiguri Government Engineering College, working toward a career as a
                Software Engineer and AI/ML Engineer.
              </p>
              <p>
                Technology has always felt like the fastest path from an idea to something real.
                That&apos;s what pulls me toward solving algorithmic problems, and toward Deep
                Learning, NLP, and Full Stack Development — fields where I can go from a rough
                concept to a working system.
              </p>
              <p>
                I build, and I&apos;m a
                constant learner — always picking up the next tool, or technique that
                helps me build better software.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent-soft px-3.5 py-[7px] text-[12.5px] font-bold text-accent-ink"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-xl2 border border-line bg-white p-6 shadow-sm2 transition-all hover:-translate-y-1 hover:shadow-md2"
              >
                <div
                  className={`font-display font-extrabold text-ink ${
                    stat.displayValue ? "text-[1.25rem]" : "text-[2rem]"
                  }`}
                >
                  {stat.displayValue ?? (
                    <AnimatedCounter value={stat.value ?? 0} suffix={stat.suffix} />
                  )}
                </div>
                <div className="mt-1.5 text-[13px] font-semibold text-ink-soft">{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
