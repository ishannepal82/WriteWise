import { useState } from 'react'
import { mockNotes } from './mock/dashboard'
import { Home, Settings, User, Menu } from 'lucide-react'
import UserCard from './dashboardPage/usercard'

type SideBarProps = {
    toggleSidebar: () => void;
};

export default function SideBar({toggleSidebar} : SideBarProps) {
    const [isShown, setIsShown] = useState(true);
    return (
        <aside className="w-64 h-full flex flex-col border-r-2 p-4 space-y-6 bg-background text-text ">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold tracking-wide text-primary">WriteWise</h1>
                <div className="md:hidden block" onClick={() => toggleSidebar()} >
                    <Menu />
                </div>
            </div>

            <nav className="flex flex-col gap-2">
                <a
                    href="#"
                    className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-secondary transition-colors duration-200"
                >
                    <User className="text-accent" />
                    <span className="text-lg">Dashboard</span>
                </a>

                <a
                    href="#"
                    className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-secondary transition-colors duration-200"
                >
                    <Home className="text-accent" />
                    <span className="text-lg">Home</span>
                </a>

                <a
                    href="#"
                    className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-secondary transition-colors duration-200"
                >
                    <Settings className="text-accent" />
                    <span className="text-lg">Settings</span>
                </a>
            </nav>

            <div className="chats flex flex-col overflow-y-auto">
                <button onClick={() => setIsShown(!isShown)} className='text-start'>
                    <h1 className='text-xl font-bold tracking-wide text-primary'>Notes/Chats</h1>
                </button>
                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isShown ? 'opacity-100 max-h-screen translate-y-0' : 'opacity-0 max-h-0 -translate-y-2 pointer-events-none'
                        }`}
                >
                    {isShown && (
                        mockNotes.map(note => (
                            <button
                                key={note.id ?? note.title}
                                className='flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-secondary transition-colors duration-200 w-full'
                            >
                                <span>{note.title}</span>
                            </button>
                        ))
                    )}
                </div>
            </div>

            <div className="user flex items-end justify-end w-full">
                <UserCard />
            </div>

            <div className="mt-auto text-sm text-secondary">
                © 2025 WriteWise. All rights reserved.
            </div>

        </aside>
    )
}
