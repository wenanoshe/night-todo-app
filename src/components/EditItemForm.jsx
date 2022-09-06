import { useState } from "react";

const EditItemForm = ({ body, onUpdate }) => {
  const [newValue, setNewValue] = useState(body ?? "");

  const handleClick = (e) => {
    e.preventDefault();
    if (newValue.length > 0) {
      onUpdate(newValue);
    } else alert("Why you need an empty value?");
  };

  return (
    <form>
      <input
        type="text"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
      />
      <button type="submit" onClick={handleClick}>
        Update
      </button>
    </form>
  );
};

export default EditItemForm;
