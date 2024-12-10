import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const {todos,selectedTab} = props
  
  const filteredTodos = selectedTab === 'All' ? todos : selectedTab === 'Completed' ? todos.filter(todo => todo.complete) : todos.filter(todo => !todo.complete)

  return (
    <>
      {filteredTodos.map((todo,todoIndex)=>{
        return (
          <TodoCard key = {todoIndex} todoIndex = {todos.findIndex(val => val.input == todo.input)} {...props} todo = {todo}/>
        )
      })}
      
    </>
  )
}
