import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="flex items-center justify-center flex-col w-full h-screen">
      <AddTodo />
      <Todo />
    </div>
  );
}

export default App;
