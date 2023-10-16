import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-lg font-semibold">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className=" bg-white border-0 py-1 px-4 m-3 mx-4 rounded text-md "
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
