import { createSlice, nanoid } from "@reduxjs/toolkit"

export const initialState = {
  todos: [{ id: "1", text: "hello react" }]
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducer: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text
      }
      state.todos.push(todo)

    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((elem) => elem.id !== action.payload.id)
    },
    updateTodo: (state, action) => {
      const todoUpdate = state.todos.find((elem) => elem.id == action.payload.id)
    }

  }
})

export const { addTodo, removeTodo } = todoSlice.reducer

export default todoSlice.reducer