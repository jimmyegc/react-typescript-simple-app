import { ChangeEvent, FormEvent, useState } from "react"
import { Task } from "../interfaces/Task"

interface Props {
  addNewTask: (task: Task) => void
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const initialState = {
  title: '',
  description: ''
}

const TaskForm = ({ addNewTask }: Props) => {

  const [task, setTask] = useState(initialState)

  const handleInputChange = ({ target: { name, value } }: HandleInputChange) => {
    setTask({ ...task, [name]: value })
    //evt.preventDefault()    
    //console.log(target.name)
    //console.log(target.value)
  }

  const handleNewTask = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    addNewTask(task)
    setTask(initialState)
  }

  return (<>
    <h1>Add Task</h1>
    <form onSubmit={handleNewTask}>
      <input type="text" placeholder='Write a title' name="title"
        onChange={handleInputChange}
        value={task.title}
      />
      <br />
      <textarea name="description" cols={30} rows={10}
        onChange={handleInputChange}
        value={task.description}
      ></textarea>
      <br />
      <button>Save</button>
    </form>
  </>)
}

export default TaskForm
