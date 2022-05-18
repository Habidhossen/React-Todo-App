import React from "react";

const Todo = ({ todoList, setTodoList }) => {
  const handleDelete = (id) => {
    const remaining = todoList.filter((data) => data.id !== id);
    setTodoList(remaining);
  };

  return (
    <div>
      {todoList.map((todo) => (
        <div>
          <div className="todo-card">
            <div>
              <h1 className="card-title">{todo.name}</h1>
              <p className="card-desc">{todo.desc}</p>
            </div>
            <div className="right-div">
              <button
                onClick={() => handleDelete(todo.id)}
                className="delete-btn"
              >
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
