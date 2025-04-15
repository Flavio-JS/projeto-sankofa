import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#0a0909]">
      <section id="gallery-hero" className="relative h-[400px]">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/67d48833f7-2dcf7f40cc24ac387295.png"
            alt="african drum performance with dynamic lighting and movement"
            width={200}
            height={200}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#0a0909]"></div>
        </div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#fefefe]">
            Galeria e Registros
          </h1>
        </div>
      </section>

      <section id="photo-gallery" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#f37b00] mb-12">
            Momentos Capturados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              id="gallery-item-1"
              className="relative group overflow-hidden rounded-xl"
            >
              <Image
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/84b7c2c7b2-2744249c18aa78a4d54f.png"
                alt="african dance performance"
                width={200}
                height={200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-[#fefefe]">Festival Cultural 2025</p>
              </div>
            </div>
            <div
              id="gallery-item-2"
              className="relative group overflow-hidden rounded-xl"
            >
              <Image
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f8ce2f6137-e3af987859fcfae96e1e.png"
                alt="drum workshop"
                width={200}
                height={200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-[#fefefe]">Oficina de Percussão</p>
              </div>
            </div>
            <div
              id="gallery-item-3"
              className="relative group overflow-hidden rounded-xl"
            >
              <Image
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/de4d35d06e-7821293b9ec1d4318adf.png"
                alt="samba performance"
                width={200}
                height={200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-[#fefefe]">Apresentação Afro Samba</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="video-gallery"
        className="py-20 bg-gradient-to-b from-[#ce1d00]/10 to-[#f37b00]/10"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#f37b00] mb-12">
            Vídeos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              id="video-1"
              className="bg-[#2c0f00] rounded-xl overflow-hidden"
            >
              <div className="aspect-video bg-black flex items-center justify-center">
                <i className="fa-solid fa-play text-4xl text-[#f37b00]"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#f37b00]">
                  Apresentação no Festival de Culturas
                </h3>
                <p className="text-[#fefefe] mt-2">
                  Performance completa do grupo Sankofa Ritmos e Danças
                </p>
              </div>
            </div>
            <div
              id="video-2"
              className="bg-[#2c0f00] rounded-xl overflow-hidden"
            >
              <div className="aspect-video bg-black flex items-center justify-center">
                <i className="fa-solid fa-play text-4xl text-[#f37b00]"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#f37b00]">
                  Workshop de Percussão
                </h3>
                <p className="text-[#fefefe] mt-2">
                  Oficina ministrada pelo Mestre Kemuel Kesley
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="social-media" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#f37b00] mb-8">
            Siga Nossa Jornada
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="bg-[#ce1d00] hover:bg-[#f37b00] text-[#fefefe] px-6 py-3 rounded-full flex justify-center items-center"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                width={20}
                height={20}
                className="mr-2"
              />
              <span>Canal no YouTube</span>
            </a>
            <a
              href="#"
              className="bg-[#ce1d00] hover:bg-[#f37b00] text-[#fefefe] px-6 py-3 rounded-full flex justify-center items-center"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                width={20}
                height={20}
                className="mr-2"
              />
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
