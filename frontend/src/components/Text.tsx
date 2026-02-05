type TextProps = {
  text: string;
};

const TextComponent = ({ text }: TextProps) => {
  return (
    <>
      {text && (
        <div className="p-4  overflow-y-auto bg-sky-100 border-2 border-black rounded pl-6 pr-6 ml-4 mr-4 mb-10">
          <h3 className="font-semibold mb-2 text-slate-700">Texto extraído:</h3>
          <p className="whitespace-pre-wrap text-slate-700 leading-relaxed">
            {text}
          </p>
        </div>
      )}
    </>
  );
};

export default TextComponent;
