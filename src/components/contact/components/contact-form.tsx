export const ContactForm = () => {
  return (
    <section id="contact-form" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-text-black-bean mb-12 text-center">
            Quer fazer parte ou contratar uma apresentação? Envie uma mensagem.
          </p>

          <form id="contact-form" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="block text-text-black-bean mb-2">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-wheel focus:ring-2 focus:ring-orange-wheel/20 outline-none transition"
                />
              </div>
              <div className="form-group">
                <label className="block text-text-black-bean mb-2">E-mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-wheel focus:ring-2 focus:ring-orange-wheel/20 outline-none transition"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="block text-text-black-bean mb-2">Mensagem</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-wheel focus:ring-2 focus:ring-orange-wheel/20 outline-none transition"
              ></textarea>
            </div>
            <button className="w-full bg-engineering-orange hover:bg-orange-wheel text-text-white py-4 rounded-lg transition">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
