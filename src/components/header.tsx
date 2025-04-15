import Link from "next/link";

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
            <Link
              href="/"
              className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/sobre"
              className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer"
            >
              Sobre
            </Link>
            <Link
              href="/grupos"
              className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer"
            >
              Grupos
            </Link>
            <Link
              href="/galeria"
              className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer"
            >
              Galeria
            </Link>
            <Link
              href="/contato"
              className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer"
            >
              Contato
            </Link>
            <Link
              href="/noticias"
              className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer"
            >
              Notícias
            </Link>
          </div>
          <button className="md:hidden text-[#fefefe]">
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};
