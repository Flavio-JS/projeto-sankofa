export const Footer = () => {
  return (
    <footer id="footer" className="bg-[#2c0f00] py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
                <i className="fa-brands fa-instagram text-2xl"></i>
              </span>
              <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
                <i className="fa-brands fa-facebook text-2xl"></i>
              </span>
              <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
                <i className="fa-brands fa-youtube text-2xl"></i>
              </span>
            </div>
          </div>
          <div id="footer-newsletter">
            <h3 className="text-xl font-bold text-[#f37b00] mb-4">
              Newsletter
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="px-4 py-2 rounded-l-lg w-full"
              />
              <button className="px-4 py-2 bg-[#ce1d00] text-[#fefefe] rounded-r-lg hover:bg-[#5b1300]">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
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
