import { ChangeEvent, FormEvent, useState } from "react";
import { createTaskRequest } from "../api/tasks";
import { useTasks } from "../context/useTasks";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
  });
  const { createTask } = useTasks();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask(task);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border border-gray-700 p-2 bg-zinc-800 w-full block rounded-lg my-2"
          type="text"
          name="title"
          placeholder="Agrega un titulo"
          onChange={handleChange}
        />
        <textarea
          className="border border-gray-700 p-2 bg-zinc-800 w-full block rounded-lg my-2"
          name="description"
          rows={3}
          placeholder="Agrega una descripción"
          onChange={handleChange}
        ></textarea>
        <label className="inline-flex items-center gap-x-2">
          <input
            type="checkbox"
            className="h-5 w-5 text-indigo-600"
            onChange={(e) => setTask({ ...task, done: !task.done })}
          />
          <span>Terminado</span>
        </label>
        <button className="bg-indigo-500 px-3 block py-2 w-full">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
