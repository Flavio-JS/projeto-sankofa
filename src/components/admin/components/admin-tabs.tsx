export const AdminTabs = () => {
  return (
    <div
      id="admin-tabs"
      className="flex space-x-4 mb-8 border-b border-gray-200"
    >
      <button className="px-4 py-2 text-[#ce1d00] border-b-2 border-[#ce1d00] font-bold">
        Notícias
      </button>
      <button className="px-4 py-2 text-gray-500 hover:text-[#ce1d00]">
        Eventos
      </button>
      <button className="px-4 py-2 text-gray-500 hover:text-[#ce1d00]">
        Editais
      </button>
    </div>
  );
};
