import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"
const initialState = {
    allTodos : [],
    removedTodos : [],
    checkedTodos : []
}

export const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers : {
        todoAdd : (state, action) => {
            const newTodo = {
                id: uuidv4(),
                name: action.payload,
                checked: false
              };
            state.allTodos.push(newTodo)
        },

        addCheckedTodos: (state, action) => {
            const { id, checked } = action.payload;
            const todo = state.allTodos.find(todo => todo.id === id);
            if (todo) {
                todo.checked = checked;
                if (checked) {
                    state.checkedTodos.push(todo);
                } else {
                    state.checkedTodos = state.checkedTodos.filter(item => item.id !== id);
                }
            }
        },

        removeCheckedTodo: (state, action) => {
            state.allTodos = state.allTodos.filter(item => item.id !== action.payload);
        },
        

        todoRemove: (state, action) => {
            const removedTodo = state.allTodos.find((item) => item.id === action.payload) || state.checkedTodos.find((item) => item.id === action.payload);
            if (removedTodo) {
                state.removedTodos.push(removedTodo);
                state.checkedTodos = state.checkedTodos.filter((item)=> item.id !== action.payload)
            }
            state.allTodos = state.allTodos.filter((item) => item.id !== action.payload);
        },

        todoClear: (state, action) => {
            switch (action.payload) {
                case 1:
                    state.allTodos = [];
                    break;
                case 2:
                    state.removedTodos = [];
                    break;
                case 3:
                    state.checkedTodos = [];
                    break;
                default:
                    break;
            }
        }

    }
})


export const {todoAdd, addRemovedTodo, addCheckedTodos, todoRemove, removeCheckedTodo, todoClear} = todoSlice.actions
export default todoSlice.reducer