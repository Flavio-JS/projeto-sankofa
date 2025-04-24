import { NewsContent } from "@/components/news/components/news-content/news-content";
import { NewsHero } from "@/components/news/components/news-hero";

export default function News() {
  return (
    <div className="min-h-screen bg-[#fefefe]">
      <NewsHero />
      <NewsContent />
    </div>
  );
}
