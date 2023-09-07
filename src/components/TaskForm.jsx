import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const { createTask } = useContext(TaskContext);
  const [content, setcontent] = useState("");
  const [description, setdescription] = useState("");

  const handleSumbit = e => {
    e.preventDefault();
    if (content != "" && description != "") {
      createTask({
        content,
        description
      });
      setcontent("");
      setdescription("");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        className="bg-violet-950 p-10 mb-4 rounded-lg"
        onSubmit={handleSumbit}
      >
        <h1 className="text-2xl text-white text-center font-bold mb-3 ">
          Crea tu Tarea
        </h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={e => setcontent(e.target.value)}
          value={content}
          className="bg-slate-300 p-3 w-full mb-2 rounded-2xl"
        />
        <textarea
          placeholder="escribe su descipcion"
          onChange={e => setdescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2 rounded-2xl"
        />
        <button className="bg-indigo-500 px-2 py-1 text-white rounded-xl">
          Enviar Tarea
        </button>
      </form>
    </div>
  );
}
