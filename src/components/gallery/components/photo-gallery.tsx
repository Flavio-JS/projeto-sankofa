import Image from "next/image";

export type Photo = {
  id: number;
  src: string;
  alt: string;
  title: string;
};

const photos: Photo[] = [
  {
    id: 1,
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/84b7c2c7b2-2744249c18aa78a4d54f.png",
    alt: "african dance performance",
    title: "Festival Cultural 2025",
  },
  {
    id: 2,
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/f8ce2f6137-e3af987859fcfae96e1e.png",
    alt: "drum workshop",
    title: "Oficina de Percussão",
  },
  {
    id: 3,
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/de4d35d06e-7821293b9ec1d4318adf.png",
    alt: "samba performance",
    title: "Apresentação Afro Samba",
  },
];

export const PhotoGallery = () => {
  return (
    <section id="photo-gallery" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-text-orange-wheel mb-12">
          Momentos Capturados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <GalleryItem
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              title={photo.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export type GalleryItemProps = Omit<Photo, "id">;

export const GalleryItem = ({ src, alt, title }: GalleryItemProps) => {
  return (
    <div className="relative group overflow-hidden rounded-xl">
      <Image
        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
        src={src}
        alt={alt}
        width={200}
        height={200}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <p className="text-text-white">{title}</p>
      </div>
    </div>
  );
};
