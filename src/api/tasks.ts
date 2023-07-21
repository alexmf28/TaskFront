import { createTask, updateTask } from '../interfaces/task.interface';
const API_URL = 'http://localhost:3000/api'

export const createTaskRequest = (task:createTask) => 
    fetch( `${API_URL}/tasks`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    });

export const getTasksRequest = () =>
    fetch(`${API_URL}/tasks`, {
        method: 'GET',
    });

export const deleteTasksRequest = (id:string) =>
    fetch(`${API_URL}/tasks/${id}`, {
        method: 'DELETE',
    });

export const updateTaskRequest = (id:string, task:updateTask) => 
    fetch( `${API_URL}/tasks/${id}`, {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    });