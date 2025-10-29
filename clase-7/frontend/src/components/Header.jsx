import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export const Header = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <header className="bg-gray-900 text-gray-200 p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">TodoApp</h1>
      <nav className="space-x-4">
        {!user ? (
          <>
            <Link className="hover:text-blue-400" to="/login">
              Login
            </Link>
            <Link className="hover:text-blue-400" to="/register">
              Registro
            </Link>
          </>
        ) : (
          <>
            <span className="text-sm mr-2">Hola, {user.email}</span>
            <Link className="hover:text-blue-400" to="/">
              Mis Tareas
            </Link>
            <button
              onClick={handleLogout}
              className="hover:text-red-400 ml-2"
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  )
}
