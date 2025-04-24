import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export type Post = {
  id: number;
  title: string;
  type: string;
  date: string;
  status: string;
  statusColor: string;
  image: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: "Festival de Cultura Afro-Brasileira 2025",
    type: "Notícia",
    date: "12 Mar 2025",
    status: "Publicado",
    statusColor: "bg-green-100 text-green-800",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/eb67dfbd72-461e3bb764a20afe79b8.png",
  },
  {
    id: 2,
    title: "Oficina de Percussão Básica",
    type: "Evento",
    date: "10 Mar 2025",
    status: "Rascunho",
    statusColor: "bg-yellow-100 text-yellow-800",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/09d60098dc-188300d4a39a1ece5243.png",
  },
];

export const ContentTable = () => {
  return (
    <div
      id="content-table"
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Título
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Data
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {posts.map((post) => (
            <TableRow key={post.id} post={post} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const TableRow = ({ post }: { post: Post }) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4">
        <div className="flex items-center">
          <Image
            className="h-10 w-10 rounded-lg object-cover mr-3"
            src={post.image}
            alt="Post thumbnail"
            width={200}
            height={200}
          />
          <div>
            <div className="font-bold text-gray-900">{post.title}</div>
            <div className="text-sm text-gray-500">{post.type}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">{post.date}</td>
      <td className="px-6 py-4">
        <span
          className={`px-2 py-1 text-xs font-bold rounded-full ${post.statusColor}`}
        >
          {post.status}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-center gap-3 space-x-3">
          <button className="text-blue-600 hover:text-blue-800">
            <FontAwesomeIcon icon={faPen} width={20} />
          </button>
          <button className="text-red-600 hover:text-red-800">
            <FontAwesomeIcon icon={faTrash} width={20} />
          </button>
        </div>
      </td>
    </tr>
  );
};
