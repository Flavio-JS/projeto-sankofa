export const Pagination = () => {
  return (
    <div id="pagination" className="flex justify-between items-center mt-6">
      <div className="text-sm text-gray-500">
        Mostrando 1-10 de 24 resultados
      </div>
      <div className="flex space-x-2">
        <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
          Anterior
        </button>
        <button className="px-3 py-1 rounded bg-[#ce1d00] text-white">1</button>
        <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
          2
        </button>
        <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
          3
        </button>
        <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
          Próxima
        </button>
      </div>
    </div>
  );
};
