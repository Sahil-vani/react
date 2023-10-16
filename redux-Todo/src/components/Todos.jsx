import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => {
          return (
            <li
              className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
              key={todo.id}
            >
              <div className="m-2 text-white text-lg">{todo.text}</div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-white border-0 py-1 px-4 mx-2 focus:outline-none rounded text-md"
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todos;
