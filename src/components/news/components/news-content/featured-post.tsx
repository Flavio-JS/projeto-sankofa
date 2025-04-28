import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const FeaturedPost = () => {
  return (
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
      <span className="text-text-engineering-orange text-sm">12 Mar 2025</span>
      <h2 className="text-3xl font-bold text-text-black-bean mt-2 mb-4 group-hover:text-text-engineering-orange transition">
        Festival de Cultura Afro-Brasileira 2025
      </h2>
      <p className="text-gray-600 mb-6">
        a Associação Sankofa se prepara para mais uma edição do Festival de Cultura
        Afro-Brasileira. Este ano, o evento contará com apresentações especiais
        dos quatro grupos do projeto, além de oficinas e palestras...
      </p>
      <a
        href="#"
        className="inline-flex gap-4 items-center text-text-engineering-orange hover:text-text-orange-wheel"
      >
        Leia mais
        <FontAwesomeIcon icon={faArrowRight} width={20} />
      </a>
    </article>
  );
};
