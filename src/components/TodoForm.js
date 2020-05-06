import React from 'react';

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state= {
            newTodoItem: ""
        }
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            newTodoItem: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
        return (
            <form>
                <input 
                    type="text"
                    name="todo"
                />
            </form>
        )
    }

};

export default TodoForm;