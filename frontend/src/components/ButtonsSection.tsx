import { downloadPDF } from "../actions/Downloads";
import DownloadSelector from "./DownloadSelector";

interface ButtonsSectionProps {
  handlePreviewText: () => void;
  text: string;
}
const ButtonsSection = ({ handlePreviewText, text }: ButtonsSectionProps) => {
  const handleSelectedDownload = (format: string) => {
    switch (format) {
      case "pdf":
        downloadPDF(text);
    }
  };

  return (
    <div className="flex flex-row gap-6 justify-items-start p-4">
      <button
        className="bg-rose-200 border-2 h-10 text-gray-800 px-4 py-2 rounded hover:bg-rose-300 cursor-pointer border-black overflow-hidden hover:-translate-y-0.5 hover:-translate-x-0.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
        onClick={handlePreviewText}
      >
        Preview Text
      </button>
      <DownloadSelector onSelect={handleSelectedDownload} />
    </div>
  );
};

export default ButtonsSection;
