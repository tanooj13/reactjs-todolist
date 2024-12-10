import React from 'react'
import {useState} from 'react'

export default function TodoInput(props) {
  const {handleAddTodo} = props
  const [inputValue,setInputValue] = useState('')
  console.log(inputValue)
  return (
    <div className='input-container'>
      <input value={inputValue} onChange={(e)=> {
        setInputValue(e.target.value)
      }} placeholder='Add Task'/>
      <button onClick={() =>{
        if (!inputValue){return}
        handleAddTodo(inputValue)
        setInputValue('')
      }}>
        <i class="fa-solid fa-plus"></i>
        </button>
    </div>
  )
}
