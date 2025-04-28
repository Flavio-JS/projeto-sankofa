import { faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="min-h-screen pt-20 bg-background flex items-center justify-center px-4">
      <div id="error-404" className="max-w-4xl w-full text-center">
        <div className="mb-8">
          <Image
            className="mx-auto w-[300px] h-[300px]"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c190726730-bebfce800e2bbf9eb8f8.png"
            alt="african drums broken or damaged in artistic style, dramatic illustration"
            width={200}
            height={200}
          />
        </div>

        <h1 className="text-6xl font-bold text-text-black-bean mb-4">404</h1>
        <h2 className="text-2xl text-text-blood-red mb-6">
          Ops! Página não encontrada
        </h2>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          Parece que o ritmo se perdeu! A página que você está procurando pode
          ter sido movida ou não existe mais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-engineering-orange text-text-white rounded-lg hover:bg-orange-wheel transition-colors"
          >
            <FontAwesomeIcon icon={faHome} width={20} />
            Voltar para Home
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center gap-3 px-6 py-3 border-2 border-engineering-orange text-text-engineering-orange rounded-lg hover:bg-engineering-orange hover:text-text-white transition-colors"
          >
            <FontAwesomeIcon icon={faEnvelope} width={20} />
            Contate-nos
          </Link>
        </div>
      </div>
    </div>
  );
}
