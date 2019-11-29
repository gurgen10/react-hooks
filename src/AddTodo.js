import React, { useState } from 'react';
import PropTypes from 'prop-types';

function useInputValue (defoultValue) {
    const [value, setValue] = useState(defoultValue);
    return {
        bind: {
          value,
          onChange: (event) => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }

}

function AddTodo({ onCreate }) {
    const input = useInputValue('')
    function submitHandler (e) {
        e.preventDefault();
        if(input.value().trim()) {
            onCreate(input.value());
            input.clear();
        }

    }
    return (
        <form onSubmit={submitHandler}>
            <input {...input.bind}/>
            <button type='submit'>Add Todo</button>
        </form>
    )

}

AddTodo.propTypes = {
    onCreate: PropTypes.func
}

export default AddTodo;
