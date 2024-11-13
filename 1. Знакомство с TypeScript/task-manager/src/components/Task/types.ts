export type TaskStatus = 'completed' | 'notCompleted';

export interface ITask {
    id: number;
    title: string;
    description: string;
    createDate: string;
    status: TaskStatus;
}