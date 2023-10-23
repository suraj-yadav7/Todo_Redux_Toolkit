import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "src/features/todoSlice.js"

export const store = configureStore({
  reducer: todoReducer
})
