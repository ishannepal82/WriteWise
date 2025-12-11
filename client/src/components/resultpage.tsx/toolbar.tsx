import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo,
  Redo
} from 'lucide-react';

export default function ToolBar() {
  return (
    <div className="w-full border-b bg-background py-2 flex items-center gap-2">
      
      {/* Text Formatting */}
      <div className="flex items-center gap-2">
        <button className="rounded hover:bg-muted" title="Bold">
          <Bold size={18} />
        </button>
        <button className="rounded hover:bg-muted" title="Italic">
          <Italic size={18} />
        </button>
        <button className="rounded hover:bg-muted" title="Underline">
          <Underline size={18} />
        </button>
      </div>

      <div className="h-5 w-px bg-border mx-1" />

      {/* Alignment */}
      <div className="flex items-center gap-1">
        <button className="p-2 rounded hover:bg-muted" title="Align Left">
          <AlignLeft size={18} />
        </button>
        <button className="p-2 rounded hover:bg-muted" title="Align Center">
          <AlignCenter size={18} />
        </button>
        <button className="p-2 rounded hover:bg-muted" title="Align Right">
          <AlignRight size={18} />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 rounded hover:bg-muted" title="Undo">
          <Undo size={18} />
        </button>
        <button className="p-2 rounded hover:bg-muted" title="Redo">
          <Redo size={18} />
        </button>
      </div>

      <div className="flex-1" />

      {/* Extra Actions */}
      <button className="px-6 py-2 rounded border hover:bg-muted text-sm">
        Save
      </button>
    </div>
  );
}
