import Image from "next/image";
import {
  faLocationDot,
  faEnvelope,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  const socialIcons = [
    { icon: faInstagram, key: "instagram" },
    { icon: faFacebook, key: "facebook" },
    { icon: faYoutube, key: "youtube" },
    { icon: faWhatsapp, key: "whatsapp" },
  ];

  return (
    <div className="min-h-screen bg-[#fefefe]">
      <section id="contact-hero" className="relative h-[400px]">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5f2a86dbb4-25cdc316cd54fa3c86e9.png"
            alt="african drums and instruments arranged artistically with warm lighting and natural textures"
            width={200}
            height={200}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#fefefe]"></div>
        </div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#fefefe]">
            Fale com a gente!
          </h1>
        </div>
      </section>

      <section id="contact-form" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-[#2c0f00] mb-12 text-center">
              Quer fazer parte ou contratar uma apresentação? Envie uma
              mensagem.
            </p>

            <form id="contact-form" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="block text-[#2c0f00] mb-2">Nome</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f37b00] focus:ring-2 focus:ring-[#f37b00]/20 outline-none transition"
                  />
                </div>
                <div className="form-group">
                  <label className="block text-[#2c0f00] mb-2">E-mail</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f37b00] focus:ring-2 focus:ring-[#f37b00]/20 outline-none transition"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="block text-[#2c0f00] mb-2">Mensagem</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f37b00] focus:ring-2 focus:ring-[#f37b00]/20 outline-none transition"
                ></textarea>
              </div>
              <button className="w-full bg-[#ce1d00] hover:bg-[#f37b00] text-[#fefefe] py-4 rounded-lg transition">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      <section
        id="contact-info"
        className="py-20 bg-gradient-to-b from-[#ce1d00]/5 to-[#f37b00]/5"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div id="address" className="text-center">
              <div className="bg-[#fefefe] p-8 rounded-xl shadow-lg">
                <div className="flex justify-center text-4xl text-[#ce1d00] mb-4">
                  <FontAwesomeIcon icon={faLocationDot} width={36} />
                </div>
                <h3 className="text-xl font-bold text-[#2c0f00] mb-4">
                  Endereço
                </h3>
                <p className="text-[#2c0f00]">IFG Campus Inhumas</p>
                <p className="text-[#2c0f00]">Av. Universitária, s/n</p>
                <p className="text-[#2c0f00]">Vale das Goiabeiras</p>
                <p className="text-[#2c0f00]">Inhumas - GO</p>
              </div>
            </div>

            <div id="email" className="text-center">
              <div className="bg-[#fefefe] p-8 rounded-xl shadow-lg">
                <div className="flex justify-center text-4xl text-[#ce1d00] mb-4">
                  <FontAwesomeIcon icon={faEnvelope} width={36} />
                </div>
                <h3 className="text-xl font-bold text-[#2c0f00] mb-4">
                  E-mail
                </h3>
                <a
                  href="mailto:contato@projetosankofa.com.br"
                  className="text-[#ce1d00] hover:text-[#f37b00] break-all"
                >
                  contato@projetosankofa.com.br
                </a>
              </div>
            </div>

            <div id="social" className="text-center">
              <div className="bg-[#fefefe] p-8 rounded-xl shadow-lg">
                <div className="flex justify-center text-4xl text-[#ce1d00] mb-4">
                  <FontAwesomeIcon icon={faShareNodes} width={36} />
                </div>
                <h3 className="text-xl font-bold text-[#2c0f00] mb-4">
                  Redes Sociais
                </h3>
                <div className="flex justify-center gap-4">
                  {socialIcons.map((social) => (
                    <a
                      key={social.key}
                      href="#"
                      className="text-[#ce1d00] hover:text-[#f37b00] grid place-items-center w-8 h-8"
                    >
                      <FontAwesomeIcon icon={social.icon} className="text-xl" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
