// src/App.tsx
import React, { useState } from 'react';
import Login from './components/login';
import Signup from './components/signup';
import './App.css';

const App: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        {showLogin ? <Login /> : <Signup />}
        <button onClick={toggleForm} className="mt-4 text-blue-500 hover:underline focus:outline-none">
          {showLogin ? 'Switch to Signup' : 'Switch to Login'}
        </button>
      </div>
    </div>
  );
};

export default App;
