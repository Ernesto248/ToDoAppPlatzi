import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const [textareaValue, setTextareaValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(textareaValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      {" "}
      <label>Esribe tu nuevo TODO</label>
      <textarea
        placeholder="Cortar cebolla para el almuerzo"
        value={textareaValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
