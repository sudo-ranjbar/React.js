import React, { useState } from 'react'

function AddTodosInput({ setTodos }) {

  const [title, setTitle] = useState("")

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = () => {
    if (title !== "") {
      setTodos((state) => {
        return [
          ...state,
          {
            id: Date.now(),
            title: title,
            status: "undone"
          }
        ]
      })
      setTitle("")
    }
  }

  return (
    <div className='flex flex-col lg:flex-row lg:items-center gap-5 bg-gray-800 rounded p-10'>
      <label htmlFor="title" className='text-gray-100'>add your new task:</label>
      <input id='title' type="text"
        className='border-none bg-gray-100 px-2 py-1 rounded'
        value={title}
        onChange={handleTitle}
      />
      <button
        className='text-gray-100 bg-stone-500 w-16 hover:bg-blue-500 rounded px-2 py-1 cursor-pointer'
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  )
}

export default AddTodosInput
