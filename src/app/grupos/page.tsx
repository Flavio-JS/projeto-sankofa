import { GroupsHero } from "@/components/groups/components/groups-hero";
import { GroupsContent } from "@/components/groups/components/groups-content";

export default function Groups() {
  return (
    <div className="min-h-screen bg-[#fefefe]">
      <GroupsHero />
      <GroupsContent />
    </div>
  );
}
