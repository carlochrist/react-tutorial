import React from "react";

function TodoItem(props) {
  console.log(props);

  const completedStyle = {
    fontStyle: "italic",
    color: "cdcdcd",
    textDecoration: "line-through",
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />

      <p style={props.item.completed ? completedStyle : null}>
        {props.item.todo}
      </p>
    </div>
  );
}

export default TodoItem;

// {props.item.completed ? (
//   <p>
//     <s>{props.item.todo}</s>
//   </p>
// ) : (
//   <p>{props.item.todo}</p>
// )}
