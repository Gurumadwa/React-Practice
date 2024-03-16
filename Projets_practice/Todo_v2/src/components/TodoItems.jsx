import React from "react";

const TodoItems = ({todoName, todoDate}) => {
  return (
    <center className = "margin-left">
      <div class="row">
        <div class="col-2">{todoName}</div>
        <div class="col-2">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-success">
            Delete
          </button>
        </div>
      </div>
    </center>
  );
};

export default TodoItems;
