import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";
import React from "react";

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        openModal ? setOpenModal(false) : setOpenModal(true);
        console.log("el open modal ahora es: " + openModal);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
