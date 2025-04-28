import Image from "next/image";

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-black-bean">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-text-orange-wheel mb-12">
          Galeria de Performances
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            id="video-1"
            className="aspect-video bg-black rounded-lg overflow-hidden"
          >
            <Image
              className="w-full h-full object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/900233b4f7-0d7549f7d16d938c12f0.png"
              alt="african percussion performance on stage with dramatic lighting"
              width={200}
              height={200}
            />
          </div>
          <div
            id="video-2"
            className="aspect-video bg-black rounded-lg overflow-hidden"
          >
            <Image
              className="w-full h-full object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e858932cf7-5cd823f18fd396ba5ba0.png"
              alt="traditional african dance performance with colorful costumes"
              width={200}
              height={200}
            />
          </div>
          <div
            id="video-3"
            className="aspect-video bg-black rounded-lg overflow-hidden"
          >
            <Image
              className="w-full h-full object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e48d6a1b52-e85fbc3f038526a2673e.png"
              alt="cultural festival performance with drums and dancers"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
