"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroCard from "./HeroCard";
import { heroCards, heroStats } from "@/data/content";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-20 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur-3xl md:p-12"
        >
          <div className="absolute inset-0 -z-10 opacity-50 blur-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff0033]/30 via-transparent to-[#00eaff]/20" />
          </div>
          <p className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.5em] text-[#00eaff]/80">
            <span className="h-1 w-8 rounded-full bg-gradient-to-r from-[#ff0033] to-[#00eaff]" />
            LPVK Research
          </p>
          <h1 className="text-3xl font-semibold text-white md:text-5xl">
            Infrared Sensor-Based Virtual Keyboard Using{" "}
            <span className="text-[#00eaff]">Holographic Laser Projection</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-200 md:text-lg">
            A futuristic, touchless typing interface powered by ultra-precise infrared sensing,
            holographic optics, and embedded intelligence. Designed for hygiene-critical, portable,
            and immersive computing scenarios.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/model"
              className="group flex items-center gap-2 rounded-full border border-[#00eaff]/50 bg-[#00eaff]/10 px-6 py-3 text-sm font-semibold text-[#00eaff] transition hover:border-[#00eaff] hover:bg-[#00eaff]/20"
            >
              View 3D Model
              <span className="text-xs uppercase tracking-widest text-white/70 group-hover:text-white">
                Orbit
              </span>
            </Link>
            <a
              href="#overview-snippet"
              className="flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:border-white/50"
            >
              Explore Project
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent" />
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-2xl"
              >
                <div className="text-2xl font-semibold text-[#00eaff]">{stat.value}</div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {heroCards.map((card, idx) => (
            <HeroCard key={card.title} {...card} delay={0.3 + idx * 0.1} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 scanlines" />
    </section>
  );
};

export default Hero;


