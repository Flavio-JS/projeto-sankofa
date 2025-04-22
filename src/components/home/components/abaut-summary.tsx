export const AboutSummary = () => {
  return (
    <section id="about-summary" className="py-20 bg-[#2c0f00]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#f37b00] mb-6">
            Nossa História
          </h2>
          <p className="text-[#fefefe] text-lg mb-8">
            O Projeto Sankofa nasceu da união entre música, educação e cultura
            afro-brasileira. Através da percussão, criamos pontes entre o
            passado e o presente, celebrando nossa herança cultural.
          </p>
          <span className="text-[#f37b00] hover:text-[#ce1d00] cursor-pointer">
            Saiba mais sobre nossa história{" "}
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </span>
        </div>
      </div>
    </section>
  );
};
