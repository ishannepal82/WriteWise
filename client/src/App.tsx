import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { Toaster } from "sonner"
import Layout from "./Layout"
import AuthPage from "./pages/AuthPage"

export default function App() {
  return (
   <BrowserRouter>
    <Toaster richColors position="top-center" />
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Route>
    </Routes>
   </BrowserRouter>
  )
}
