import React from 'react'

const AddInput = () => {
  return (
    <center className='margin-left'>
        <div class="row">
    <div class="col-2">
        <input type="text" />
    </div>
    <div class="col-2">
        <input type="date" />
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success">Add</button>
    </div>
  </div>
    </center>
  )
}

export default AddInput