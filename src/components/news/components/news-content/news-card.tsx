import Image from "next/image";

interface NewsCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const NewsCard = ({
  title,
  date,
  description,
  image,
  imageAlt,
}: NewsCardProps) => {
  return (
    <article className="group">
      <div className="relative h-[200px] rounded-xl overflow-hidden mb-4">
        <Image
          width={200}
          height={200}
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
          src={image}
          alt={imageAlt}
        />
      </div>
      <span className="text-text-engineering-orange text-sm">{date}</span>
      <h3 className="text-xl font-bold text-text-black-bean mt-2 mb-3 group-hover:text-text-engineering-orange transition">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="text-text-engineering-orange hover:text-text-orange-wheel cursor-pointer">
        Leia mais →
      </span>
    </article>
  );
};
