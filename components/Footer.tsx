import { Github, Linkedin, Code2, Mail } from "lucide-react";
import { contactInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink py-11 text-slate-300">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2 font-display text-lg font-extrabold text-white">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Harshit<span className="text-blue-300">.dev</span>
          </a>
          <div className="flex gap-2.5">
            <FooterIcon href={contactInfo.github} label="GitHub">
              <Github size={17} />
            </FooterIcon>
            <FooterIcon href={contactInfo.linkedin} label="LinkedIn">
              <Linkedin size={17} />
            </FooterIcon>
            <FooterIcon href={contactInfo.leetcode} label="LeetCode">
              <Code2 size={17} />
            </FooterIcon>
            <FooterIcon href={`mailto:${contactInfo.email}`} label="Email">
              <Mail size={17} />
            </FooterIcon>
          </div>
        </div>
        <div className="mt-7 border-t border-white/10 pt-5 text-center text-[13px] text-slate-500">
          Designed &amp; Developed by Harshit Agarwal
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({
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
      className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-white/[0.06] text-slate-300 transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-white"
    >
      {children}
    </a>
  );
}
