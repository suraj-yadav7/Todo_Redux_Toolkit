import './App.css'
import AddTodo from "./components/AddTodo.jsx"
import Todos from "./components/Todos.jsx"

export default function App() {
  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <AddTodo />
          </div>
          <div className="flex justify-center items-center flex-col gap-y-3">
            <Todos />
          </div>
        </div>
      </div>
    </>
  )
}
