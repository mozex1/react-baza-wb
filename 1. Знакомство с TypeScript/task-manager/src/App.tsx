import { useCallback, useState } from 'react';
import List from './components/List';
import Filters from './components/Filters';
import './App.css';

import { ITask, TaskStatus } from './components/Task/types';
import { IFilter } from './components/Filters/types';

const initTasks: ITask[] = [
  {
    id: 1,
    title: 'Подготовить отчет',
    description: 'Собрать данные за прошлый месяц и подготовить презентацию.',
    createDate: '2024-05-01',
    status: 'notCompleted'
  },
  {
    id: 2,
    title: 'Позвонить клиенту',
    description: 'Уточнить детали следующей встречи и обсудить условия контракта.',
    createDate: '2024-05-02',
    status: 'completed'
  },
  {
    id: 3,
    title: 'Организовать собрание',
    description: 'Собрать команду и обсудить проектную документацию.',
    createDate: '2024-05-03',
    status: 'notCompleted'
  },
  {
    id: 4,
    title: 'Проверить почту',
    description: 'Просмотреть и ответить на важные новые письма.',
    createDate: '2024-05-04',
    status: 'completed'
  },
  {
    id: 5,
    title: 'Закупить канцтовары',
    description: 'Заказать карандаши, ручки и бумагу для офиса.',
    createDate: '2024-05-05',
    status: 'notCompleted'
  }
];

export const filters: IFilter[] = [
  {
    id: 1,
    name: 'По имени',
    type: 'name'
  },
  {
    id: 2,
    name: 'По статусу',
    type: 'status'
  },
]

const sortByStatus = (a: ITask, b: ITask) => {
  const statusOrder: Record<TaskStatus, number> = {
      completed: 0,
      notCompleted: 1
  };

  return statusOrder[a.status] - statusOrder[b.status];
}

const sortByName = (a: ITask, b: ITask) => {
  return a.title.localeCompare(b.title);
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>(initTasks);

  const updateTasksFromFilters = useCallback((id: number) => {
    const curr = filters.find(filter => filter.id === id);
    if(!curr) return;
    setTasks(prev => {
      if(curr.type === 'name') return [...prev].sort(sortByName);
      if(curr.type === 'status') return [...prev].sort(sortByStatus);
      return prev
    });
  }, [])

  const deleteTask = (id: number) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }
  
  return (
    <div className="App">
      <h1>Менеджер задач</h1>
      <div className='control'>      
        <Filters filters={filters} updateTasks={updateTasksFromFilters}/>
      </div>
      <List tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
