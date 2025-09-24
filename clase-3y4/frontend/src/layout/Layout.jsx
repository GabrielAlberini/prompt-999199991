import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-gray-950 text-gray-200">
    <Header />
    <main className="flex-1 p-6">{children}</main>
    <Footer />
  </div>
)