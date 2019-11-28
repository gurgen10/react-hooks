import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const todos = [
    {id: 1, complated: false, title: 'Buy bread'},
    {id: 2, complated: false, title: 'Buy milk'},
    {id: 3, complated: false, title: 'Buy oil'},
  ]

  return (
    <div className="wrapper">
      <h1>React Hooks</h1>
      <TodoList todos={todos}/>      
    </div>
  );
}



export default App;
