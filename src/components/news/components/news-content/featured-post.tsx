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
      <span className="text-[#ce1d00] text-sm">12 Mar 2025</span>
      <h2 className="text-3xl font-bold text-[#2c0f00] mt-2 mb-4 group-hover:text-[#ce1d00] transition">
        Festival de Cultura Afro-Brasileira 2025
      </h2>
      <p className="text-gray-600 mb-6">
        O Projeto Sankofa se prepara para mais uma edição do Festival de Cultura
        Afro-Brasileira. Este ano, o evento contará com apresentações especiais
        dos quatro grupos do projeto, além de oficinas e palestras...
      </p>
      <a
        href="#"
        className="inline-flex items-center text-[#ce1d00] hover:text-[#f37b00]"
      >
        Leia mais
        <i className="fa-solid fa-arrow-right ml-2"></i>
      </a>
    </article>
  );
};
