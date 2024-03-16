import React from 'react'
import TodoItems from './TodoItems'

const TodoItemValues = ({todoItems}) => {
  return (
    <div>
        {todoItems.map((item) => <TodoItems todoName={item.name} todoDate={item.dueDate}></TodoItems>)}
    </div>
  )
}

export default TodoItemValues