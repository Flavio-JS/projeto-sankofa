import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Grupos", href: "/grupos" },
  { name: "Galeria", href: "/galeria" },
  { name: "Contato", href: "/contato" },
  { name: "Notícias", href: "/noticias" },
];

export const Header = () => {
  return (
    <header
      id="header"
      className="fixed w-full z-50 bg-black/80 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-text-white text-2xl font-bold cursor-pointer"
          >
            Associação Sankofa
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-white hover:text-text-orange-wheel cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-text-white flex justify-center items-center h-max hover:text-text-orange-wheel transition-colors">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </button>
              </SheetTrigger>

              <SheetContent side="left" className="bg-black-bean border-none">
                <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
                <div className="flex flex-col h-full pt-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-text-white hover:text-text-orange-wheel py-3 px-4 text-lg transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="flex-1" />

                  <div className="pb-6 px-4">
                    <p className="text-text-orange-wheel text-sm">
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
