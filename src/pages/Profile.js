import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); 
    navigate('/'); 
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h1 className="text-3xl font-semibold text-center text-purple-600 mb-6">User Profile</h1>
      {user ? (
        <div className="space-y-4">
          <p className="text-lg">
            <span className="font-semibold text-gray-700">Email: </span>
            {user.email}
          </p>
         
          <button
            onClick={handleLogout}
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none"
          >
            Logout
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-500">No user data found</p>
      )}
    </div>
  );
};

export default Profile;
