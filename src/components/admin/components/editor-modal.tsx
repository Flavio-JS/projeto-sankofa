import { faCloudUpload, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const EditorModal = () => {
  return (
    <div
      id="editor-modal"
      className="fixed inset-0 bg-black bg-opacity-50 hidden"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-white rounded-xl shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-text-black-bean">
              Editar Publicação
            </h2>
            <button className="text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faTimes} width={20} />
            </button>
          </div>
          <form>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Tipo de Conteúdo
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-wheel focus:border-transparent">
                  <option>Notícia</option>
                  <option>Evento</option>
                  <option>Edital</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Título
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-wheel focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Imagem de Capa
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <FontAwesomeIcon icon={faCloudUpload} width={20}/>
                  <p className="text-sm text-gray-500">
                    Arraste uma imagem ou clique para fazer upload
                  </p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Conteúdo
                </label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg h-40 focus:ring-2 focus:ring-orange-wheel focus:border-transparent"></textarea>
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Data
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-wheel focus:border-transparent"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Status
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-wheel focus:border-transparent">
                    <option>Rascunho</option>
                    <option>Publicado</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-engineering-orange text-white rounded-lg hover:bg-orange-wheel"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
