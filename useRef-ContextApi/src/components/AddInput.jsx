import React, { useRef } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const AddInput = ({ onNewItem }) => {

  const refTask = useRef()
  const refDueDate = useRef();

  const HandleAddButton = (e) => {
    e.preventDefault()
    const Task = refTask.current.value
    const DueDate = refDueDate.current.value
    onNewItem(Task, DueDate);
  };

  return (
    <center className="margin-left">
      <form className="row" onSubmit={HandleAddButton}>
        <div className="col-2">
          <input
            type="text"
            placeholder="Enter Your Task Here"
            ref={refTask}
          />
        </div>
        <div className="col-2">
          <input type="date" ref={refDueDate} />
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
