import React from 'react'

export default function (props) {
  const {todo,handleDeleteTodo,todoIndex,handleEditTodo} = props
  
  return (
    <div className='card todo-item'>
      <p>{todo.input}</p>
      <div className='card todo-item'>
        <button onClick={()=>{
          handleEditTodo(todoIndex)
        }} disabled={todo.complete}>
          <h6>Done</h6>
        </button>
        <button onClick={()=>{
          handleDeleteTodo(todoIndex)
        }}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  )
}
