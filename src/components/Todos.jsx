import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

import "../styles/components/Todos.scss";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import TaskSvg from "../assets/task-svgrepo-com.svg";

// Todos
const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];

const Todos = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodoBody, setNewTodoBody] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleClick = (e) => {
    e.preventDefault();

    if (newTodoBody.length > 0) {
      const todoCopy = [...todos];

      const id = crypto.randomUUID();
      const newItem = { id, body: newTodoBody, completed: false };
      todoCopy.unshift(newItem);

      setTodos(todoCopy);

      setNewTodoBody("");
    } else alert("Add some data");
  };

  const handleChange = (e) => {
    setNewTodoBody(e.target.value);
  };

  const handleDeleteItem = (id) => {
    const confirmDeletion = confirm("Are you sure that you want to delete it?");
    if (confirmDeletion) {
      const newTodo = todos.filter((item) => item.id !== id);
      setTodos(newTodo);
      return;
    }
    return;
  };

  const handleUpdate = (id, newValue) => {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.body = newValue;
    setTodos([...temp]);
  };

  const handleCompleted = (id) => {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.completed = !item.completed;
    setTodos([...temp]);
  };

  return (
    <div className="todos">
      <form className="todos__form">
        <input
          className="todos__input"
          type="text"
          placeholder="Write a new todo"
          onChange={handleChange}
          value={newTodoBody}
        />
        <button className="todos__add" type="submit" onClick={handleClick}>
          <span>Add</span> <PlusCircleIcon className="todos__icon" />
        </button>
      </form>
      {todos.length > 0 ? (
        <ul className="todos__list">
          {todos.map((item) => (
            <TodoItem
              item={item}
              key={item.id}
              handleDeleteItem={handleDeleteItem}
              handleUpdate={handleUpdate}
              handleCompleted={handleCompleted}
            />
          ))}
        </ul>
      ) : (
        <div className="todos__noTodos">
          <img
            className="todos__noTodosImg"
            src={TaskSvg}
            alt="Pin a task vector svgrepo.com"
          />
          <p className="todos__stm">Without todos, create one!</p>
        </div>
      )}
    </div>
  );
};

export default Todos;
