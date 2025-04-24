import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AdminHero = () => {
  return (
    <section
      id="admin-hero"
      className="pt-24 pb-6 bg-gradient-to-r from-[#2c0f00] to-[#5b1300]"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#fefefe]">
            Painel Administrativo
          </h1>
          <button className="bg-[#ce1d00] text-[#fefefe] px-4 py-2 rounded-lg hover:bg-[#f37b00] transition flex gap-3">
            <FontAwesomeIcon icon={faPlus} width={20} /> Nova Publicação
          </button>
        </div>
      </div>
    </section>
  );
};
