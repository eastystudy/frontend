import TodoCreator from '@/components/todos/TodoCreator'
import TodoList from '@/components/todos/TodoList'

export default function Todos() {
  return (
    <>
      <TodoCreator />
      <TodoList />
    </>
  )
}

// import { useEffect } from 'react'
// import { useTodoStore } from '@/store/todo'
// import Button from '@/components/Button'
// import TextField from '@/components/TextField'

// export default function Todos() {
//   const todos = useTodoStore(state => state.todos)
//   const fetchTodos = useTodoStore(state => state.fetchTodos)
//   const title = useTodoStore(state => state.title)
//   const setTitle = useTodoStore(state => state.setTitle)
//   const createTodo = useTodoStore(state => state.createTodo)

//   useEffect(() => {
//     fetchTodos()
//   }, [])

//   return (
//     <>
//       <form
//         onSubmit={e => {
//           e.preventDefault()
//           createTodo()
//         }}>
//         <TextField
//           value={title}
//           onChange={e => setTitle(e.target.value)}
//         />
//         <Button type="submit">추가</Button>
//       </form>
//       <ul>
//         {todos.map(todo => {
//           return <li key={todo.id}>{todo.title}</li>
//         })}
//       </ul>
//     </>
//   )
// }
