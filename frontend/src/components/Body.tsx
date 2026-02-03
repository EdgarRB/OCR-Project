import { useState } from "react";
import ScrapeWeb from "./ScrapeWeb";

const Body = () => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-900 flex flex-col gap-8">
      <div className="h-16">
        <h1 className="text-center text-2xl font-semibold">
          Genera texto a partir de imágenes usando OCR con las distintas
          opciones soportadas.
        </h1>
        <p className="text-center text-gray-600">
          Soporta imágenes individuales, URLs de páginas web con imágenes y URLs
          de imágenes directas.
        </p>
      </div>
      <div className="relative ">
        <div className="h-64 w-full bg-gray-900 absolute inset-0 rounded-xl translate-y-1 translate-x-1"></div>
        <div className="h-64 bg-amber-100 z-20 border-2 shadow-lg border-black rounded-xl relative">
          {/* Logica para elegir que tipo de generacion de texto elegimos  */}
          <ScrapeWeb handleLoading={setLoading} setText={setText} />
          {loading ||
            (!loading && (
              <div className="w-full flex items-center justify-center">
                <div className="w-2/3 bg-orange-200 rounded-full ">
                  <div
                    className="bg-red-400  text-xs font-medium text-black text-center m-1 leading-none rounded-full h-4 flex items-center justify-center"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
            ))}
          {text && (
            <div className="p-4 max-h-32 overflow-y-auto">
              <h3 className="font-semibold mb-2">Texto extraído:</h3>
              <p className="whitespace-pre-wrap">{text}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
