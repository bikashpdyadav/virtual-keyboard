"use client";

import { motion } from "framer-motion";

type TeamCardProps = {
  name: string;
  role: string;
  email: string;
};

const TeamCard = ({ name, role, email }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-panel glow-border relative flex flex-col gap-4 rounded-2xl p-6 text-center"
    >
      <div className="mx-auto h-24 w-24 rounded-full border border-white/20 bg-gradient-to-br from-[#0f172a] to-[#1e1b4b]" />
      <div>
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm uppercase tracking-[0.3em] text-[#00eaff]">{role}</p>
      </div>
      <a href={`mailto:${email}`} className="text-sm text-white/70 hover:text-white">
        {email}
      </a>
    </motion.div>
  );
};

export default TeamCard;


