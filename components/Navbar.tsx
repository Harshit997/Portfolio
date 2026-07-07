"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/75 py-3 shadow-[0_1px_0_rgba(15,23,42,0.06),0_8px_24px_-18px_rgba(15,23,42,0.25)] backdrop-blur-md"
          : "bg-transparent py-[18px]"
      }`}
    >
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(239,244,255,1)]" />
          Harshit<span className="text-accent-ink">.dev</span>
        </a>

        <nav className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-surface-soft-2 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-ink"
          >
            Contact
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-soft-2 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mx-4 mt-2.5 overflow-hidden rounded-2xl border border-line bg-white shadow-lg2 md:hidden"
          >
            <div className="flex flex-col gap-1 p-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3.5 py-3 text-sm font-semibold text-ink-soft hover:bg-surface-soft-2 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-ink px-3.5 py-3 text-center text-sm font-bold text-white"
              >
                Contact
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
