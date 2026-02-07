import { useEffect, useState } from "react";

type TextProps = {
  text: string;
  onClose: () => void;
};

const TextComponent = ({ text, onClose }: TextProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative p-4  overflow-y-auto bg-sky-100 border-2 border-black rounded pl-6 pr-6 ml-4 mr-4 mb-10">
      <button
        aria-label="Cerrar"
        className=" absolute top-2 right-2 w-8 h-8 flex items-center justify-center border-2 border-black
              rounded-md
              bg-sky-50
              text-slate-700
              font-extrabold
              text-lg
              rotate-1
              hover:-rotate-2
              hover:bg-sky-200
              hover:text-slate-900
              transition
            "
        onClick={onClose}
      >
        x
      </button>
      <h3 className="font-semibold mb-2 text-slate-700">Texto extraído:</h3>
      <p className="whitespace-pre-wrap text-slate-700 leading-relaxed">
        {text}
      </p>
      {/* Button to scroll to top after scrolling down to a certain point */}
      {showScrollTop && (
        <button
          aria-label="Volver arriba"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-12 right-6 w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-sky-50 text-slate-700 font-extrabold text-lg rotate-1 hover:-rotate-2 hover:bg-sky-200 transition shadow-sm"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default TextComponent;
