import Heading from "./components/Heading";
import AddInput from "./components/AddInput";
import TodoItemValues from "./components/TodoItemValues";

import "./App.css";
import { useState } from "react";

function App() {
  // const temptodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Like this video",
  //     dueDate: "4/10/2023",
  //   },
  // ];

  const [todoItems,settodoItems] = useState([])

  const handleAddButton = (Task, DueDate) => {
    let newItem = [...todoItems,{ name: Task, dueDate: DueDate }];
    settodoItems(newItem); 
  };

  const handleDeleteButton = (deleteItemName)  => {
    const newlyArray = todoItems.filter(item => item.name!==deleteItemName)
    settodoItems(newlyArray)
  }

  return (
    <>
      <Heading></Heading>
      <AddInput onNewItem={handleAddButton}></AddInput>

      <TodoItemValues todoItems={todoItems} onDeleteButton={handleDeleteButton}></TodoItemValues>
    </>
  );
}

export default App;
