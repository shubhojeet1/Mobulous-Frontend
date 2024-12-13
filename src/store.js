import { configureStore, createSlice } from "@reduxjs/toolkit";

const loadTodosFromLocalStorage = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

const todosSlice = createSlice({
  name: "todos",
  initialState: loadTodosFromLocalStorage(),
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
    deleteTodo: (state, action) => {
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(filteredTodos));
      return filteredTodos;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions;

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});
