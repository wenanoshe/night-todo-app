import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

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
    item.completed = true;
    setTodos(temp);
  };

  return (
    <div>
      <form>
        <input type="text" onChange={handleChange} value={newTodoBody} />
        <button type="submit" onClick={handleClick}>
          Add
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>To do</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.length > 0 ? (
            todos.map((item) => (
              <TodoItem
                item={item}
                key={item.id}
                handleDeleteItem={handleDeleteItem}
                handleUpdate={handleUpdate}
                handleCompleted={handleCompleted}
              />
            ))
          ) : (
            <tr>
              <td span="3">Without Todos, creates one</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
