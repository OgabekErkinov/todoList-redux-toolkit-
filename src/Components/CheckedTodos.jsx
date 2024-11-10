import { TableBody } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Table_Row from './Table_Row'

const CheckedTodos = ({step}) => {
    const checkedTodos = useSelector((state) => state.todos.checkedTodos)
  return (
    <TableBody>
    {Array.isArray(checkedTodos) && checkedTodos?.map((item,idx) => {
        return <Table_Row item={item} 
                          idx={idx} 
                          step={step}
                          key={idx}/>
    })}

   </TableBody>
  )
}

export default CheckedTodos
