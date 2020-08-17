import React from "react";
import TodoItem from "./components/TodoItem";
import todoData from "./data/todoData";

function App8() {
  const styles = { backgroundColor: "blue" };

  const mappedData = todoData.map((todoItem) => (
    <TodoItem key={todoItem.id} item={todoItem} />
  ));

  console.log(todoData);
  console.log(mappedData);

  return (
    // <div style={styles}>
    <div className="todo-list">{mappedData}</div>
  );
}

export default App8;
