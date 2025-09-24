import { Link } from "react-router-dom";

export const Header = () => (
  <header className="bg-gray-900 text-gray-200 p-4 flex justify-between items-center">
    <h1 className="text-lg font-bold">TodoApp</h1>
    <nav className="space-x-4">
      <Link className="hover:text-blue-400" to="/">
        Login
      </Link>
      <Link className="hover:text-blue-400" to="/mis-tareas">
        Mis Tareas
      </Link>
    </nav>
  </header>
)