import React from "react";
import Todo from "./Todo";

const AllTodos = () => {
  const dummyData = [
    {
      id: 1,
      name: "Sleeping",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, necessitatibus!",
    },
    {
      id: 2,
      name: "playing",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, necessitatibus!",
    },
  ];

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
      <div>
        {dummyData.map((singleTodo) => (
          <Todo key={singleTodo.id} singleTodo={singleTodo} />
        ))}
      </div>
    </div>
  );
};

export default AllTodos;
