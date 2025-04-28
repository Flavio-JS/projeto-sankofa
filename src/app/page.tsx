import { AboutSummary } from "@/components/home/components/abaut-summary";
import { CTASection } from "@/components/home/components/cta-section";
import { GallerySection } from "@/components/home/components/gallery-section";
import { GroupsSection } from "@/components/home/components/groups-section";
import { HeroSection } from "@/components/home/components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <AboutSummary />
      <GroupsSection />
      <GallerySection />
      <CTASection />
    </div>
  );
}
