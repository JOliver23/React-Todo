import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


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
    console.log("bk: App.js: App: toggleComplete: taskId: ", taskId);
    this.setState({
      todos: this.state.todos.map(todo => {
        if(taskId === todo.id) {
          return {
            ...todo,
            complete: !todos.complete
          };
        }
        return todo;
      })
    });
  };

  addTask = taskName => {
    console.log("bk: App.js: addTask: taskName: ", taskName);
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
      <div className="app-container">
        <div className="header">
          <h2>Welcome to Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList 
          toggleComplete={this.toggleComplete}
          todos={this.state.todos}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
