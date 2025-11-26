import SectionWrapper from "@/components/SectionWrapper";
import ChartBlock from "@/components/ChartBlock";
import { accuracyData, powerData, resultsStats, typingSpeedData } from "@/data/content";

export default function ResultsPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Results & Discussion"
        title="Performance metrics from LPVK prototype trials"
        subtitle="Team testing validated 92% detection accuracy, <100 ms latency, and ~350 mW power draw."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {resultsStats.map((stat) => (
            <div key={stat.label} className="glass-panel rounded-3xl p-6 text-center">
              <p className="text-3xl font-semibold text-[#00eaff]">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.4em] text-white/70">{stat.label}</p>
              <p className="mt-3 text-xs text-white/60">{stat.detail}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Comparative Charts"
        title="Existing IR vs LPVK vs Mechanical Keyboards"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <ChartBlock
            title="Typing Speed Comparison"
            type="bar"
            data={typingSpeedData}
            series={[
              { key: "Existing", color: "#ff0033", label: "Existing IR" },
              { key: "LPVK", color: "#00eaff", label: "LPVK" },
              { key: "Mechanical", color: "#b44cff", label: "Mechanical" },
            ]}
            unit=" WPM"
          />
          <ChartBlock
            title="Accuracy Comparison"
            type="line"
            data={accuracyData}
            series={[
              { key: "Existing", color: "#ff6b6b", label: "Existing IR" },
              { key: "LPVK", color: "#00eaff", label: "LPVK" },
              { key: "Mechanical", color: "#d7e5ff", label: "Mechanical" },
            ]}
            unit="%"
          />
          <ChartBlock
            title="Power Consumption"
            type="bar"
            data={powerData}
            series={[
              { key: "Existing", color: "#ff0033", label: "Existing IR" },
              { key: "LPVK", color: "#00eaff", label: "LPVK" },
              { key: "Mechanical", color: "#b44cff", label: "Mechanical" },
            ]}
            unit=" mW"
          />
        </div>
      </SectionWrapper>
    </>
  );
}


