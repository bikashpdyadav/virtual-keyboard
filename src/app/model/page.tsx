import SectionWrapper from "@/components/SectionWrapper";
import ThreeDViewer from "@/components/ThreeDViewer";
import { workflowHighlights } from "@/data/content";

export default function ModelPage() {
  return (
    <SectionWrapper
      eyebrow="3D Model"
      title="Orbit the LPVK holographic assembly"
      subtitle="Interact with the placeholder GLB to inspect laser optics, sensing grid, and embedded stack."
    >
      <ThreeDViewer />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {workflowHighlights.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-black/40 p-6 text-left">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-white/70">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}


