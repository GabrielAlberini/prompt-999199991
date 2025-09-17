import { useNavigate } from "react-router-dom"
import { Layout } from "../layout/Layout"
import { useState } from "react"

export const Login = () => {
  const navigate = useNavigate()
  const [pin, setPin] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (pin === "1234") {
      setError("")
      setSuccess(true)
      setTimeout(() => navigate("/mis-tareas"), 1000) // redirige con un pequeño delay
    } else {
      setSuccess(false)
      setError("Credencial incorrecta. Intenta nuevamente.")
    }
  }

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="w-full max-w-sm bg-gray-900 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="Ingresa tu código numérico"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-gray-200 border border-gray-600"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
              Entrar
            </button>
          </form>

          {error && (
            <p className="mt-4 text-red-500 font-semibold text-center">{error}</p>
          )}
          {success && (
            <p className="mt-4 text-green-500 font-semibold text-center">
              Acceso concedido. Redirigiendo...
            </p>
          )}
        </div>
      </div>
    </Layout>
  )
}