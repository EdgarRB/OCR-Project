interface ButtonsSectionProps {
  handlePreviewText: () => void;
}
const ButtonsSection = ({ handlePreviewText }: ButtonsSectionProps) => {
  return (
    <div className="flex flex-row gap-6 justify-items-start p-4">
      <button
        className="bg-rose-200 border-2 h-10 border-black border-b-4 border-r-4 text-gray-800 px-4 py-2 rounded hover:bg-rose-300 cursor-pointer"
        onClick={handlePreviewText}
      >
        Preview Text
      </button>
      <button className="bg-rose-200 border-2 h-10 border-black border-b-4 border-r-4 text-gray-800 px-4 py-2 rounded hover:bg-rose-300 cursor-pointer">
        Download
      </button>
    </div>
  );
};

export default ButtonsSection;
