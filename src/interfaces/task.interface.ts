export interface Task {
    _id:string,
    title:string,
    description?:string,
    done?:boolean,
    createdAt?:Date,
    updatedAt?:Date,
};

export type createTask = Omit<Task, '_id' | 'createdAt' | 'updatedAt'>;

export type updateTask = Partial<createTask>;