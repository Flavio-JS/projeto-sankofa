import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative h-[800px]">
      <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5bef153908-8689e330bc28ad8681c6.png"
          alt="african drums performance with dramatic lighting and vibrant colors, artistic photo"
          width={200}
          height={200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
      </div>
      <div className="relative container mx-auto px-6 pt-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-text-white mb-4">
            Associação Sankofa – Percussão, Cultura e Educação Afro-brasileira
          </h1>
          <p className="text-xl md:text-2xl text-text-orange-wheel mb-8">
            Transformando sons em identidade desde 2015
          </p>
          <Link
            href="/sobre"
            className="inline-block px-8 py-4 bg-engineering-orange text-text-white rounded-lg hover:bg-blood-red transition duration-300"
          >
            Conheça o Projeto
          </Link>
        </div>
      </div>
    </section>
  );
};
