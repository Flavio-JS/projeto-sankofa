import Image from "next/image";

export default function News() {
  return (
    <div className="min-h-screen bg-[#fefefe]">
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

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <article id="featured-post" className="mb-12 group">
              <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
                <Image
                  width={200}
                  height={200}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/eb67dfbd72-461e3bb764a20afe79b8.png"
                  alt="african percussion group performing on stage with colorful traditional costumes"
                />
              </div>
              <span className="text-[#ce1d00] text-sm">12 Mar 2025</span>
              <h2 className="text-3xl font-bold text-[#2c0f00] mt-2 mb-4 group-hover:text-[#ce1d00] transition">
                Festival de Cultura Afro-Brasileira 2025
              </h2>
              <p className="text-gray-600 mb-6">
                O Projeto Sankofa se prepara para mais uma edição do Festival de
                Cultura Afro-Brasileira. Este ano, o evento contará com
                apresentações especiais dos quatro grupos do projeto, além de
                oficinas e palestras...
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#ce1d00] hover:text-[#f37b00]"
              >
                Leia mais
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </article>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article id="post-1" className="group">
                <div className="relative h-[200px] rounded-xl overflow-hidden mb-4">
                  <Image
                    width={200}
                    height={200}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/09d60098dc-188300d4a39a1ece5243.png"
                    alt="hands playing african drums close up with warm lighting"
                  />
                </div>
                <span className="text-[#ce1d00] text-sm">10 Mar 2025</span>
                <h3 className="text-xl font-bold text-[#2c0f00] mt-2 mb-3 group-hover:text-[#ce1d00] transition">
                  Oficina de Percussão Básica
                </h3>
                <p className="text-gray-600 mb-4">
                  Nova turma para iniciantes em percussão afro-brasileira.
                  Inscrições abertas para todas as idades...
                </p>
                <span className="text-[#ce1d00] hover:text-[#f37b00] cursor-pointer">
                  Leia mais →
                </span>
              </article>

              <article id="post-2" className="group">
                <div className="relative h-[200px] rounded-xl overflow-hidden mb-4">
                  <Image
                    width={200}
                    height={200}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3861763af6-ea1a062d60caf2d304a6.png"
                    alt="group of people in traditional african clothes dancing and celebrating"
                  />
                </div>
                <span className="text-[#ce1d00] text-sm">8 Mar 2025</span>
                <h3 className="text-xl font-bold text-[#2c0f00] mt-2 mb-3 group-hover:text-[#ce1d00] transition">
                  Apresentação no Centro Cultural
                </h3>
                <p className="text-gray-600 mb-4">
                  O grupo Sankofa Ritmos e Danças se apresentará no Centro
                  Cultural de Inhumas...
                </p>
                <span className="text-[#ce1d00] hover:text-[#f37b00] cursor-pointer">
                  Leia mais →
                </span>
              </article>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div
              id="upcoming-events"
              className="bg-[#2c0f00] rounded-xl p-6 mb-8"
            >
              <h3 className="text-[#f37b00] text-xl font-bold mb-6">
                Próximos Eventos
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 text-[#fefefe]">
                  <div className="bg-[#ce1d00] px-3 py-2 rounded-lg text-center min-w-[60px]">
                    <span className="block text-sm">MAR</span>
                    <span className="block text-xl font-bold">15</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Workshop de Dança Afro</h4>
                    <p className="text-sm opacity-75">
                      14:00 - IFG Campus Inhumas
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 text-[#fefefe]">
                  <div className="bg-[#ce1d00] px-3 py-2 rounded-lg text-center min-w-[60px]">
                    <span className="block text-sm">MAR</span>
                    <span className="block text-xl font-bold">20</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Apresentação Cultural</h4>
                    <p className="text-sm opacity-75">
                      19:00 - Teatro Municipal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="featured-notices"
              className="bg-gradient-to-br from-[#ce1d00]/10 to-[#f37b00]/10 rounded-xl p-6"
            >
              <h3 className="text-[#2c0f00] text-xl font-bold mb-6">
                Editais e Oportunidades
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#2c0f00]">
                    Seleção de Novos Integrantes
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Inscrições abertas até 30/03/2025
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#2c0f00]">
                    Edital de Apoio Cultural
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Submissões até 15/04/2025
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
