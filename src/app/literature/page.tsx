import SectionWrapper from "@/components/SectionWrapper";
import Timeline from "@/components/Timeline";
import { literatureTimeline } from "@/data/content";

const summaryParagraph =
  "Research spanning Magic Cube devices, AGS laser keyboards, and IEEE HCI studies demonstrated that projection-based input drastically improves portability. Yet ambient light interference, weak battery stamina, and haptic-free typing limited adoption. The LPVK literature review consolidates these lessons and drives new optimization goals for sensing, optics, and user experience.";

const challengeList = [
  "Ambient light interference and reflective surfaces causing ghost taps.",
  "Accuracy dips when single-sensor systems attempt to triangulate fast motion.",
  "Battery drain from high-power laser emitters and camera modules.",
  "No haptic or audio cues for typists transitioning from mechanical boards.",
  "Surface adaptability constraints—needs flat, matte surfaces in prior art.",
];

export default function LiteraturePage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Literature Review"
        title="Prior art shaping the LPVK architecture"
        subtitle={summaryParagraph}
      >
        <Timeline items={literatureTimeline} />
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Observed Challenges"
        title="Key problems in historic projection keyboards"
        subtitle="LPVK combats each issue with dual-sensor fusion, adaptive filtering, and energy-aware optics."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {challengeList.map((challenge) => (
            <div key={challenge} className="glass-panel rounded-3xl p-6 text-left text-white/80">
              {challenge}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}


