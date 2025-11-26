"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

type SectionWrapperProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

const SectionWrapper = ({ id, eyebrow, title, subtitle, children }: SectionWrapperProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id={id} ref={ref} className="px-6 py-10 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-5xl text-center"
      >
        {eyebrow && (
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-[#00eaff]/80">{eyebrow}</p>
        )}
        <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-4 text-base text-white/70 md:text-lg">{subtitle}</p>}
      </motion.div>
      <div className="mx-auto mt-12 max-w-6xl">{children}</div>
    </section>
  );
};

export default SectionWrapper;

