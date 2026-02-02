const ScrapeWeb = () => {
  return (
    <>
      {/* Componente de scrapeo web  */}
      <p className="text-center mt-4">
        Enter a URL of a page or a url from a specific image
      </p>
      <div className="h-full w-full flex flex-row gap-2 p-4">
        <input
          type="text"
          placeholder="Enter URL"
          className="w-3/4 h-10 p-2 border-black border-2 rounded"
        />
        <button className="bg-rose-200 h-10 border-2 border-black border-b-4 border-r-4 text-gray-800 px-4 py-2 rounded hover:bg-rose-300 cursor-pointer">
          Scrape
        </button>
      </div>
    </>
  );
};

export default ScrapeWeb;
