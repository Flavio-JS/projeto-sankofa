import Image from "next/image";

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-[#2c0f00]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#f37b00] mb-12">
          Galeria de Performances
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            id="video-1"
            className="aspect-video bg-[#0a0909] rounded-lg overflow-hidden"
          >
            <Image
              className="w-full h-full object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/900233b4f7-0d7549f7d16d938c12f0.png"
              alt="african percussion performance on stage with dramatic lighting"
              width={200}
              height={200}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fa-solid fa-play text-4xl text-[#fefefe]"></i>
            </div>
          </div>
          <div
            id="video-2"
            className="aspect-video bg-[#0a0909] rounded-lg overflow-hidden"
          >
            <Image
              className="w-full h-full object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e858932cf7-5cd823f18fd396ba5ba0.png"
              alt="traditional african dance performance with colorful costumes"
              width={200}
              height={200}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fa-solid fa-play text-4xl text-[#fefefe]"></i>
            </div>
          </div>
          <div
            id="video-3"
            className="aspect-video bg-[#0a0909] rounded-lg overflow-hidden"
          >
            <Image
              className="w-full h-full object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e48d6a1b52-e85fbc3f038526a2673e.png"
              alt="cultural festival performance with drums and dancers"
              width={200}
              height={200}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fa-solid fa-play text-4xl text-[#fefefe]"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
