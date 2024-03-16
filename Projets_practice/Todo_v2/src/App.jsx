import Heading from "./components/Heading";
import AddInput from "./components/AddInput";
import TodoItemValues from "./components/TodoItemValues";

import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "4/10/2023",
    },
  ];

  return (
    <>
      <Heading></Heading>
      <AddInput></AddInput>

      <TodoItemValues todoItems={todoItems}></TodoItemValues>
    </>
  );
}

export default App;
