import React, { useContext } from 'react';
import PropTypes from 'prop-types'

import ToDoItem from './ToDoItem'
import Context from './context';

const style = {
    ul: {
        listStyle: 'none',
        margin: '20px'

    }
    
}

function TodoList (props) {
    const { todos } = useContext(Context)
    return (
        <>
        <h3>To do list</h3>
        <ul style={style.ul}>
        { todos.map( (todo, index) => {
            return (<ToDoItem key={todo.id} todo={todo} index={index}/>)
        })}
        </ul>
        </>
    );
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object)

}

export default TodoList;
