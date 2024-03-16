import React from "react";
import { useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const AddInput = ({ onNewItem }) => {
  const [Task, setTask] = useState();
  const [DueDate, setDueDate] = useState();

  const handleTaskFeild = (e) => {
    setTask(e.target.value);
  };

  const handleDateField = (e) => {
    setDueDate(e.target.value);
  };

  const HandleAddButton = (e) => {
    e.preventDefault()
    onNewItem(Task, DueDate);
    setTask("");
    setDueDate("");
  };

  return (
    <center className="margin-left">
      <form className="row" onSubmit={HandleAddButton}>
        <div className="col-2">
          <input
            type="text"
            placeholder="Enter Your Task Here"
            onChange={handleTaskFeild}
          />
        </div>
        <div className="col-2">
          <input type="date" onChange={handleDateField} />
        </div>
        <div className="col-2">
          <button
            type="submit"
            class="btn btn-success"
            
          >
            <MdOutlineAddCircleOutline />
          </button>
        </div>
      </form>
    </center>
  );
};

export default AddInput;
