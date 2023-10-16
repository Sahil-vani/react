import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
