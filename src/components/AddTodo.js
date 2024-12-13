import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todosSlice';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = { id: Date.now(), text };
      dispatch(addTodo(newTodo)); 
      setText('');
    }
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new task"
        className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-purple-600"
      />
      <button
        onClick={handleAdd}
        className="mt-3 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none"
      >
        ✚ Add Task
      </button>
    </div>
  );
};

export default AddTodo;
