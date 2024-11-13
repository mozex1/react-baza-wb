import Task from '../Task';
import { ITask } from '../Task/types';

type Props = {
    tasks: ITask[];
    onDelete: (id: number) => void;
}

const List = ({tasks, onDelete} : Props) => {
    const isEmpty = !tasks || tasks.length < 1;
    const emptyList = <h3>Задач нет</h3>;

    const list = isEmpty ? emptyList : tasks.map((task) => {
        return <Task key={task.id} task={task} onDelete={onDelete}/>
    })

    return (
        <div className='list'>
            {list}
        </div>
    );
};

export default List;