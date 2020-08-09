import React from "react";
import TodoItem from "./components/TodoItem";

function App4() {
  const styles = { backgroundColor: "blue" };

  return (
    // <div style={styles}>
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App4;
