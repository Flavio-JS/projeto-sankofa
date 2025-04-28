import Link from "next/link";

export const CTASection = () => {
  return (
    <section id="cta" className="py-20 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-text-orange-wheel mb-8">
          Faça parte ou contrate o grupo
        </h2>
        <p className="text-text-white text-lg mb-8 max-w-2xl mx-auto">
          Seja para participar dos nossos grupos ou para contratar uma
          apresentação, estamos prontos para compartilhar nossa arte com você.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/contato"
            className="px-8 py-4 bg-engineering-orange text-text-white rounded-lg hover:bg-blood-red transition duration-300"
          >
            Quero Participar
          </Link>
          <Link
            href="/contato"
            className="px-8 py-4 bg-orange-wheel text-text-white rounded-lg hover:bg-engineering-orange transition duration-300"
          >
            Contratar Apresentação
          </Link>
        </div>
      </div>
    </section>
  );
};
