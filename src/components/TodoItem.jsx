import { useState } from "react";
import EditItemForm from "./EditItemForm";

import "../styles/components/TodoItem.scss";

import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";

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

  const onCancel = () => setIsEdit(false);

  return isEdit ? (
    <EditItemForm body={item.body} onUpdate={onUpdate} onCancel={onCancel} />
  ) : (
    <li className="task">
      <label className="task__checkLabel">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => handleCompleted(item.id)}
        />
        <span></span>
      </label>

      <p className="task__body">{item.body}</p>

      <div className="task__actions">
        <button
          className="task__btn task__edit"
          onClick={() => setIsEdit(true)}
        >
          <PencilIcon />
        </button>
        <button
          className="task__btn task__delete"
          onClick={() => handleDeleteItem(item.id)}
        >
          <TrashIcon />
        </button>
      </div>
    </li>
  );
};

export default TodoList;
