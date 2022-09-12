import { useState } from "react";

import "../styles/components/EditItemForm.scss";
import { ArrowUpOnSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";

const EditItemForm = ({ body, onUpdate, onCancel }) => {
  const [newValue, setNewValue] = useState(body ?? "");

  const handleClick = (e) => {
    e.preventDefault();
    if (newValue.length > 0) {
      onUpdate(newValue);
    } else alert("Why you need an empty value?");
  };

  return (
    <form className="form">
      <input
        className="form__input"
        type="text"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
      />
      <button className="form__cancel" type="button" onClick={onCancel}>
        <span>Cancel</span> <XCircleIcon className="form__icon" />
      </button>
      <button className="form__submit" type="submit" onClick={handleClick}>
        <span>Update</span> <ArrowUpOnSquareIcon className="form__icon" />
      </button>
    </form>
  );
};

export default EditItemForm;
