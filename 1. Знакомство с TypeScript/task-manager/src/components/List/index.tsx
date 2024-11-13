import Task from '../Task';
import { ITask } from '../Task/types';

type Props = {
    tasks: ITask[]
}

const List = ({tasks} : Props) => {
    return (
        <div className='list'>
            {tasks.map((task) => {
                return <Task key={task.id} task={task}/>
            })}
        </div>
    );
};

export default List;