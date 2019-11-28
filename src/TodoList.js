import React from 'react';
import PropTypes from 'prop-types'

import ToDoItem from './ToDoItem'

const style = {
    ul: {
        listStyle: 'none',
        margin: '20px'

    }
    
}

function TodoList (props) {
    return (
        <>
        <h3>To do list</h3>
        <ul style={style.ul}>
        {props.todos.map( (todo, index) => {
            return (<ToDoItem key={todo.id} todo={todo} index={index}/>)
        })}
        </ul>
        </>
    );
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired

}

export default TodoList;
