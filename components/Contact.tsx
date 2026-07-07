import { Mail, Phone, MapPin, Github, Linkedin, Code2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { contactInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="Have a role, project, or research idea in mind? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="rounded-xl2 bg-ink p-9 text-white">
              <h3 className="mb-2.5 font-display text-[1.4rem] font-extrabold text-white">
                Get in touch
              </h3>
              <p className="mb-6 text-[14.5px] leading-relaxed text-slate-300">
                Open to Software Engineering and AI/ML opportunities.
              </p>

              <ContactLine icon={<Mail size={17} />}>{contactInfo.email}</ContactLine>
              <ContactLine icon={<Phone size={17} />}>{contactInfo.phone}</ContactLine>
              <ContactLine icon={<MapPin size={17} />}>{contactInfo.location}</ContactLine>

              <div className="mt-6 flex gap-2.5">
                <DarkSocial href={contactInfo.github} label="GitHub">
                  <Github size={18} />
                </DarkSocial>
                <DarkSocial href={contactInfo.linkedin} label="LinkedIn">
                  <Linkedin size={18} />
                </DarkSocial>
                <DarkSocial href={contactInfo.leetcode} label="LeetCode">
                  <Code2 size={18} />
                </DarkSocial>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl2 border border-line bg-white p-8 shadow-sm2">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactLine({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-sm font-semibold">
      <span className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-[10px] bg-white/10 text-blue-300">
        {icon}
      </span>
      {children}
    </div>
  );
}

function DarkSocial({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-slate-300 transition-all hover:-translate-y-1 hover:border-white/30 hover:text-white"
    >
      {children}
    </a>
  );
}
