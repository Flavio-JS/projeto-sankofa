import { GalleryHero } from "@/components/gallery/components/gallery-hero";
import { PhotoGallery } from "@/components/gallery/components/photo-gallery";
import { SocialMedia } from "@/components/gallery/components/social-media";
import { VideoGallery } from "@/components/gallery/components/video-gallery";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-black">
      <GalleryHero />
      <PhotoGallery />
      <VideoGallery />
      <SocialMedia />
    </div>
  );
}
