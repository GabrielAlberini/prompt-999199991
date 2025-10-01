import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Layout } from "../layout/Layout"
import { loginApi } from "../services/apiAuth"
import { useAuth } from "../context/AuthContext"

export const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const data = await loginApi(email, password) // { token }
      login({ email, token: data.token })          // guardar en contexto
      navigate("/")
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="w-full max-w-sm bg-gray-900 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-gray-200 border border-gray-600"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-gray-200 border border-gray-600"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
              {loading ? "Ingresando..." : "Entrar"}
            </button>
          </form>

          {error && (
            <p className="mt-4 text-red-500 font-semibold text-center">{error}</p>
          )}
        </div>
      </div>
    </Layout>
  )
}
