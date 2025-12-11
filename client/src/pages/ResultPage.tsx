import { useState } from 'react';
import LexicalEditor from '../components/lexicalEditor';
import SideBar from '../components/SideBar';
import { File,ShareIcon } from 'lucide-react';

export default function ResultPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <div className="flex min-h-screen bg-background">

        {/* Mobile Sidebar Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-black/40 md:hidden transition-opacity ${sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          onClick={() => setSidebarOpen(false)} // Close on overlay click
        />

        {/* Sidebar */}
        <aside
          className={`fixed md:static z-50 min-h-screen h-full w-64 bg-background border-r
            transform transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0`}
        >
          <SideBar toggleSidebar={toggleSidebar} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <LexicalEditor onChangeHtml={(html) => console.log(html)} />
        </main>

      </div>

      {/* Share Button */}
      <div className="actions fixed bottom-4 right-4">
        <button className="flex gap-2 px-6 py-2 rounded-lg bg-primary text-background mx-4 my-2">
          <span>Export </span>
          <File />
        </button>
        <button className="flex gap-2 border border-primary px-4 py-2 rounded-lg bg-background text-text">
          <span>Share</span>
          <ShareIcon />
        </button>
      </div>
    </>
  );
}
