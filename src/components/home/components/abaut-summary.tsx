import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const AboutSummary = () => {
  return (
    <section id="about-summary" className="py-20 bg-black-bean">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-orange-wheel mb-6">
            Nossa História
          </h2>
          <p className="text-text-white text-lg mb-8">
            O Projeto Sankofa nasceu da união entre música, educação e cultura
            afro-brasileira. Através da percussão, criamos pontes entre o
            passado e o presente, celebrando nossa herança cultural.
          </p>
          <Link
            href="/sobre"
            className="flex justify-center gap-4 text-text-orange-wheel hover:text-text-engineering-orange cursor-pointer"
          >
            Saiba mais sobre nossa história
            <FontAwesomeIcon icon={faArrowRight} width={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};
