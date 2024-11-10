import { Box, Table, TableContainer, TableHead, TableRow, TableCell, Paper, Input, Stack, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoAdd, todoClear } from "../redux/slices/Slice";
import { CheckCircleOutline, Clear, DeleteForever, FormatListBulleted } from "@mui/icons-material";
import FiltrTodos from "./FiltrTodos";
import RemovedTodos from "./RemovedTodos";
import CheckedTodos from "./CheckedTodos";




const AllTodos = () => {

    const todos = useSelector((state) => state.todos.allTodos);
    
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const [searchTerm, setSearchTerm] = useState('')
    const [step, setStep] = useState(1)

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            dispatch(todoAdd(inputValue));
            setInputValue('');    
        }        
    };

    return (
        <Box height="auto" width="auto" >
            <Stack direction={'row'} justifyContent={'center'}>
                <Button onClick={() => setStep(1)}><FormatListBulleted/> </Button>
                <Button onClick={() => setStep(2)}><DeleteForever/> </Button>
                <Button onClick={() => setStep(3)}><CheckCircleOutline/> </Button> 
                <Button onClick = {() => dispatch(todoClear(step))}><Clear/> </Button>
            </Stack>
            <TableContainer component={Paper} 
                            sx={{ display: 'flex', 
                                  flexDirection: 'column', 
                                  alignItems: 'center',
                                  maxHeight : '35rem',
                                  overflow : 'scrollX'}}>
                           {todos.length > 10 && 
                                    step === 1 &&
                                      <Stack direction="row" 
                                             spacing={1} 
                                             justifyContent="center" 
                                             sx={{ width: '80%' }} 
                                             padding={2}
                                             >
                                            <Input
                                               placeholder="search todo"
                                               sx={{ padding: '5px', width: '80%' }}
                                               onChange={(e) => setSearchTerm(e.target.value)} />
                                      </Stack>}
                   {
                    step === 1 && 
                    <Stack direction="row" 
                          spacing={1} 
                          justifyContent="center" 
                          sx={{ width: '80%' }} 
                          padding={2}>
                         <Input
                            placeholder="Add a new todo"
                            sx={{ padding: '5px', width: '80%' }}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} />
                        <Button variant="contained" 
                                size="medium" 
                                onClick={handleAddTodo}
                                >
                                Add
                        </Button>
                    </Stack>
                   }
                <Table aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">T/r</TableCell>
                            <TableCell align="center">Name</TableCell>
                            {step !== 2 && <TableCell align="center">Delete</TableCell>}
                            {step === 1 && <TableCell align="center">Check</TableCell>}
                        </TableRow>
                    </TableHead>
                    {step === 1 && <FiltrTodos step = {step} todos = {todos} searchTerm = {searchTerm}/>}
                    {step === 2 && <RemovedTodos step={step}/>}
                    {step === 3 && <CheckedTodos step={step}/>}
                   
                </Table>
            </TableContainer>
        </Box>
    );
};

export default AllTodos;
