import Image from "next/image";

export const GroupsSection = () => {
  return (
    <section id="groups" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-text-orange-wheel mb-12">
          Nossos Grupos Artísticos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div id="group-1" className="bg-black-bean rounded-lg overflow-hidden">
            <Image
              className="w-full h-48 object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/67d48833f7-84281faed400898f7304.png"
              alt="african drum ensemble performing, energetic"
              width={200}
              height={200}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-text-orange-wheel mb-2">
                Grupo Percussivo
              </h3>
              <p className="text-text-white">
                Ritmos tradicionais e contemporâneos
              </p>
            </div>
          </div>
          <div id="group-2" className="bg-black-bean rounded-lg overflow-hidden">
            <Image
              className="w-full h-48 object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7d32701ae1-6dc81f95cb87fa87c2a0.png"
              alt="african dance performance with traditional costumes"
              width={200}
              height={200}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-text-orange-wheel mb-2">
                Dança Afro
              </h3>
              <p className="text-text-white">Movimentos que contam histórias</p>
            </div>
          </div>
          <div id="group-3" className="bg-black-bean rounded-lg overflow-hidden">
            <Image
              className="w-full h-48 object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1e24f0bca3-ae2708662aa1dcde73fd.png"
              alt="youth african music workshop with drums"
              width={200}
              height={200}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-text-orange-wheel mb-2">
                Oficina Jovem
              </h3>
              <p className="text-text-white">Formação musical para juventude</p>
            </div>
          </div>
          <div id="group-4" className="bg-black-bean rounded-lg overflow-hidden">
            <Image
              className="w-full h-48 object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8fdfead9be-4fec48239136dc4dc6d9.png"
              alt="cultural performance with traditional african instruments"
              width={200}
              height={200}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-text-orange-wheel mb-2">
                Grupo Show
              </h3>
              <p className="text-text-white">Espetáculos e apresentações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
