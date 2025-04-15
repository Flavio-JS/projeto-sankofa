import { AboutSummary } from "@/pages/home/components/abaut-summary";
import { CTASection } from "@/pages/home/components/cta-section";
import { GallerySection } from "@/pages/home/components/gallery-section";
import { GroupsSection } from "@/pages/home/components/groups-section";
import { HeroSection } from "@/pages/home/components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0909]">
      <HeroSection />
      <AboutSummary />
      <GroupsSection />
      <GallerySection />
      <CTASection />
    </div>
  );
}
