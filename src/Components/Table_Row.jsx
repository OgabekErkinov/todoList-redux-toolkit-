import { Button, Checkbox, TableCell, TableRow } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { todoRemove } from "../redux/slices/Slice";
import React from 'react'
import { useDispatch } from 'react-redux';
import { addCheckedTodoWithDelay } from '../redux/slices/redux-thunk';

const Table_Row = ({item, idx, step}) => {
    const dispatch = useDispatch()

    const handleChange = (event, item) => {
        const checked = event.target.checked;
        dispatch(addCheckedTodoWithDelay(item.id, checked))
    };
    

  return (
                             <TableRow >
                                <TableCell align="center">{idx + 1}</TableCell>
                                <TableCell align="center">{item.name}</TableCell>

                               {/* this button won't be showed on deleted todos   */}
                                {step !== 2 && 
                                 <TableCell align="center">
                                       <Button
                                          color="error"
                                          onClick={() => dispatch(todoRemove(item.id))}
                                        >
                                         <DeleteForeverIcon />
                                       </Button>
                                </TableCell>}

                                {/* this button will be showed at only allTodos */}
                                {step === 1 && 
                                 <TableCell align="center">
                                      <Checkbox
                                          checked={item.checked}
                                          onChange={(e) => handleChange(e, item)} 
                                      />
                                </TableCell>}
                            </TableRow>
  )
}

export default Table_Row