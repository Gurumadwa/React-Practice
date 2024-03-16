import React from 'react'

const DisplayNoItems = ({todoItems}) => {
  return (
    <div>
          {todoItems.length===0 ? <h3>No Items, Enjoy!!</h3> : null}
    </div>
  )
}

export default DisplayNoItems