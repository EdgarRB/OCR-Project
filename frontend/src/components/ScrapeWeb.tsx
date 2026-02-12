import { useState } from "react";

interface IScrapeWebProps {
  handleLoading: (loading: boolean) => void;
  setText: (text: string) => void;
}

const ScrapeWeb = ({ handleLoading, setText }: IScrapeWebProps) => {
  const [url, setUrl] = useState("");

  const handleScrape = async () => {
    handleLoading(true);
    setText("");

    const res = await fetch("http://localhost:3001/scrape", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });

    const data = await res.json();
    setText(data.text);
    handleLoading(false);
  };

  return (
    <>
      {/* Componente de scrapeo web  */}
      <p className="text-center mt-4">
        Enter a URL of a page or a url from a specific image
      </p>
      <div className="w-full flex flex-row gap-2 p-4 relative">
        <input
          type="text"
          placeholder="Enter URL"
          className="relative z-20 w-full bg-gray-100 h-10 pl-1 border-black border-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded focus:outline-0"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className=" bg-rose-200 z-20 h-10 border-2  border-black text-gray-800 px-4 py-2 rounded hover:bg-rose-300 cursor-pointer hover:-translate-y-0.5 hover:-translate-x-0.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
          onClick={handleScrape}
        >
          Scrape
        </button>
      </div>
    </>
  );
};

export default ScrapeWeb;
