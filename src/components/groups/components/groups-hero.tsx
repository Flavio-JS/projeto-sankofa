import Image from "next/image";

export const GroupsHero = () => {
  return (
    <section id="groups-hero" className="relative h-[400px] bg-[#0a0909]">
      <div className="absolute inset-0">
        <Image
          width={200}
          height={200}
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/67d48833f7-2dcf7f40cc24ac387295.png"
          alt="african drum ensemble performing on stage with colorful traditional costumes, dramatic lighting, professional photo"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
      </div>
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#fefefe]">
          Nossos Grupos
        </h1>
      </div>
    </section>
  );
};
