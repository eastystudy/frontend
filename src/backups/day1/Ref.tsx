import { useState, useRef, useEffect } from 'react'

function getFruitCount(fruits: string[]) {
  return fruits.length
}

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [fruits, setFruits] = useState<string[]>([])
  const [fruitName, setFruitName] = useState('')
  const fruitCount = getFruitCount(fruits)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function addFruit() {
    setFruits([fruitName, ...fruits])
    setFruitName('')
  }

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={fruitName}
        onChange={event => {
          setFruitName(event.target.value)
        }}
        onKeyDown={event => {
          if (event.nativeEvent.isComposing) return
          if (event.key === 'Enter') addFruit()
        }}
      />
      <button
        type="button"
        onClick={() => {
          addFruit()
        }}>
        추가하기
      </button>
      <div>{fruitCount}개</div>
      <ul>
        {fruits.map(fruit => {
          return <li key={fruit}>{fruit}</li>
        })}
      </ul>
    </>
  )
}

// import { useState } from 'react'

// export default function App() {
//   const [checked, setChecked] = useState(false)

//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           checked={checked}
//           onChange={e => setChecked(e.target.checked)}
//         />
//         동의합니다.
//       </label>
//       <h2>동의 여부: {checked ? '예' : '아니오'}</h2>
//     </>
//   )
// }

// import { useState } from 'react'

// export default function App() {
//   const [text, setText] = useState('')

//   return (
//     <>
//       <input
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <h2>{text}</h2>
//     </>
//   )
// }
