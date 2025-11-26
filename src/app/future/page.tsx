import SectionWrapper from "@/components/SectionWrapper";
import { futureRoadmap } from "@/data/content";

export default function FuturePage() {
  return (
    <SectionWrapper
      eyebrow="Future Scope"
      title="Roadmap for AI precision, adaptive calibration, and AR fusion"
      subtitle="Summaries extracted from the Future Scope section."
    >
      <div className="relative ml-4 border-l border-white/10 pl-8">
        <div className="absolute left-[-2px] top-0 h-full w-1 bg-gradient-to-b from-[#ff0033] via-[#b44cff] to-[#00eaff]" />
        <div className="space-y-10">
          {futureRoadmap.map((item) => (
            <div key={item.title} className="relative rounded-3xl border border-white/10 bg-black/40 p-6">
              <span className="text-xs uppercase tracking-[0.5em] text-[#00eaff]">{item.year}</span>
              <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}


