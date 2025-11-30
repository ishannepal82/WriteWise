import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Header() {
  const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/features', label: 'Features' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/about', label: 'About' },
  ];

  return (
    <header className="relative backdrop-blur-md bg-white/70 border-b border-gray-200/50 sticky top-0 z-50">
      <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="content">
          <h1 className="text-primary text-4xl font-semibold font-body leading-[3rem]">
            WriteWise
          </h1>
        </div>

        {/* Centered Navigation */}
        <nav className="md:flex gap-4 text-lg font-medium hidden">
          <ul className="flex gap-8 text-md font-medium">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `relative text-primary/80 hover:text-primary transition-colors duration-300
                    ${isActive ? 'text-primary' : ''}`
                  }
                >
                  {item.label}
                  <span
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary origin-left scale-x-0 transition-transform duration-300 
                    group-hover:scale-x-100 
                    data-[active=true]:scale-x-100"
                    data-active={undefined}
                  />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button className="md:hidden block" onClick={() => {}}>
          <Menu />
        </button>
      </div>
    </header>
  );
}