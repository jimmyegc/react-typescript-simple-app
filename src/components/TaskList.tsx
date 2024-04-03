import { Task } from '../interfaces/Task'
import TaskCard from './TaskCard'

interface Props {
  tasks: Task[],
  deleteTask: (id: number) => void
}

const TaskList = ({ tasks, deleteTask }: Props) => {
  return (<>
    <main>
      <div>
        {tasks.map(task => (
          <div>
            <TaskCard task={task} deleteTask={deleteTask} />
          </div>
        ))}
      </div>
    </main>
  </>)
}

export default TaskList
