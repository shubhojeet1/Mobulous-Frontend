import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
          <h1 className="text-3xl font-bold text-center text-purple-700">To-Do App</h1>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/todos"
              element={
                <PrivateRoute>
                  <div className="space-y-4">
                    <AddTodo />
                    <TodoList />
                  </div>
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
