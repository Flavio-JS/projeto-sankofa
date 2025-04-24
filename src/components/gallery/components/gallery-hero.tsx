import Image from "next/image";

export const GalleryHero = () => {
  return (
    <section id="gallery-hero" className="relative h-[400px]">
      <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/67d48833f7-2dcf7f40cc24ac387295.png"
          alt="african drum performance with dynamic lighting and movement"
          width={200}
          height={200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#0a0909]"></div>
      </div>
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#fefefe]">
          Galeria e Registros
        </h1>
      </div>
    </section>
  );
};
