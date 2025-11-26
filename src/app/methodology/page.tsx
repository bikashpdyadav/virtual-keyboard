import SectionWrapper from "@/components/SectionWrapper";
import { methodologySections, softwareFlow, workingSteps, workflowHighlights } from "@/data/content";
import Image from "next/image";

export default function MethodologyPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Methodology"
        title="System overview across projection, sensing, and processing modules"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {methodologySections.map((section) => (
            <div key={section.title} className="glass-panel rounded-3xl p-6 text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-[#00eaff]">{section.title}</p>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#ff0033]" />
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Working Principle"
        title="Step-by-step holographic typing flow"
        subtitle="From the DOE laser stencil to Bluetooth HID transmission."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-6 text-white/80">
            {workingSteps.map((step, index) => (
              <div key={step} className="flex gap-4">
                <span className="text-sm font-semibold text-[#00eaff]">{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-6 text-white/80">
            {softwareFlow.map((step, index) => (
              <div key={step} className="flex gap-4">
                <span className="text-sm font-semibold text-[#b44cff]">{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Workflow Diagram"
        title="Optical + Infrared workflow visualization"
        subtitle="Diagram placeholder representing LPVK data flow."
      >
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/60">
          <Image
            src="/images/workflow-diagram.svg"
            alt="LPVK workflow diagram"
            width={900}
            height={420}
            className="w-full"
          />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {workflowHighlights.map((item) => (
            <div key={item.title} className="glass-panel rounded-3xl p-6 text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-[#00eaff]">{item.title}</p>
              <p className="mt-2 text-sm text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}


