const Header = () => {
  return (
    <header className="shadow border-b-[3px] border-black h-12">
      <div className="max-w-full mx-auto py-2 px-8 sm:px-6 lg:px-8 flex flex-start">
        <div className="relative">
          <div className="absolute inset-0 rounded-xl translate-y-0.5 translate-x-0.5 bg-black"></div>
          <button className=" bg-emerald-200 hover:bg-emerald-300 rounded-xl border-2 border-black relative z-20">
            OCR Text Generator
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
