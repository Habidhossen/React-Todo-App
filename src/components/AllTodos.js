import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

const AllTodos = () => {
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const desc = event.target.desc.value;
    const data = { id: uuidv4(), name: name, desc: desc };
    const todo = [...todoList, data];
    setTodoList(todo);
    event.target.reset();
  };

  return (
    <div>
      <div className="navbar">
        <h1>React Todo App</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="add-todo-container">
          <input name="name" type="text" placeholder="Task name" required />
          <textarea
            placeholder="Description"
            name="desc"
            id=""
            cols="30"
            rows="4"
            required
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
        <Todo todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
};

export default AllTodos;
