import { createContext, useEffect, useState } from "react";
import { createTaskRequest, deleteTasksRequest, getTasksRequest, updateTaskRequest } from "../api/tasks";
import { Task, createTask, updateTask } from '../interfaces/task.interface';

interface TaskContextValue {
  tasks: Task[];
  createTask: (task: createTask) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  updateTask: (id:string, task: updateTask) => Promise<void>;
}

export const TaskContext = createContext<TaskContextValue>({
  tasks: [],
  createTask: async () => {},
  deleteTask: async () => {},
  updateTask: async () => {},
});

interface props {
  children: React.ReactNode;
}

export const TaskProvider: React.FC<props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasksRequest()
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const createTask = async (task: createTask) => {
    const res = await createTaskRequest(task);
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  const deleteTask = async (id: string) => {
    const res = await deleteTasksRequest(id);
    if(res.status === 204){
      setTasks(tasks.filter((task) => task._id !== id));      
    }  
  };

  const updateTask = async (id:string, task: updateTask) => {
    const res = await updateTaskRequest(id, task);
    const data = await res.json();
    setTasks(
      tasks.map((task) => (task._id === id ? { ...task, ...data } : { ...task}))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
