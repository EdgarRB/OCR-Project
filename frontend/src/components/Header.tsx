const Header = () => {
  return (
    <header className="shadow border-b-[3px] border-black h-12">
      <div className="max-w-full mx-auto py-2 px-8 sm:px-6 lg:px-8 flex flex-start gap-2">
        <button className=" bg-emerald-200 hover:bg-emerald-300 text-slate-900 pl-2 pr-2 rounded border-2 border-black relative z-20 cursor-pointer hover:-translate-y-0.5 hover:-translate-x-0.5  transition-all duration-300">
          From Image URL
        </button>
        <button className=" bg-emerald-200 hover:bg-emerald-300 text-slate-900 pl-2 pr-2 rounded border-2 border-black relative z-20 cursor-pointer hover:-translate-y-0.5 hover:-translate-x-0.5  transition-all duration-300">
          Upload Image
        </button>
      </div>
    </header>
  );
};

export default Header;
