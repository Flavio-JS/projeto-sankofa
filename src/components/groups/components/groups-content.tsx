import Image from "next/image";

export type Group = {
  id: number;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

const groups = [
  {
    id: 1,
    name: "Sankofa Ritmos e Danças",
    description:
      "Grupo principal que une percussão e dança afro-brasileira em performances vibrantes e energéticas.",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/84b7c2c7b2-2744249c18aa78a4d54f.png",
    imageAlt:
      "african dance ensemble performing with drums, vibrant costumes, energetic movement",
  },
  {
    id: 2,
    name: "Sankofa/2GP",
    description:
      "Grupo de pesquisa e performance focado na fusão de ritmos tradicionais com elementos contemporâneos.",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/f8ce2f6137-e3af987859fcfae96e1e.png",
    imageAlt:
      "percussion group performing with traditional drums, professional stage lighting",
  },
  {
    id: 3,
    name: "Sankofa Afro Samba",
    description:
      "Conjunto que explora as raízes africanas do samba brasileiro, mesclando ritmos e melodias ancestrais.",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/de4d35d06e-7821293b9ec1d4318adf.png",
    imageAlt:
      "samba musicians performing with traditional instruments, colorful stage setting",
  },
  {
    id: 4,
    name: "Duo Sankofa",
    description:
      "Formação intimista que apresenta a essência da percussão africana em formato reduzido e versátil.",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/6b2f73e494-79af7045fc815ecc6406.png",
    imageAlt:
      "two musicians performing with african drums, intimate stage setting",
  },
];

export const GroupsContent = () => {
  return (
    <section id="groups-content" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {groups.map((group) => (
            <GroupCard
              key={group.id}
              name={group.name}
              description={group.description}
              image={group.image}
              imageAlt={group.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export type GroupCardProps = Omit<Group, "id">;

export const GroupCard = ({
  name,
  description,
  image,
  imageAlt,
}: GroupCardProps) => {
  return (
    <div className="bg-[#2c0f00] rounded-xl overflow-hidden border-2 border-[#f37b00]">
      <div className="h-[300px] relative">
        <Image
          width={200}
          height={200}
          className="w-full h-full object-cover"
          src={image}
          alt={imageAlt}
        />
      </div>
      <div className="p-8">
        <h2 className="text-3xl font-bold text-[#f37b00] mb-4">{name}</h2>
        <p className="text-[#fefefe] mb-6">{description}</p>
        <div className="flex items-center space-x-4">
          <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
            <i className="fa-brands fa-youtube text-2xl"></i>
          </span>
          <span className="text-[#fefefe] hover:text-[#f37b00] cursor-pointer">
            <i className="fa-brands fa-instagram text-2xl"></i>
          </span>
          <span className="bg-[#f37b00] text-[#fefefe] px-4 py-2 rounded-lg hover:bg-[#ce1d00] cursor-pointer">
            Ver Apresentações
          </span>
        </div>
      </div>
    </div>
  );
};
