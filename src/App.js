import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import Context from  './context';
import Loader from './loader';
import Counter from "./Counter";

const AddTodo = React.lazy(() => import('./AddTodo'));

function App() {
  const [ todos, setTodoes] = useState([]);
  const [ loading, setLoading] = useState(true);
  const [ count, setCount] = useState(0);
  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(todos => setTimeout(() => {
      setTodoes(todos);
      setLoading(false);
    }, 2000));

  }, []);

  function toggleTodo(id) {
    

    setTodoes(todos.map(todo => {
      if(todo.id === id) {
        todo.complated = !todo.complated
      }
      return todo;
    }));
  }

  function removeTodo(id) {
    setTodoes(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    let newTodos = [];
    let todo = {
      title: title,
      id: Date.now(),
      complated: false
    }
    todos.push(todo);
    newTodos.push(...todos);
    setTodoes(newTodos);

  }
  const [isError, setIsError] = useState(false);
  function makeError() {
    setIsError(true);
  }
  if(isError) {
    throw new Error('Opps');
  }

  return (
    
    <Context.Provider value={{toggleTodo, removeTodo, todos}}>
      <Counter 
        count={count} 
        onCountDown={() => setCount(count + 1)} 
        onCountUp={() => setCount(count - 1)}/>
      <div className="wrapper">
        <button onClick={makeError}>Make Error</button>
      <h1>React Hooks</h1>
      <React.Suspense fallback={<p>Loading...</p>}>
        <AddTodo onCreate={addTodo}/>
      </React.Suspense>
      {loading && <Loader/>}
      {todos.length ? (<TodoList />) : loading ? null : (<p>No todos to show</p>)}      
    </div>
    </Context.Provider>
  );
}



export default App;
