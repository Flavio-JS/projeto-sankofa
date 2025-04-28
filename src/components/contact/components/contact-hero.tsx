import Image from "next/image";

export const ContactHero = () => {
  return (
    <section id="contact-hero" className="relative h-[400px]">
      <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5f2a86dbb4-25cdc316cd54fa3c86e9.png"
          alt="african drums and instruments arranged artistically with warm lighting and natural textures"
          width={200}
          height={200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-background"></div>
      </div>
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <h1 className="text-5xl md:text-6xl font-bold text-text-white">
          Fale com a gente!
        </h1>
      </div>
    </section>
  );
};
