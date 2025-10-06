import React from 'react'
import TodosItem from './TodosItem'

function TodosList({ todos }) {
  return (
    <div className='flex flex-col gap-2 px-10 py-5 bg-gray-800 rounded'>
      {
        !todos
          ? (<div>your list is empty today</div>)
          : todos.map(todo => (
            <TodosItem key={todo.id} todo={todo} />
          ))
      }
    </div>
  )
}

export default TodosList
