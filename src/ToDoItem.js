import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
    },
    input: {
        marginRight: '1rem'
    }
}

function ToDoItem({todo, index}) {
  return (
    <li style={styles.li}>
      <span>
        <input type='checkbox' style={styles.input}/>
        <strong>{index + 1}</strong>
        {todo.title}
      </span>
      <button>&times;</button>
    </li>
  );
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired

}

export default ToDoItem;

