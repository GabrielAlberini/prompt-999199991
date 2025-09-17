import { useState } from "react"

export const useTasks = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (text) => {
    const formattedText = text.charAt(0).toUpperCase() + text.slice(1)
    const newTask = {
      id: Date.now(),
      text: formattedText,
      createdAt: new Date(),
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  return { tasks, addTask, removeTask, toggleTask }
}
