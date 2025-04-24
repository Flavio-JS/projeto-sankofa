const notices = [
  {
    id: 1,
    title: "Seleção de Novos Integrantes",
    date: "Inscrições abertas até 30/03/2025",
  },
  {
    id: 2,
    title: "Edital de Apoio Cultural",
    date: "Submissões até 15/04/2025",
  },
];

export const FeaturedNotices = () => {
  return (
    <div
      id="featured-notices"
      className="bg-gradient-to-br from-[#ce1d00]/10 to-[#f37b00]/10 rounded-xl p-6"
    >
      <h3 className="text-[#2c0f00] text-xl font-bold mb-6">
        Editais e Oportunidades
      </h3>
      <div className="space-y-4">
        {notices.map((notice) => (
          <div key={notice.id} className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-[#2c0f00]">{notice.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{notice.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
