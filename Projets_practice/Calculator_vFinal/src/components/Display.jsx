import React from 'react'

const Display = ({displayValue}) => {
  return (
    <div>
        <input type="text" value={displayValue} readOnly/>
    </div>
  )
}

export default Display