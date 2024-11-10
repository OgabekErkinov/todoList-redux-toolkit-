import { addCheckedTodos, removeCheckedTodo } from "./Slice";

export const addCheckedTodoWithDelay = (id, checked) => (dispatch) => {
    dispatch(addCheckedTodos({ id, checked }));
    if (checked) {
        setTimeout(() => {
            dispatch(removeCheckedTodo(id));
        }, 500);
    }
};