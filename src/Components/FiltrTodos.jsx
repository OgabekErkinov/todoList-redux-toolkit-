import { TableBody } from '@mui/material';
import React from 'react'
import Table_Row from './Table_Row';


const FiltrTodos = ({step, todos, searchTerm}) => {
    

    const filtrTodos = searchTerm && Array.isArray(todos) 
                                  && todos.length > 10 
    ? todos.filter((todo) => todo.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : todos;

  return (
    <TableBody>
         {Array.isArray(filtrTodos) && filtrTodos.map((item, idx) => {
                        return <Table_Row item={item} 
                                              idx={idx}
                                              step={step} 
                                              key={idx}/>
         })}
    </TableBody>
  )
}

export default FiltrTodos
