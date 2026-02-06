import { useEffect, useState } from "react";
import ScrapeWeb from "./ScrapeWeb";
import LoadingProgress from "./LoadingProgress";
import TextComponent from "./Text";
import ButtonsSection from "./ButtonsSection";

const Body = () => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [showText, setShowText] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setLoadingProgress((prev) => (prev >= 100 ? 0 : prev + 20));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-8 text-gray-900 flex flex-col gap-8">
        <div className="h-16">
          <h1 className="text-center text-2xl font-semibold">
            Generate text from images using OCR with the different supported
            options.
          </h1>
          <p className="text-center text-gray-600">
            It supports individual images, URLs of web pages containing images,
            and direct image URLs.
          </p>
        </div>
        <div className="relative ">
          <div className="h-64 w-full bg-gray-900 absolute inset-0 rounded-xl translate-y-1 translate-x-1"></div>
          <div className="h-64 bg-amber-100 z-20 border-2 shadow-lg border-black rounded-xl relative flex flex-col">
            {/* Logica para elegir que tipo de generacion de texto elegimos  */}
            <ScrapeWeb handleLoading={setLoading} setText={setText} />
            <LoadingProgress loading={loading} progress={loadingProgress} />
            {text && (
              <ButtonsSection
                handlePreviewText={() => setShowText(!showText)}
              />
            )}
          </div>
        </div>
      </div>
      <TextComponent
        text={text}
        show={showText}
        onClose={() => setShowText(false)}
      />
    </>
  );
};

export default Body;
