import { Github, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects, addProjectIcon as AddProjectIcon } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="bg-surface-soft py-24 md:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've built"
          subtitle="A selection of projects spanning AI-powered products and applied machine learning."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.id} delay={Math.min(i * 0.08, 0.24)}>
                <div className="flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-white shadow-sm2 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg2">
                  <div
                    className="relative flex h-[170px] items-center justify-center overflow-hidden"
                    style={{
                      backgroundImage: `radial-gradient(120% 130% at 10% 0%, rgba(255,255,255,0.5), transparent 60%), linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
                    }}
                  >
                    <div className="badge-grid-overlay absolute inset-0 opacity-[0.18]" />
                    <Icon size={44} className="text-white/90" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h4 className="mb-1 font-display text-[1.15rem] font-extrabold">
                      {project.title}
                    </h4>
                    <div className="mb-3 text-[13px] font-semibold text-accent-ink">
                      {project.tagline}
                    </div>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-soft">
                      {project.description}
                    </p>
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-surface-soft-2 px-2.5 py-1 text-[11.5px] font-bold text-ink-soft"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2.5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="inline-flex items-center gap-1.5 rounded-full bg-surface-soft-2 px-4 py-2.5 text-[13px] font-bold text-ink transition-all hover:-translate-y-0.5"
                        >
                          <Github size={15} />
                          GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2.5 text-[13px] font-bold text-ink shadow-sm2 transition-all hover:-translate-y-0.5 hover:shadow-md2"
                        >
                          <ExternalLink size={15} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}

          {/* Placeholder card — remove once a new project object is added to lib/data.ts */}
          <Reveal delay={Math.min(projects.length * 0.08, 0.24)}>
            <div className="flex h-full min-h-[260px] flex-col items-center justify-center rounded-xl2 border-2 border-dashed border-line bg-white p-8 text-center">
              <AddProjectIcon size={30} className="mb-2.5 text-ink-faint" />
              <div className="text-sm font-bold text-ink-faint">More projects coming soon</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
