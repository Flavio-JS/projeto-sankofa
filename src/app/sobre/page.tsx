import { AboutHero } from "@/components/about/components/about-hero";
import { AboutIntro } from "@/components/about/components/about-intro";
import { DownloadPortfolio } from "@/components/about/components/download-portfolio";
import { FounderQuote } from "@/components/about/components/founder-quote";
import { Timeline } from "@/components/about/components/timeline";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <AboutHero />

      <section id="about-content" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AboutIntro />
            <FounderQuote />
            <DownloadPortfolio />
            <Timeline />
          </div>
        </div>
      </section>
    </div>
  );
}
