import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import Context from  './context';
import Loader from './loader';

const AddTodo = React.lazy(() => import('./AddTodo'));

function App() {
  const [ todos, setTodoes] = useState([]);
  const [ loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');

  

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
    try {
      if(isError) {
        throw Error('remove error')
      }
      console.log(isError);
      setTodoes(todos.filter(todo => todo.id !== id))

    } catch (err) {
      setError(err);

    }
    
  }

  function addTodo(title) {
    let newTodos = [];
    todos.push({
        title: title,
        id: Date.now(),
        complated: false
      }
    );
    newTodos.push(...todos);
    setTodoes(newTodos);
  }

  function makeError() {
    setIsError(!isError);
  }


  // if(isError) {
  //   throw new Error('heeey guys');
  // }
  if(error) throw  Error(error);
  return (
    
    <Context.Provider value={{toggleTodo, removeTodo, todos}}>
      
      <div className="wrapper">
      <button onClick={makeError}>Make Error <b style={{color: isError? 'red' : 'green'}}>{isError.toString().toUpperCase()}</b></button>
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
