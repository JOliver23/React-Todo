import React from 'react';

const todos = [{
  task: "",
  complete: false,
  id: ""
}]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state 

  constructor() {
    super();
    this.state ={
      todos
    }
  }

  toggleComplete = taskId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(taskId === todo.id) {
          return {
            ...todos,
            complete: !todos.complete
          };
        }
        return todo;
      })
    });
  };

  addTask = taskName => {
    this.setState({
      todos: [
        ...this.state.todos,
        { task: taskName, complete: false, id: Date.now()}
      ]
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(task => {
        return !task.complete
      })
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to Todo App!</h2>
      </div>
    );
  }
}

export default App;
