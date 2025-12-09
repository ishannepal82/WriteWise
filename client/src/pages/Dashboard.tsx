import { Search, UserCircle, Menu} from "lucide-react"
import { useState } from "react"
import InputBar from "../components/dashboardPage/inputBar"
import { mockNotes } from "../components/mock/dashboard"
import NotesCard from "../components/dashboardPage/NotesCard"
import SideBar from "../components/SideBar"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 md:hidden transition-opacity ${
          sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setSidebarOpen(true)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 h-full w-64 bg-background border-r
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <SideBar  toggleSidebar={toggleSidebar}/>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="w-full flex items-center justify-between p-3 md:justify-end">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={ () => toggleSidebar()}
            aria-label="Open sidebar"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Search */}
          <form
            className="flex items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="search" className="sr-only">
              Search documents
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search documents by name..."
              className="w-[220px] sm:w-[280px] md:w-[400px] px-4 py-2 rounded-full border
              focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="p-2 bg-primary text-background rounded-full hover:scale-105 transition"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </header>

        {/* Page Content */}
        <main className="flex-grow flex flex-col p-4">
          {/* Greeting */}
          <section className="flex flex-col items-center py-10">
            <UserCircle className="w-20 h-20 text-primary mb-2" />
            <h1 className="text-4xl font-semibold text-primary text-center">
              Welcome, Ishan
            </h1>
            <p className="text-lg opacity-80 mt-2 text-center">
              Anything on your mind today?
            </p>
          </section>

          {/* Input */}
          <section className="mb-8">
            <InputBar />
          </section>

          {/* Notes */}
          <section>
            <h2 className="text-center text-2xl font-bold mb-6">
              Recent Activities!
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
              {mockNotes.length > 0 ? (
                mockNotes.map((note) => (
                  <NotesCard
                    key={note.id}
                    title={note.title}
                    desc={note.content}
                  />
                ))
              ) : (
                <p className="col-span-full text-gray-500">
                  No recent activities yet.
                </p>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
