"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FolderKanban,
  Download,
  Mail,
  Github,
  Linkedin,
  Code2,
  BrainCircuit,
  Terminal,
  GraduationCap,
} from "lucide-react";
import { roles, contactInfo } from "@/lib/data";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-[168px]">
      <div className="pointer-events-none absolute -left-36 -top-36 h-[420px] w-[420px] animate-drift rounded-full bg-accent opacity-[0.28] blur-[60px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[380px] w-[380px] animate-drift rounded-full bg-violet opacity-[0.28] blur-[60px] [animation-delay:3s]" />

      <div className="relative z-10 mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 px-6 md:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center md:text-left">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DCE7FE] bg-accent-soft px-3.5 py-[7px] text-[13px] font-bold text-accent-ink">
            <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(34,197,94,0.22)]" />
            Open to Software Engineering &amp; AI/ML roles
          </span>

          <h1 className="mb-4 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] font-extrabold leading-[1.06] tracking-tight text-ink">
            Hi, I&apos;m{" "}
            <span className="text-accent-ink">Harshit Agarwal</span>
          </h1>

          <div className="mb-5 flex h-[34px] items-center justify-center font-mono text-[clamp(1.05rem,2vw,1.35rem)] font-semibold text-ink-soft md:justify-start">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
            <span className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-blink bg-accent" />
          </div>

          <p className="mx-auto mb-8 max-w-[560px] text-[16px] leading-[1.75] text-ink-soft md:mx-0">
            I&apos;m a third-year B.Tech student in Electronics and
            Communication Engineering at Jalpaiguri Government Engineering
            College. I&apos;m passionate about software engineering, AI, and
            machine learning — building scalable applications that solve
            real-world problems. I enjoy competitive programming and
            learning new technologies.
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-[22px] py-[13px] text-[14.5px] font-bold text-white shadow-[0_12px_26px_-12px_rgba(37,99,235,0.55)] transition-all hover:-translate-y-0.5 hover:bg-accent-ink"
            >
              <FolderKanban size={17} />
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-[22px] py-[13px] text-[14.5px] font-bold text-ink shadow-sm2 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md2"
            >
              <Download size={17} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-surface-soft-2 px-[22px] py-[13px] text-[14.5px] font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-[#E7ECF3]"
            >
              <Mail size={17} />
              Contact Me
            </a>
          </div>

          <div className="flex justify-center gap-2.5 md:justify-start">
            <SocialIcon href={contactInfo.github} label="GitHub">
              <Github size={19} />
            </SocialIcon>
            <SocialIcon href={contactInfo.linkedin} label="LinkedIn">
              <Linkedin size={19} />
            </SocialIcon>
            <SocialIcon href={contactInfo.leetcode} label="LeetCode">
              <Code2 size={19} />
            </SocialIcon>
            <SocialIcon href={`mailto:${contactInfo.email}`} label="Email">
              <Mail size={19} />
            </SocialIcon>
          </div>
        </div>

        <div className="relative z-10 order-first flex justify-center md:order-last">
          {/* <div className="hidden animate-floaty items-center gap-2 rounded-2xl border border-line bg-white px-3.5 py-2.5 text-[12.5px] font-bold text-ink-soft shadow-md2 md:absolute md:left-[-6%] md:top-[6%] md:flex">
            <BrainCircuit size={15} className="text-accent" />
            AI / ML
          </div> */}

          <div className="relative h-[min(320px,80vw)] w-[min(320px,80vw)] overflow-hidden rounded-[28px] border border-line shadow-lg2">
            <Image
              src="/profile.png"
              alt="Harshit Agarwal"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* <div className="hidden animate-floaty items-center gap-2 rounded-2xl border border-line bg-white px-3.5 py-2.5 text-[12.5px] font-bold text-ink-soft shadow-md2 [animation-delay:1s] md:absolute md:bottom-[10%] md:right-[-8%] md:flex">
            <Terminal size={15} className="text-accent" />
            Full Stack
          </div> */}

          <div className="absolute -bottom-3.5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-4 py-2.5 text-[13px] font-bold shadow-md2">
            <GraduationCap size={15} className="text-accent" />
            B.Tech - JGEC, ECE ~ 2028
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
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
      className="flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-line bg-white text-ink-soft shadow-sm2 transition-all hover:-translate-y-1 hover:border-[#C7D8FE] hover:text-accent-ink"
    >
      {children}
    </a>
  );
}
