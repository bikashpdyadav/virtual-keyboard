import SectionWrapper from "@/components/SectionWrapper";
import TeamCard from "@/components/TeamCard";
import { teamMembers } from "@/data/content";

export default function AboutPage() {
  return (
    <SectionWrapper
      eyebrow="About Us"
      title="Research crew behind LPVK"
      subtitle="Bikash Prasad Yadav and team at Dr. Ambedkar Institute of Technology."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {teamMembers.map((member) => (
          <TeamCard key={member.email} {...member} />
        ))}
      </div>
    </SectionWrapper>
  );
}


