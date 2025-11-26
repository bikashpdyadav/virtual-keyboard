import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import ThreeDViewer from "@/components/ThreeDViewer";
import Link from "next/link";
import { applications, methodologySections, overviewPoints } from "@/data/content";
import FeedbackSection from "@/components/FeedbackSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionWrapper
        id="overview-snippet"
        eyebrow="Why LPVK"
        title="Touchless typing for compact, hygienic futures"
        subtitle="From the LPVK introduction: ditch bulky keyboards for laser light, not plastic keys."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {overviewPoints.map((point) => (
            <div key={point} className="glass-panel rounded-3xl p-6 text-left text-white/80">
              {point}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/overview"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.4em] text-white hover:border-white/60"
          >
            Deep dive PDF insights →
          </Link>
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="System Architecture"
        title="Projection optics, sensing planes, embedded firmware"
        subtitle="LPVK fuses DOE-shaped laser grids with infrared sensing and real-time embedded systems."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {methodologySections.map((section) => (
            <div key={section.title} className="glass-panel rounded-3xl p-6 text-left">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#00eaff]" />
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/methodology"
            className="inline-flex items-center gap-3 rounded-full border border-[#00eaff]/40 bg-[#00eaff]/10 px-6 py-3 text-xs uppercase tracking-[0.4em] text-[#00eaff]"
          >
            Explore methodology →
          </Link>
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="LPVK Prototype"
        title="Orbit the holographic keyboard"
        subtitle="Interactive model viewer with hotspots for the diode, DOE, IR grid, optics, and embedded system."
      >
        <ThreeDViewer />
        <div className="mt-8 text-center">
          <Link
            href="/model"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.4em] text-white"
          >
            Fullscreen 3D experience →
          </Link>
        </div>
      </SectionWrapper>
      <SectionWrapper eyebrow="Applications" title="Industries adopting holographic keyboards">
        <div className="grid gap-6 md:grid-cols-3">
          {applications.slice(0, 6).map((app) => (
            <div
              key={app.title}
              className="glass-panel rounded-3xl p-6 text-left transition hover:-translate-y-1 hover:border-[#00eaff]/40"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-[#00eaff]">{app.title}</p>
              <p className="mt-3 text-sm text-white/70">{app.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/applications"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.4em] text-white"
          >
            View all verticals →
          </Link>
        </div>
      </SectionWrapper>
      <FeedbackSection />
    </>
  );
}
