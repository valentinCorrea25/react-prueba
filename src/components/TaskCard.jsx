import {TaskContext} from "../context/TaskContext"
import { useContext } from "react"

export default function TaskCard({task}) {

  const {deleteTask} = useContext(TaskContext);

  return (
    <div className="bg-violet-950 p-10 rounded-md">
        <h1 className="text-3xl font-bold capitalize text-white">{task.title}</h1>
        <p className="text-sm text-gray-400">{task.description}</p>
        <button className="bg-indigo-400 p-3 rounded-md mt-10 hover:bg-red-400 transition-all text-white" onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
  </div>    
  )
}
