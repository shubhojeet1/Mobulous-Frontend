import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';


const loadTodosFromLocalStorage = () => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : []; 
};

const initialState = {
  todos: loadTodosFromLocalStorage(),
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
    
      const newTodo = { id: nanoid(), text: action.payload.text };
      state.todos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoIndex = state.todos.findIndex(todo => todo.id === id);
      if (todoIndex !== -1) {
        state.todos[todoIndex].text = text;
      }
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
