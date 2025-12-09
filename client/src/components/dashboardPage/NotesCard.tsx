import { FileText } from "lucide-react";

export default function NotesCard({title, desc} : {title: string, desc: string}) {
  return (
    <div
      className="
        w-[310px] h-[120px]
        bg-primary/20 
        backdrop-blur-sm
        border border-primary/30
        rounded-2xl 
        p-4
        shadow-lg
        shadow-primary/10
        hover:shadow-primary/20
        transition-all 
        duration-300 
        hover:scale-[1.03]
        cursor-pointer
        flex flex-col justify-between
      "
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/30 text-primary">
        <FileText size={24} />
      </div>

      {/* Title / Footer */}
      <div className="flex flex-col">
        <h2 className="text-text font-semibold text-lg">{title}</h2>
        <p className="text-text/70 text-sm">{desc}</p>
      </div>
    </div>
  );
}
