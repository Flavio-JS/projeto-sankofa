import Image from "next/image";

export const AboutHero = () => {
  return (
    <section id="about-hero" className="relative h-[400px] bg-black">
      <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f9bc7db18c-d74ac65815bf3557ae94.png"
          alt="african drums arranged artistically with dramatic lighting and traditional fabric background, professional photo"
          width={200}
          height={200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
      </div>
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <h1 className="text-5xl md:text-6xl font-bold text-text-white">
          Sobre o Projeto Sankofa
        </h1>
      </div>
    </section>
  );
};
