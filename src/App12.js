import React from "react";
import TodoItem from "./components/TodoItem";
import todoData from "./data/todoData";

class App12 extends React.Component {
  initTodos() {
    this.state.todoItems = todoData.map((todoItem) => (
      <TodoItem key={todoItem.id} todo={todoItem.todo} className="todo-item" />
    ));
  }

  changeTodos = () => {
    console.log(this.state.todoItems);
    console.log(this.state.todoItems.slice(0).reverse());

    this.setState({
      todoItems: this.state.todoItems.slice(0).reverse(),
    });
  };

  constructor() {
    super();
    this.state = {
      todoItems: null,
    };
    this.initTodos();
  }

  render() {
    return (
      <div>
        <button onClick={this.changeTodos}>Change Todos</button>
        <div className="todo-list">{this.state.todoItems}</div>;
      </div>
    );
  }
}

export default App12;
