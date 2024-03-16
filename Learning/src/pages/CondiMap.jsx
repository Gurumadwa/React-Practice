import React from 'react'

const CondiMap = () => {

    let items = ['rice','jowar','salad'];
    // let items = []

  return (
    <div>

        <h3>Items are::</h3>

        {items.length === 0 ? <h3> No Items in the Array </h3> : null}

        {items.map( (item) => ( <div key={item}>{item}</div> ) )}



    </div>
  )
}

export default CondiMap