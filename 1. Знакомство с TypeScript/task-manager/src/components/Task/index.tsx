import { ITask } from "./types";

const dictStatus = {
    completed: 'Выполнено',
    notCompleted: 'Не выполнено'
}

type Props = {
    task: ITask,
    onDelete: (id: number) => void;
}

const Task = ({task, onDelete}: Props) => {
    const {title, description, createDate, status, id} = task;
    return (
        <div className="task">
            <p>{title}</p>
            <p>{description}</p>
            <p>{createDate}</p>
            <p>{dictStatus[status]}</p>
            <button onClick={() => onDelete(id)} className="btn-main">Удалить</button>
        </div>
    );
};

export default Task;