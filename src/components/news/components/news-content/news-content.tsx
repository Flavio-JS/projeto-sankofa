import { FeaturedNotices } from "./featured-notices";
import { FeaturedPost } from "./featured-post";
import { NewsCard } from "./news-card";
import { UpcomingEvents } from "./upcoming-events";

export type Post = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
};

const news: Post[] = [
  {
    id: 1,
    title: "Oficina de Percussão Básica",
    date: "10 Mar 2025",
    description:
      "Nova turma para iniciantes em percussão afro-brasileira. Inscrições abertas para todas as idades...",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/09d60098dc-188300d4a39a1ece5243.png",
    imageAlt: "hands playing african drums close up with warm lighting",
  },
  {
    id: 2,
    title: "Apresentação no Centro Cultural",
    date: "8 Mar 2025",
    description:
      "O grupo Sankofa Ritmos e Danças se apresentará no Centro Cultural de Inhumas...",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/3861763af6-ea1a062d60caf2d304a6.png",
    imageAlt:
      "group of people in traditional african clothes dancing and celebrating",
  },
];

export const NewsContent = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <FeaturedPost />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item) => (
              <NewsCard
                key={item.id}
                title={item.title}
                date={item.date}
                description={item.description}
                image={item.image}
                imageAlt={item.imageAlt}
              />
            ))}
          </div>
        </div>

        <aside className="lg:col-span-1">
          <UpcomingEvents />
          <FeaturedNotices />
        </aside>
      </div>
    </div>
  );
};
