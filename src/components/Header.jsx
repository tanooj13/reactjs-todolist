import React from 'react'

export default function (props) {
  const{todos} = props
  const todoslength = todos.length
  const isPlural = todos.length != 1
  const taskOrTasks = (isPlural ? "tasks":"task")
  return (
    <header>
      
      <h1 className='text-gradient'>You Have {todoslength} {taskOrTasks} remaining.</h1>
    </header>
  )
}
