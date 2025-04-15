import Image from "next/image";

export default function Groups() {
  return (
    <div className="min-h-screen bg-[#fefefe]">
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

      <section id="groups-content" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              id="group-ritmos"
              className="bg-[#2c0f00] rounded-xl overflow-hidden border-2 border-[#f37b00]"
            >
              <div className="h-[300px] relative">
                <Image
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/84b7c2c7b2-2744249c18aa78a4d54f.png"
                  alt="african dance ensemble performing with drums, vibrant costumes, energetic movement"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#f37b00] mb-4">
                  Sankofa Ritmos e Danças
                </h2>
                <p className="text-[#fefefe] mb-6">
                  Grupo principal que une percussão e dança afro-brasileira em
                  performances vibrantes e energéticas.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
                    <i className="fa-brands fa-youtube text-2xl"></i>
                  </span>
                  <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
                    <i className="fa-brands fa-instagram text-2xl"></i>
                  </span>
                  <span className="bg-[#f37b00] text-[#fefefe] px-4 py-2 rounded-lg hover:bg-[#ce1d00] cursor-pointer">
                    Ver Apresentações
                  </span>
                </div>
              </div>
            </div>

            <div
              id="group-2gp"
              className="bg-[#2c0f00] rounded-xl overflow-hidden border-2 border-[#f37b00]"
            >
              <div className="h-[300px] relative">
                <Image
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f8ce2f6137-e3af987859fcfae96e1e.png"
                  alt="percussion group performing with traditional drums, professional stage lighting"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#f37b00] mb-4">
                  Sankofa/2GP
                </h2>
                <p className="text-[#fefefe] mb-6">
                  Grupo de pesquisa e performance focado na fusão de ritmos
                  tradicionais com elementos contemporâneos.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
                    <i className="fa-brands fa-youtube text-2xl"></i>
                  </span>
                  <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
                    <i className="fa-brands fa-instagram text-2xl"></i>
                  </span>
                  <span className="bg-[#f37b00] text-[#fefefe] px-4 py-2 rounded-lg hover:bg-[#ce1d00] cursor-pointer">
                    Ver Apresentações
                  </span>
                </div>
              </div>
            </div>

            <div
              id="group-afrosamba"
              className="bg-[#2c0f00] rounded-xl overflow-hidden border-2 border-[#f37b00]"
            >
              <div className="h-[300px] relative">
                <Image
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/de4d35d06e-7821293b9ec1d4318adf.png"
                  alt="samba musicians performing with traditional instruments, colorful stage setting"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#f37b00] mb-4">
                  Sankofa Afro Samba
                </h2>
                <p className="text-[#fefefe] mb-6">
                  Conjunto que explora as raízes africanas do samba brasileiro,
                  mesclando ritmos e melodias ancestrais.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
                    <i className="fa-brands fa-youtube text-2xl"></i>
                  </span>
                  <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
                    <i className="fa-brands fa-instagram text-2xl"></i>
                  </span>
                  <span className="bg-[#f37b00] text-[#fefefe] px-4 py-2 rounded-lg hover:bg-[#ce1d00] cursor-pointer">
                    Ver Apresentações
                  </span>
                </div>
              </div>
            </div>

            <div
              id="group-duo"
              className="bg-[#2c0f00] rounded-xl overflow-hidden border-2 border-[#f37b00]"
            >
              <div className="h-[300px] relative">
                <Image
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/6b2f73e494-79af7045fc815ecc6406.png"
                  alt="two musicians performing with african drums, intimate stage setting"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#f37b00] mb-4">
                  Duo Sankofa
                </h2>
                <p className="text-[#fefefe] mb-6">
                  Formação intimista que apresenta a essência da percussão
                  africana em formato reduzido e versátil.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
                    <i className="fa-brands fa-youtube text-2xl"></i>
                  </span>
                  <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
                    <i className="fa-brands fa-instagram text-2xl"></i>
                  </span>
                  <span className="bg-[#f37b00] text-[#fefefe] px-4 py-2 rounded-lg hover:bg-[#ce1d00] cursor-pointer">
                    Ver Apresentações
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
