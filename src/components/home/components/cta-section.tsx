export const CTASection = () => {
  return (
    <section id="cta" className="py-20 bg-[#0a0909]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#f37b00] mb-8">
          Faça parte ou contrate o grupo
        </h2>
        <p className="text-[#fefefe] text-lg mb-8 max-w-2xl mx-auto">
          Seja para participar dos nossos grupos ou para contratar uma
          apresentação, estamos prontos para compartilhar nossa arte com você.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-8 py-4 bg-[#ce1d00] text-[#fefefe] rounded-lg hover:bg-[#5b1300] transition duration-300"
          >
            Quero Participar
          </a>
          <a
            href="#"
            className="px-8 py-4 bg-[#f37b00] text-[#fefefe] rounded-lg hover:bg-[#ce1d00] transition duration-300"
          >
            Contratar Apresentação
          </a>
        </div>
      </div>
    </section>
  );
};
