import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <nav className="bg-purple-600 text-white py-3 px-6 flex justify-between items-center">
      <div className="flex space-x-4">
        {user ? (
          <>
            <Link to="/profile" className="hover:underline">
              Profile
            </Link>
            <Link to="/todos" className="hover:underline">
              Todos
            </Link>
          </>
        ) : (
          <Link to="/" className="hover:underline">
           
          </Link>
        )}
      </div>
      {user && (
        <button
          onClick={handleLogout}
          className="bg-white text-purple-600 px-3 py-1 rounded hover:bg-gray-200"
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
