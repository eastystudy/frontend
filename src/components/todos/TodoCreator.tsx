import Button from '@/components/Button'
import TextField from '@/components/TextField'
import { useTodoStore } from '@/store/todo'

export default function TodoCreator() {
  const title = useTodoStore(state => state.title)
  const setTitle = useTodoStore(state => state.setTitle)
  const createTodo = useTodoStore(state => state.createTodo)

  async function _createTodo() {
    await createTodo()
  }

  return (
    <>
      <form
        className="flex max-w-[500px] items-center gap-2"
        onSubmit={e => {
          e.preventDefault()
          _createTodo()
        }}>
        <TextField
          className="w-full"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Button type="submit">추가</Button>
      </form>
    </>
  )
}
