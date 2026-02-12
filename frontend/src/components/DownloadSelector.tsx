import { useState, useRef, useEffect } from "react";

type DownloadFormat = "pdf" | "txt" | "epub";

interface FormatOption {
  id: DownloadFormat;
  label: string;
  icon: string;
}

interface DownloadSelectorProps {
  onSelect: (format: DownloadFormat) => void;
}

const formats: FormatOption[] = [
  { id: "pdf", label: "PDF", icon: "📄" },
  { id: "txt", label: "TXT", icon: "📝" },
  { id: "epub", label: "EPUB", icon: "📚" },
];

export default function DownloadSelector({ onSelect }: DownloadSelectorProps) {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="relative h-10 inline-block">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="bg-rose-200 hover:bg-rose-300 h-10 cursor-pointer border-2 border-black rounded px-4 py-2 hover:-translate-y-0.5 hover:-translate-x-0.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 "
      >
        Download
      </button>

      {open && (
        <div
          role="menu"
          className="absolute mt-2 w-40 bg-amber-50 border-2 border-black rounded-lg shadow-lg"
        >
          <div className="px-3 py-2 text-sm font-semibold border-b border-black h-10">
            Download as
          </div>

          {formats.map((format) => (
            <button
              key={format.id}
              onClick={() => {
                onSelect(format.id);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 w-full text-left cursor-pointer hover:bg-amber-100 rounded"
            >
              <span>{format.icon}</span>
              <span>{format.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
