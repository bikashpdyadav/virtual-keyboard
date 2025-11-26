import SectionWrapper from "@/components/SectionWrapper";
import { overviewPoints } from "@/data/content";

const introParagraphs = [
  "Technological leaps in Human–Machine Interaction reward compactness, hygiene, and portability. Traditional keyboards still rely on mechanical assemblies that occupy space, accumulate germs, and limit wearable or mobile experiences.",
  "The LPVK solution projects a full QWERTY layout with a laser diode routed through a holographic Diffractive Optical Element (DOE). Infrared grids interpret taps, while embedded firmware streams keystrokes through Bluetooth like any HID keyboard.",
  "Touchless interaction matters in healthcare teams, public kiosks, and mission-critical deployments where sanitization and durability are non-negotiable. Replacing plastic keys with photons keeps the system featherweight and low maintenance.",
  "Portability also drives the LPVK narrative. A palm-sized module can unfold into a desktop-grade keyboard on glass, metal, or wood. This agility unlocks laptops, tablets, AR rigs, and micro-PCs without requiring additional hardware.",
];

const hygienePoints = [
  "Touchless surfaces reduce contamination risk in ICUs, surgical theaters, and shared kiosks.",
  "No mechanical components means zero wear, no key wobble, and fewer failure points.",
  "Laser projection adapts to confined environments like aircraft trays or wearable rigs.",
  "Infrared sensing plus adaptive calibration ensures steady accuracy across materials.",
];

export default function OverviewPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Project Overview"
        title="Why traditional keyboards fall short"
        subtitle="Summarized from the LPVK introduction and Need for LPVK sections."
      >
        <div className="space-y-6 text-left text-white/80">
          {introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Need for LPVK"
        title="Hygiene, portability, and touchless fluency"
        subtitle="LPVK responds directly to bulky form factors, maintenance overhead, and the demand for sterile, modular inputs."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {hygienePoints.map((point) => (
            <div key={point} className="glass-panel rounded-3xl p-6 text-white/80">
              {point}
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {overviewPoints.map((point) => (
            <div key={point} className="rounded-3xl border border-white/10 bg-black/30 p-6 text-white/70">
              {point}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}


