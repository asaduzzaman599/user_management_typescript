import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';
import Users from './Component/Users';

function App() {
  return (
    <div className="App">
      <h1> Hello</h1>
      <Users></Users>
      <Counter></Counter>
    </div>
  );
}

export default App;
