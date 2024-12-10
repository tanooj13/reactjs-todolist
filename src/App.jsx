import { useState ,useEffect } from "react"
import Header from "./components/Header"
import Tabs from "./components/Tabs"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
  // const todos = [
  //   {input:"Hello! Add your first todo" ,complete:true},
  //   {input:"Get the Groceries",complete:false},
  //   {input:"Learn React",complete:false},
  // ]

  const [todos,setTodos] = useState([{input:"Hello! Add your first todo" ,complete:true}])
  const [selectedTab,setSelectedTab]= useState('Open')

  function handleAddTodo(newTodo){
    const newTodoList = [...todos,{input:newTodo,complete:false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  function handleEditTodo(index){
    // update/edit/modify
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)


  }
  function handleDeleteTodo(index){
    let newTodoList = todos.filter((val,valIndex)=>{
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos){
    localStorage.setItem('todo-app',JSON.stringify({todos:currTodos}))
  }

  useEffect(()=> {
    if (!localStorage || !localStorage.getItem('todo-app')){return}
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  
  },[])

  return (
    <>
      <Header todos = {todos}/>
      <Tabs selectedTab = {selectedTab} setSelectedTab= {setSelectedTab} todos = {todos}/>
      <TodoInput handleAddTodo = {handleAddTodo}/>
      <TodoList handleEditTodo = {handleEditTodo} handleDeleteTodo = {handleDeleteTodo} todos = {todos} selectedTab = {selectedTab}/>
      
    </>
  )
}

export default App
