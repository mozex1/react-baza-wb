import { ITask } from "./types";

const dictStatus = {
    completed: 'Выполнено',
    notCompleted: 'Не выполнено'
}

type Props = {
    task: ITask
}

const Task = ({task}: Props) => {
    const {title, description, createDate, status} = task;
    return (
        <div className="task">
            <p>{title}</p>
            <p>{description}</p>
            <p>{createDate}</p>
            <p>{dictStatus[status]}</p>
        </div>
    );
};

export default Task;