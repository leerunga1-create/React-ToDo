import Header from "./components/Header"
import TodoEditor from "./components/TodoEditor"
import TodoList from "./components/TodoList"
import './App.css'
import { useState, useRef } from "react"


const mockData = [
  {
    id: 0,
    isDone: false,
    content: "암풀다운 3세트",
    date: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: "풀업 5세트",
    date: new Date().getTime()
  }, {
    id: 2,
    isDone: false,
    content: "티바로우 4세트",
    date: new Date().getTime()
  },{
    id: 3,
    isDone: false,
    content: "시티드로우 4세트",
    date: new Date().getTime()
  },
  {
    id: 4,
    isDone: false,
    content: "원암 덤벨로우 2세트",
    date: new Date().getTime()
  },
  {
    id: 5,
    isDone: false,
    content: "랫풀다운 2세트",
    date: new Date().getTime()
  },
  {
    id: 6,
    isDone: false,
    content: "바벨컬 4세트",
    date: new Date().getTime()
  },
  {
    id: 7,
    isDone: false,
    content: "해머컬 3세트",
    date: new Date().getTime()
  },
  
]

function App() {

  const [todos, setTodos] = useState(mockData)
  const ideRef = useRef(3)

  const onCreate = (content) => {
    const newTodo = {
      id: ideRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    setTodos(newTodo, ...todos)
  }


  const onUpdate = (targetId, updates) => {

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id == targetId
          ? { ...todo, ...updates }
          : todo
      )
    )

  }

const onDelete = (targetId)=>{
  setTodos(todos.filter((todo)=>todo.id!==targetId))

}




  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate}
      onDelete={onDelete} />
    </div>
  )
}

export default App
