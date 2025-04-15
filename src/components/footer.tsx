import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-[#2c0f00] py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div id="footer-about">
            <h3 className="text-xl font-bold text-[#f37b00] mb-4">
              Projeto Sankofa
            </h3>
            <p className="text-[#fefefe]">
              Percussão, Cultura e Educação Afro-brasileira
            </p>
          </div>
          <div id="footer-contact">
            <h3 className="text-xl font-bold text-[#f37b00] mb-4">Contato</h3>
            <p className="text-[#fefefe]">contato@projetosankofa.com.br</p>
            <p className="text-[#fefefe]">(11) 99999-9999</p>
          </div>
          <div id="footer-social">
            <h3 className="text-xl font-bold text-[#f37b00] mb-4">
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer"
                width={24}
                height={24}
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer"
                width={24}
                height={24}
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#5b1300] text-center text-[#fefefe]">
          <p>&copy; 2025 Projeto Sankofa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
