import { useState } from "react";

export default function InputBar({ onSubmit }: { onSubmit?: (value: string) => void }) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim()) return;
    onSubmit?.(value.trim());
    setValue("");
  };

  return (
    <div className="w-full flex justify-center py-8">
      <div className="w-[900px] flex flex-col gap-4">
        <textarea
          className="w-full h-[150px] p-5 rounded-sm border border-gray-300 resize-none text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
          placeholder="Write your message, letter, or prompt…"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={handleSend}
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 bg-primary text-background px-10 py-2 rounded-xl shadow-md transition"
            type="button"
          > 
            Send
          </button>
          <button
            onClick={handleSend}
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 border-primary border-2 text-primary hover:bg-red-500 hover:text-background hover:border-red-500 px-10 py-2 rounded-xl shadow-md transition"
            type="button"
          > 
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
