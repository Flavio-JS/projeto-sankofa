export const Header = () => {
  return (
    <header
      id="header"
      className="fixed w-full z-50 bg-black/80 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-[#fefefe] text-2xl font-bold cursor-pointer">
            Sankofa
          </span>
          <div className="hidden md:flex space-x-8">
            <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
              Home
            </span>
            <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
              Sobre
            </span>
            <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
              Grupos
            </span>
            <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
              Galeria
            </span>
            <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
              Contato
            </span>
            <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
              Notícias
            </span>
          </div>
          <button className="md:hidden text-[#fefefe]">
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};
