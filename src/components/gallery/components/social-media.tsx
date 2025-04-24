import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const SocialMedia = () => {
  return (
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
  );
};
