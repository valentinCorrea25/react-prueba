import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function Tasklist() {
  
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-5xl text-zinc-900 text-center font-bold mt-10 ">No hay tareas</h1>;
  }

  return (
    <>      
        <div className="grid grid-cols-4 gap-4 overflow-hidden">
        {tasks.map((task) => (
            <TaskCard task={task} key={task.id}/>
        ))}
        </div>
    </>
  );
}

