const events = [
  {
    id: 1,
    month: "MAR",
    day: "15",
    title: "Workshop de Dança Afro",
    time: "14:00 - IFG Campus Inhumas",
  },
  {
    id: 2,
    month: "MAR",
    day: "20",
    title: "Apresentação Cultural",
    time: "19:00 - Teatro Municipal",
  },
];

export const UpcomingEvents = () => {
  return (
    <div id="upcoming-events" className="bg-black-bean rounded-xl p-6 mb-8">
      <h3 className="text-text-orange-wheel text-xl font-bold mb-6">
        Próximos Eventos
      </h3>
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-start space-x-4 text-text-white"
          >
            <div className="bg-engineering-orange px-3 py-2 rounded-lg text-center min-w-[60px]">
              <span className="block text-sm">{event.month}</span>
              <span className="block text-xl font-bold">{event.day}</span>
            </div>
            <div>
              <h4 className="font-bold">{event.title}</h4>
              <p className="text-sm opacity-75">{event.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
