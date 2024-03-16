import React from 'react'
import TodoItems from './TodoItems'
import DisplayNoItems from './DisplayNoItems'

const TodoItemValues = ({todoItems, onDeleteButton}) => {
  return (
    <div>
        <DisplayNoItems todoItems={todoItems}></DisplayNoItems>


        {todoItems.map((item) => <TodoItems todoName={item.name} todoDate={item.dueDate} onDeleteButton={onDeleteButton}></TodoItems>)}


    </div>
  )
}

export default TodoItemValues