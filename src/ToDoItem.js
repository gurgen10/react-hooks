import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
    },
    input: {
        marginRight: '1rem'
    }
}

function ToDoItem({ todo, index }) {
  const classes = [];

  if(todo.complated) {
    classes.push('done');
  }
  const { toggleTodo, removeTodo } = useContext(Context);
  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input type='checkbox' style={styles.input} checked={todo.complated} onChange={() => toggleTodo(todo.id)}/>
        <strong>{index + 1}</strong>
        {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)} className='rm'>&times;</button>
    </li>
  );
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired

}

export default ToDoItem;

