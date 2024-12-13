import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../features/todosSlice';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (id, updatedText) => {
    if (updatedText) {
      dispatch(updateTodo({ id, text: updatedText }));
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-purple-600">Todo List</h2>
      <ul className="space-y-3">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-3 bg-white border-2 border-gray-200 rounded-md shadow-sm hover:bg-gray-50"
          >
            <span>{todo.text}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleUpdate(todo.id, prompt('Update text:', todo.text))}
                className="px-3 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
