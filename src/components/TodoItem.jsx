import { useState } from "react";
import { useModal } from "../hooks/useModal";

import EditItemForm from "./EditItemForm";
import Modal from "./Modal";

import "../styles/components/TodoItem.scss";

import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";

const TodoList = ({
  item,
  handleDeleteItem,
  handleUpdate,
  handleCompleted,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const [isOpenModal, openModal, closeModal] = useModal();

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

      <p className="task__body" onClick={() => openModal()}>
        {item.body}
      </p>

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
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <p>{item.body}</p>
      </Modal>
    </li>
  );
};

export default TodoList;
