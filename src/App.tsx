
import { useState } from 'react'
import './App.css'
import { Task } from './interfaces/Task'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

interface Props {
  title?: string
}

function App({ title }: Props) {

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Learn React', description: 'Learning React', completed: false }
  ])

  const getCurrentTimeStamp = (): number => new Date().getTime()

  const addNewTask = (task: Task) => {
    setTasks([...tasks, { ...task, id: getCurrentTimeStamp(), completed: false }])
  }

  const deleteTask = (id: number) => setTasks(tasks.filter(task => task.id != id))

  return (
    <>
      <nav>
        <h2>{title}</h2>
      </nav>
      <div>
        <TaskForm addNewTask={addNewTask} />
      </div>
      <div>
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </>
  )
}

export default App
