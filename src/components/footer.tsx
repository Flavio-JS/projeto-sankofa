import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-black-bean py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div id="footer-about">
            <h3 className="text-xl font-bold text-text-orange-wheel mb-4">
              Projeto Sankofa
            </h3>
            <p className="text-text-white">
              Percussão, Cultura e Educação Afro-brasileira
            </p>
          </div>
          <div id="footer-contact">
            <h3 className="text-xl font-bold text-text-orange-wheel mb-4">Contato</h3>
            <p className="text-text-white">contato@projetosankofa.com.br</p>
            <p className="text-text-white">(11) 99999-9999</p>
          </div>
          <div id="footer-social">
            <h3 className="text-xl font-bold text-text-orange-wheel mb-4">
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-text-white hover:text-text-orange-wheel cursor-pointer"
                width={24}
                height={24}
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-text-white hover:text-text-orange-wheel cursor-pointer"
                width={24}
                height={24}
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-text-white hover:text-text-orange-wheel cursor-pointer"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blood-red text-center text-text-white">
          <p>&copy; 2025 Projeto Sankofa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
