import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      if (state.todos.id == action.payload.id) {
        state.todos.text == action.payload;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
