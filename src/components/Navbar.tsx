"use client";

import { navLinks } from "@/data/content";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, SquareGanttChart } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/5 bg-black/40 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm md:px-10">
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00eaff]/40 bg-[#00eaff]/10 text-[#00eaff]">
            <SquareGanttChart className="size-5" />
          </div>
          <div className="leading-tight">
            <span className="font-semibold uppercase tracking-[0.4em] text-xs text-white/60">
              LPVK
            </span>
            <p className="font-semibold text-base">Laser Projection Keyboard</p>
          </div>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold uppercase tracking-[0.3em] transition ${
                pathname === link.href ? "text-[#00eaff]" : "text-white/65 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden text-white/80"
          aria-label="Toggle navigation"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-white/5 bg-black/70 backdrop-blur-xl"
          >
            <div className="flex flex-col px-6 py-6 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`py-2 font-semibold uppercase tracking-[0.3em] ${
                    pathname === link.href ? "text-[#00eaff]" : "text-white/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

