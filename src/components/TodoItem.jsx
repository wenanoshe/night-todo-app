import { useState } from "react";
import EditItemForm from "./EditItemForm";

const TodoList = ({
  item,
  handleDeleteItem,
  handleUpdate,
  handleCompleted,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const onUpdate = (newValue) => {
    handleUpdate(item.id, newValue);
    setIsEdit(false);
  };

  return isEdit ? (
    <tr>
      <td span="3">
        <EditItemForm body={item.body} onUpdate={onUpdate} />
      </td>
    </tr>
  ) : (
    <tr>
      <td>
        <input type="checkbox" onChange={() => handleCompleted(item.id)} />
      </td>
      <td>{item.body}</td>
      <td>
        <button onClick={() => setIsEdit(true)}>Edit</button>
        <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TodoList;
