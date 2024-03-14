import React from 'react';
import './App.css';
import Login from './components/login/login.component';

function App() {
  return (
    <div className="App">

      <h1 className="text-3xl font-bold underline">
        Spotify UI
      </h1>
      <p>
        <a href="https://tailwindcss.com/docs" className="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
      </p>
      <Login/>
    </div>
  );
}

export default App;
