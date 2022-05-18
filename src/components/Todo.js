import React from "react";

const Todo = () => {
  return (
    <div>
      <div className="navbar">
        <h1>React Todo App</h1>
      </div>
      <div>
        <form className="add-todo-container">
          <input type="text" placeholder="Task name" />
          <textarea
            placeholder="Description"
            name=""
            id=""
            cols="30"
            rows="4"
          ></textarea>
          <button className="submit-btn" type="submit">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Todo;
