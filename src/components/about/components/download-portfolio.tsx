import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DownloadPortfolio = () => {
  const pdfUrl = "/downloads/portfolio-sankofa.pdf";

  return (
    <div className="flex justify-center my-12">
      <a
        href={pdfUrl}
        download="Portfolio-Projeto-Sankofa.pdf"
        className="bg-[#ce1d00] hover:bg-[#f37b00] text-[#fefefe] font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2"
      >
        <FontAwesomeIcon icon={faFilePdf} width={20} />
        Baixar Portfólio Completo (PDF)
      </a>
    </div>
  );
};
