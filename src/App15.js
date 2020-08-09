import React from "react";
import TodoItem from "./components/TodoItem";
import todoData from "./data/todoData";

class App15 extends React.Component {
  //   initTodos() {
  //     this.state.todoItems = todoData.map(
  //       (todoItem) => (
  //         <TodoItem
  //           key={todoItem.id}
  //           todo={todoItem}
  //           className="todo-item"
  //           handleChange={this.handleChange}
  //         />
  //       ),
  //       console.log(this.state.todoItems)
  //     );
  //   }

  changeTodos = () => {
    console.log(this.state.todos);
    console.log(this.state.todos.slice(0).reverse());

    this.setState({
      todos: this.state.todos.slice(0).reverse(),
    });
  };

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

      return {
        todos: updatedTodos,
      };
    });

    // console.log(this.state.todoItems);
    // this.setState((prevState) => {
    //   console.log(prevState);
    //   // todoItems: prevState.filter(x => x.id === id).map(x => !x.todo.completed)
    // });

    // this.setState((prevState) => {
    //   return {
    //     todoItems: prevState.count + 1,
    //   };
    // });
  }

  constructor() {
    super();
    this.state = {
      todos: todoData,
    };
    // this.initTodos();
    // console.log(this.state.todoItems.filter((x) => x.id === 1));

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        className="todo-item"
        handleChange={this.handleChange}
      />
    ));

    return (
      <div>
        <button onClick={this.changeTodos}>Change Todos</button>
        <div className="todo-list">{todoItems}</div>;
      </div>
    );
  }
}

export default App15;
