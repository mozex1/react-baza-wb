import React from 'react';
import { IFilter } from './types';

type Props = {
    filters: IFilter[];
    updateTasks: (id: number) => void;
}

const Filters = ({filters, updateTasks} : Props ) => {
    return (
        <div className='filters'>
            {filters.map(filter => <button key={filter.id} onClick={() => updateTasks(filter.id)} className='btn-main'>{filter.name}</button>)}
        </div>
    );
};

export default Filters;