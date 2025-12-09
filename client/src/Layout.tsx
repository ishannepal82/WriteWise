import Header from './components/Header'
import { Outlet, useLocation } from 'react-router-dom'


export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
   <>
    {isHome && <Header />}
    <Outlet />
   </>
  )
}
