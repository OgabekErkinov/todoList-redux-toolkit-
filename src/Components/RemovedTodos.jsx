import { TableBody } from '@mui/material';
import { useSelector } from 'react-redux';
import Table_Row from './Table_Row';

const RemovedTodos = ({ step }) => {
    const removedTodos = useSelector((state) => state.todos.removedTodos);

    return (
        <TableBody>
            {Array.isArray(removedTodos) &&
                removedTodos.map((item,idx) => (
                    <Table_Row item={item} 
                               idx={idx}
                               key={idx} 
                               step={step} />
                ))}
        </TableBody>
    );
};

export default RemovedTodos;
