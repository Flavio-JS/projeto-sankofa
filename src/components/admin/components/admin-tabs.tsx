export const AdminTabs = () => {
  return (
    <div
      id="admin-tabs"
      className="flex space-x-4 mb-8 border-b border-gray-200"
    >
      <button className="px-4 py-2 text-text-engineering-orange border-b-2 border-engineering-orange font-bold">
        Notícias
      </button>
      <button className="px-4 py-2 text-gray-500 hover:text-text-engineering-orange">
        Eventos
      </button>
      <button className="px-4 py-2 text-gray-500 hover:text-text-engineering-orange">
        Editais
      </button>
    </div>
  );
};
