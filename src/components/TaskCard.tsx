import { Task } from "../interfaces/Task"


interface Props {
  task: Task
  deleteTask: (id: number) => void
}


const TaskCard = ({ task, deleteTask }: Props) => {
  return (
    <>
      <div key={task.id}>
        <h2>{task.title}</h2>
        <button onClick={() => task.id && deleteTask(task.id)}>X</button>
      </div>
    </>
  )
}

export default TaskCard
