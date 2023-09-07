import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, settasks] = useState([]);

  function createTask(task) {
    settasks([
      ...tasks,
      {
        title: task.content,
        description: task.description,
        id: tasks.length
      }
    ]); // copia todo el arreglo anterior y añade el segundo elemento
  }

  function deleteTask(idtask) {
    settasks(tasks.filter(task => task.id !== idtask));
  }

  useEffect(() => {
    settasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
