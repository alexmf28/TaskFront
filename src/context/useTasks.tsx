import {useContext} from 'react';
import { TaskContext } from './TaskContext';

export const useTasks = () => {
    const context = useContext(TaskContext)
    if (!context)throw new Error('useTasks debe estar dentro del proveedor TaskProvider')
    return context;  
}