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
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contactInfo = [
  {
    icon: faLocationDot,
    title: "Endereço",
    content: (
      <>
        <p>IFG Campus Inhumas</p>
        <p>Av. Universitária, s/n</p>
        <p>Vale das Goiabeiras</p>
        <p>Inhumas - GO</p>
      </>
    ),
  },
  {
    icon: faEnvelope,
    title: "E-mail",
    content: (
      <a
        href="mailto:contato@projetosankofa.com.br"
        className="text-text-engineering-orange hover:text-text-orange-wheel break-all"
      >
        contato@projetosankofa.com.br
      </a>
    ),
  },
  {
    icon: faShareNodes,
    title: "Redes Sociais",
    content: (
      <div className="flex justify-center gap-4">
        {[
          { icon: faInstagram, key: "instagram" },
          { icon: faFacebook, key: "facebook" },
          { icon: faYoutube, key: "youtube" },
          { icon: faWhatsapp, key: "whatsapp" },
        ].map((social) => (
          <a
            key={social.key}
            href="#"
            className="text-text-engineering-orange hover:text-text-orange-wheel grid place-items-center w-8 h-8"
          >
            <FontAwesomeIcon icon={social.icon} className="text-xl" />
          </a>
        ))}
      </div>
    ),
  },
];

export const ContactInfo = () => {
  return (
    <section
      id="contact-info"
      className="py-20 bg-gradient-to-b from-engineering-orange/5 to-orange-wheel/5"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {contactInfo.map((info, index) => (
            <InfoCard
              key={index}
              icon={info.icon}
              title={info.title}
              content={info.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export type InfoCardProps = {
  icon: IconDefinition;
  title: string;
  content: React.ReactNode;
};
export const InfoCard = ({ icon, title, content }: InfoCardProps) => {
  return (
    <div className="text-center">
      <div className="bg-background p-8 rounded-xl shadow-lg">
        <div className="flex justify-center text-4xl text-text-engineering-orange mb-4">
          <FontAwesomeIcon icon={icon} width={36} />
        </div>
        <h3 className="text-xl font-bold text-text-black-bean mb-4">{title}</h3>
        <div className="text-text-black-bean">{content}</div>
      </div>
    </div>
  );
};
