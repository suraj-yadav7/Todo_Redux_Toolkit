import { createSlice, nanoid } from "@reduxjs/toolkit"

export const initialState = {
  todos: [{ id: "1", text: "Default Todo 1" }, { id: "2", text: "Default todo 2" }],
  loading: true
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo)

    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((elem) => elem.id !== action.payload)
    },

    updateTodo: (state, action) => {
      console.log("tod payload: ", action.payload)
      const todoUpdate = state.todos.find((elem) => elem.id == action.payload.id)
      const updatingVal = todoUpdate.text = action.payload.text
    }

  }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer