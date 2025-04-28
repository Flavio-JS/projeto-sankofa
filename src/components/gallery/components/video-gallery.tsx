import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type Video = {
  id: number;
  title: string;
  description: string;
};

const videos: Video[] = [
  {
    id: 1,
    title: "Apresentação no Festival de Culturas",
    description: "Performance completa do grupo Sankofa Ritmos e Danças",
  },
  {
    id: 2,
    title: "Workshop de Percussão",
    description: "Oficina ministrada pelo Mestre Kemuel Kesley",
  },
];

export const VideoGallery = () => {
  return (
    <section
      id="video-gallery"
      className="py-20 bg-gradient-to-b from-engineering-orange/10 to-orange-wheel/10"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-text-orange-wheel mb-12">
          Vídeos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <VideoItem
              key={video.id}
              title={video.title}
              description={video.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export type VideoItemProps = {
  title: string;
  description: string;
};

export const VideoItem = ({ title, description }: VideoItemProps) => {
  return (
    <div className="bg-black-bean rounded-xl overflow-hidden">
      <div className="aspect-video bg-black flex items-center justify-center text-text-orange-wheel">
        <FontAwesomeIcon icon={faPlay} width={20} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-orange-wheel">{title}</h3>
        <p className="text-text-white mt-2">{description}</p>
      </div>
    </div>
  );
};
