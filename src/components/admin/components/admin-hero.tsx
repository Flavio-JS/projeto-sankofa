import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AdminHero = () => {
  return (
    <section
      id="admin-hero"
      className="pt-24 pb-6 bg-gradient-to-r from-black-bean to-blood-red"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-text-white">
            Painel Administrativo
          </h1>
          <button className="bg-engineering-orange text-text-white px-4 py-2 rounded-lg hover:bg-orange-wheel transition flex gap-3">
            <FontAwesomeIcon icon={faPlus} width={20} /> Nova Publicação
          </button>
        </div>
      </div>
    </section>
  );
};
