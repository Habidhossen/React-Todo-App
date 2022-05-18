import React, { useState } from "react";
import Todo from "./Todo";

const AllTodos = () => {
  const [todoList, setTodoList] = useState([]);
  //   const dummyData = [
  //     {
  //       id: 1,
  //       name: "Sleeping",
  //       desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, necessitatibus!",
  //     },
  //     {
  //       id: 2,
  //       name: "playing",
  //       desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, necessitatibus!",
  //     },
  //   ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const desc = event.target.desc.value;
    const todo = { name: name, desc: desc };
    const previous = [...todoList, todo];
    setTodoList(previous);
  };
  //   console.log(todoList);

  return (
    <div>
      <div className="navbar">
        <h1>React Todo App</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="add-todo-container">
          <input name="name" type="text" placeholder="Task name" />
          <textarea
            placeholder="Description"
            name="desc"
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
        {/* {todoList.map((singleTodo) => (
          <Todo key={singleTodo.id} singleTodo={singleTodo} />
        ))} */}
        <Todo todoList={todoList} />
      </div>
    </div>
  );
};

export default AllTodos;
