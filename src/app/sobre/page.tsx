import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-[#fefefe]">
      <section id="about-hero" className="relative h-[400px] bg-[#0a0909]">
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
          <h1 className="text-5xl md:text-6xl font-bold text-[#fefefe]">
            Sobre o Projeto Sankofa
          </h1>
        </div>
      </section>

      <section id="about-content" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div id="about-intro" className="mb-16">
              <h2 className="text-3xl font-bold text-[#ce1d00] mb-6">
                Nossa História
              </h2>
              <p className="text-lg mb-6">
                Fundado em 2015 no Instituto Federal de Goiás - Campus Inhumas,
                o Projeto Sankofa nasceu com a missão de preservar, valorizar e
                difundir a cultura afro-brasileira através da música,
                especialmente a percussão.
              </p>
              <p className="text-lg mb-6">
                Nossa atuação se desenvolve em três pilares fundamentais:
                artístico, pedagógico e pesquisa, promovendo não apenas
                apresentações culturais, mas também a formação de novos artistas
                e o aprofundamento do conhecimento sobre nossa herança cultural.
              </p>
            </div>

            <div
              id="founder-quote"
              className="bg-[#f37b00] rounded-lg p-8 mb-16"
            >
              <div className="flex items-start gap-6">
                <i className="fa-solid fa-quote-left text-4xl text-[#fefefe]"></i>
                <div>
                  <p className="text-xl text-[#fefefe] italic mb-4">
                    &quot;O Projeto Sankofa é mais que música, é uma ponte entre
                    passado e presente, uma forma de reconexão com nossas raízes
                    através dos tambores que ecoam ancestralidade.&quot;
                  </p>
                  <p className="text-[#fefefe] font-bold">
                    Prof. Kemuel Kesley
                  </p>
                  <p className="text-[#fefefe]">
                    Idealizador do Projeto Sankofa
                  </p>
                </div>
              </div>
            </div>

            <div id="timeline" className="mb-16">
              <h2 className="text-3xl font-bold text-[#ce1d00] mb-12">
                Nossa Trajetória
              </h2>
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-[#f37b00]"></div>

                <div
                  id="timeline-2015"
                  className="relative flex flex-col md:flex-row md:justify-between mb-8"
                >
                  <div className="ml-12 md:ml-0 md:w-[45%]">
                    <div className="bg-[#ce1d00] text-[#fefefe] p-6 rounded-lg">
                      <h3 className="font-bold mb-2">2015</h3>
                      <p>Fundação do Projeto no IFG Campus Inhumas</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#f37b00] rounded-full transform -translate-x-1/2 mt-6"></div>
                </div>

                <div
                  id="timeline-2018"
                  className="relative flex flex-col md:flex-row md:justify-between mb-8"
                >
                  <div className="ml-12 md:ml-0 md:w-[45%] md:order-2">
                    <div className="bg-[#f37b00] text-[#fefefe] p-6 rounded-lg">
                      <h3 className="font-bold mb-2">2018</h3>
                      <p>Primeira apresentação internacional</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#f37b00] rounded-full transform -translate-x-1/2 mt-6"></div>
                </div>

                <div
                  id="timeline-2020"
                  className="relative flex flex-col md:flex-row md:justify-between mb-8"
                >
                  <div className="ml-12 md:ml-0 md:w-[45%]">
                    <div className="bg-[#ce1d00] text-[#fefefe] p-6 rounded-lg">
                      <h3 className="font-bold mb-2">2020</h3>
                      <p>Início das oficinas online de percussão</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#f37b00] rounded-full transform -translate-x-1/2 mt-6"></div>
                </div>

                <div
                  id="timeline-2024"
                  className="relative flex flex-col md:flex-row md:justify-between"
                >
                  <div className="ml-12 md:ml-0 md:w-[45%] md:order-2">
                    <div className="bg-[#f37b00] text-[#fefefe] p-6 rounded-lg">
                      <h3 className="font-bold mb-2">2024</h3>
                      <p>Expansão do projeto para outras cidades</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#f37b00] rounded-full transform -translate-x-1/2 mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
