import Image from "next/image";

export const NewsHero = () => {
  return (
    <section id="news-hero" className="relative h-[400px]">
      <div className="absolute inset-0">
        <Image
          width={200}
          height={200}
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fb323a96ac-ce52dc61698bc791150f.png"
          alt="african drums and dancers performing on stage with dramatic lighting and movement, photojournalistic style"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#fefefe]"></div>
      </div>
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#fefefe]">
          Notícias e Atualizações
        </h1>
      </div>
    </section>
  );
};
