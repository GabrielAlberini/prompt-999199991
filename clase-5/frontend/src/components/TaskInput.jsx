import { useRef, useState } from "react"

export const TaskInput = ({ onAdd }) => {
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const recognitionRef = useRef(null)

  const initRecognition = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Tu navegador no soporta reconocimiento de voz")
      return null
    }
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = "es-ES"
    recognition.continuous = true
    recognition.interimResults = false

    recognition.onresult = (event) => {
      const result = event.results[event.results.length - 1][0].transcript
      const capitalized = result.charAt(0).toUpperCase() + result.slice(1)
      setTranscript((prev) => (prev ? prev + " " + capitalized : capitalized))
    }

    recognition.onend = () => {
      setListening(false)
    }

    return recognition
  }

  const handleToggle = () => {
    if (listening) {
      recognitionRef.current?.stop()
    } else {
      if (transcript.trim()) {
        onAdd(transcript.trim())
        setTranscript("")
      }
      recognitionRef.current = initRecognition()
      recognitionRef.current?.start()
      setListening(true)
    }
  }

  const handleConfirm = () => {
    if (transcript.trim()) {
      onAdd(transcript.trim())
      setTranscript("")
    }
  }

  return (
    <div className="mt-4">
      <button
        onClick={handleToggle}
        className={`px-4 py-2 rounded text-white ${listening ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
          }`}
      >
        {listening ? "Detener" : "Comenzar grabación"}
      </button>
      {transcript && !listening && (
        <div className="mt-4">
          <textarea
            value={transcript}
            onChange={(e) => {
              const value = e.target.value
              const capitalized = value.charAt(0).toUpperCase() + value.slice(1)
              setTranscript(capitalized)
            }}
            rows="3"
            cols="40"
            className="w-full p-2 rounded bg-gray-800 text-gray-200 border border-gray-600"
          />
          <br />
          <button
            onClick={handleConfirm}
            className="mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
          >
            Confirmar tarea
          </button>
        </div>
      )}
    </div>
  )
}