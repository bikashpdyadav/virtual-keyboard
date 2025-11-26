"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type HeroCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
};

const HeroCard = ({ title, description, icon: Icon, delay = 0 }: HeroCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className="glass-panel glow-border floating relative flex h-full flex-col gap-4 rounded-2xl p-6 text-left"
    >
      <div className="flex items-center gap-3 text-[#00eaff]">
        <div className="rounded-full border border-white/10 bg-black/40 p-3 text-[#00eaff]">
          <Icon className="size-6" />
        </div>
        <span className="text-sm uppercase tracking-[0.3em] text-[#b7f7ff]">
          Module
        </span>
      </div>
      <h3 className="font-semibold text-lg text-white">{title}</h3>
      <p className="text-sm text-slate-200/80">{description}</p>
      <div className="mt-auto h-px w-full bg-gradient-to-r from-transparent via-[#00eaff]/70 to-transparent" />
    </motion.div>
  );
};

export default HeroCard;

