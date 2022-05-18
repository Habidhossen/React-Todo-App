import React from "react";

const Todo = ({ todoList }) => {
  return (
    <div>
      {todoList.map((todo) => (
        <>
          <div className="todo-card">
            <div>
              <h1 className="card-title">{todo.name}</h1>
              <p className="card-desc">{todo.desc}</p>
            </div>
            <div className="right-div">
              <h4 className="delete-btn">X</h4>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Todo;
