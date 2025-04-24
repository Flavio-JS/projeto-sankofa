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
      <span className="text-[#ce1d00] text-sm">{date}</span>
      <h3 className="text-xl font-bold text-[#2c0f00] mt-2 mb-3 group-hover:text-[#ce1d00] transition">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="text-[#ce1d00] hover:text-[#f37b00] cursor-pointer">
        Leia mais →
      </span>
    </article>
  );
};
