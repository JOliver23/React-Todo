import React from 'react';

const Todo = props => {
    const handleClick = e => {
        props.toggleComplete(props.todo.id);
    };
    return (
        <div onClick={handleClick} className={`todo ${props.todo.complete ? "complete" : ""}`}>
            <p>{props.todo.task}</p>
        </div>
    );
};

export default Todo;
