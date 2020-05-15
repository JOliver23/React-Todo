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
        this.props.addTask(this.state.newTodoItem);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="todo"
                    value={this.state.addTask}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }

};

export default TodoForm;