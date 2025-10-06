import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

function TodosItem({ todo }) {
  return (
    <div className='bg-gray-100 rounded px-3 py-2 flex items-center justify-between'>

      <div className='flex items-center gap-0.5'>
        <p className='text-sm text-blue-700'>{todo.id}</p>
        <p>-</p>
        <p className='font-bold'>{todo.title}</p>
      </div>

      <div className='flex items-center gap-4'>
        <FiEdit
          className='size-6 text-blue-500 cursor-pointer'
        />
        <RiDeleteBin6Line
          className='size-6 text-red-500 cursor-pointer'
        />
      </div>

    </div>
  )
}

export default TodosItem
