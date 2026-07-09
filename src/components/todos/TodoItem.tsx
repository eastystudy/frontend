import type { Todo } from '@/store/todo'
import { useState, useRef, useEffect } from 'react'
import Button from '@/components/Button'
import { useTodoStore } from '@/store/todo'
import TextField from '../TextField'

interface Props {
  todo: Todo
}

function getLoading(isSaving: boolean, isDeleting: boolean) {
  return isSaving || isDeleting
}

export default function TodoItem({ todo }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const updateTodo = useTodoStore(state => state.updateTodo)
  const fetchTodos = useTodoStore(state => state.fetchTodos)
  const deleteTodo = useTodoStore(state => state.deleteTodo)
  const isLoading = getLoading(isSaving, isDeleting)
  //const isLoading = isSaving || isDeleting

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  function onEditMode() {
    setIsEditing(true)
  }

  function offEditMode(title: string = todo.title) {
    setIsEditing(false)
    setTitle(title)
  }

  async function _updateTodo() {
    if (!title.trim()) return
    if (title == todo.title) return
    setIsSaving(true)
    await updateTodo({
      ...todo,
      title
    })
    fetchTodos()
    setIsSaving(false)
    offEditMode(title)
  }

  async function _deleteTodo() {
    setIsDeleting(true)
    await deleteTodo(todo)
    fetchTodos()
    setIsDeleting(false)
  }

  return (
    <li className="flex items-center gap-2 border-b border-gray-300 px-1 py-1 hover:bg-gray-200">
      {isEditing ? (
        <>
          <TextField
            ref={inputRef}
            className="w-full"
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => {
              if (e.nativeEvent.isComposing) return
              if (e.key === 'Enter') _updateTodo()
              if (e.key === 'Escape') offEditMode()
            }}
          />
          <Button
            disabled={isLoading}
            variant="secondary"
            onClick={() => offEditMode()}>
            취소
          </Button>
          <Button
            disabled={isLoading}
            loading={isSaving}
            variant="primary"
            onClick={() => _updateTodo()}>
            저장
          </Button>
          <Button
            disabled={isLoading}
            loading={isDeleting}
            variant="danger"
            onClick={() => _deleteTodo()}>
            삭제
          </Button>
        </>
      ) : (
        <>
          <div className="grow">{todo.title}</div>
          <Button onClick={onEditMode}>수정</Button>
        </>
      )}
    </li>
  )
}
