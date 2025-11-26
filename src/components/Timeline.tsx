"use client";

import { motion } from "framer-motion";

type TimelineItem = {
  title: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative border-l border-white/10 pl-10">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="relative mb-10 pl-8"
        >
          <div className="absolute -left-[43px] flex h-10 w-10 items-center justify-center rounded-full border border-[#00eaff]/40 bg-[#00eaff]/10 text-xs text-[#00eaff]">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-sm text-white/70">{item.description}</p>
        </motion.div>
      ))}
      <div className="absolute left-[-1px] top-0 h-full w-0.5 bg-gradient-to-b from-[#ff0033] via-[#b44cff] to-[#00eaff]" />
    </div>
  );
};

export default Timeline;


