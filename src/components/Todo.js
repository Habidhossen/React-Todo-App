import React from "react";

const Todo = ({ singleTodo }) => {
  const { name, desc } = singleTodo;

  return (
    <div className="todo-card">
      <div>
        <h1 className="card-title">{name}</h1>
        <p className="card-desc">{desc}</p>
      </div>
      <div className="right-div">
        <h4 className="delete-btn">X</h4>
      </div>
    </div>
  );
};

export default Todo;
