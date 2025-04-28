export const Timeline = () => {
  const events = [
    {
      year: "2015",
      content:
        "Fundação do Projeto Sankofa no IFG Campus Inhumas, com foco em música, cultura afro-brasileira e educação.",
      color: "bg-engineering-orange",
    },
    {
      year: "2018",
      content:
        "Participações em espetáculos e oficinas com artistas internacionais e ações culturais em Inhumas e região.",
      color: "bg-orange-wheel",
      alignRight: true,
    },
    {
      year: "2020",
      content:
        "Adaptação à pandemia com oficinas virtuais, lives e produção de conteúdos audiovisuais premiados por editais.",
      color: "bg-engineering-orange",
    },
    {
      year: "2024",
      content:
        "Estreia do espetáculo 'Estranhamentos' com o Duo Sankofa e ampliação das atividades para novos territórios.",
      color: "bg-orange-wheel",
      alignRight: true,
    },
  ];

  return (
    <div id="timeline" className="mb-16">
      <h2 className="text-3xl font-bold text-text-engineering-orange mb-12">
        Nossa Trajetória
      </h2>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-orange-wheel"></div>

        {events.map((event, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row md:justify-between mb-8 ${
              event.alignRight ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="ml-12 md:ml-0 md:w-[45%]">
              <div className={`${event.color} text-text-white p-6 rounded-lg`}>
                <h3 className="font-bold mb-2">{event.year}</h3>
                <p>{event.content}</p>
              </div>
            </div>
            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-orange-wheel rounded-full transform -translate-x-1/2 mt-6"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
