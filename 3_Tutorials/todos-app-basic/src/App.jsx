import { useState } from "react"
import AddTodosInput from "./components/AddTodosInput"
import TodosList from "./components/TodosList"


function App() {

  const [todos, setTodos] = useState([
    {
      id: Date.now(),
      title: "eat breakfast",
      status: "undone"
    }
  ])

  return (
    <div className="bg-stone-500 h-screen">
      {/* header */}
      <div className="bg-gray-800 p-5 mb-5">
        <h1 className="text-xl text-gray-100 ">Todo App</h1>
      </div>

      <main className="container mx-auto flex flex-col gap-2" >

        <AddTodosInput setTodos={setTodos} />

        <TodosList todos={todos} />

      </main>


    </div>
  )
}

export default App
