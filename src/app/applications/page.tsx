import SectionWrapper from "@/components/SectionWrapper";
import { applications } from "@/data/content";

export default function ApplicationsPage() {
  return (
    <SectionWrapper
      eyebrow="Applications"
      title="Domains adopting infrared holographic typing"
      subtitle="Direct excerpts from the Applications section of the LPVK paper."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {applications.map((app) => {
          const Icon = app.icon;
          return (
            <div
              key={app.title}
              className="glass-panel glow-border rounded-3xl p-6 transition hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center gap-3 text-[#00eaff]">
                <Icon className="size-5" />
                <p className="text-xs uppercase tracking-[0.4em]">{app.title}</p>
              </div>
              <p className="text-sm text-white/80">{app.description}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}


