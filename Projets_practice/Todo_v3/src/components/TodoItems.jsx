import React from "react";
import { MdDelete } from "react-icons/md";

const TodoItems = ({ todoName, todoDate, onDeleteButton }) => {
  return (
    <center className="margin-left">
      <div class="row">
        <div class="col-2">{todoName}</div>
        <div class="col-2">{todoDate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success"
            onClick={() => onDeleteButton(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </center>
  );
};

export default TodoItems;
