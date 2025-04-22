import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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
              className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer transition-colors"
            >
              Home
            </Link>
            <Link
              href="/sobre"
              className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/grupos"
              className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer transition-colors"
            >
              Grupos
            </Link>
            <Link
              href="/galeria"
              className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer transition-colors"
            >
              Galeria
            </Link>
            <Link
              href="/contato"
              className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer transition-colors"
            >
              Contato
            </Link>
            <Link
              href="/noticias"
              className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer transition-colors"
            >
              Notícias
            </Link>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-[#fefefe] flex justify-center items-center h-max hover:text-[#f37b00] transition-colors">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </button>
              </SheetTrigger>

              <SheetContent side="left" className="bg-[#2c0f00] border-none">
                <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
                <div className="flex flex-col h-full pt-10">
                  <Link
                    href="/"
                    className="text-[#fefefe] hover:text-[#f37b00] py-3 px-4 text-lg transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/sobre"
                    className="text-[#fefefe] hover:text-[#f37b00] py-3 px-4 text-lg transition-colors"
                  >
                    Sobre
                  </Link>
                  <Link
                    href="/grupos"
                    className="text-[#fefefe] hover:text-[#f37b00] py-3 px-4 text-lg transition-colors"
                  >
                    Grupos
                  </Link>
                  <Link
                    href="/galeria"
                    className="text-[#fefefe] hover:text-[#f37b00] py-3 px-4 text-lg transition-colors"
                  >
                    Galeria
                  </Link>
                  <Link
                    href="/contato"
                    className="text-[#fefefe] hover:text-[#f37b00] py-3 px-4 text-lg transition-colors"
                  >
                    Contato
                  </Link>
                  <Link
                    href="/noticias"
                    className="text-[#fefefe] hover:text-[#f37b00] py-3 px-4 text-lg transition-colors"
                  >
                    Notícias
                  </Link>

                  <div className="flex-1" />

                  <div className="pb-6 px-4">
                    <p className="text-[#f37b00] text-sm">
                      Projeto Sankofa © {new Date().getFullYear()}
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};
