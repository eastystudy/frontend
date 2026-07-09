import { useState } from 'react'

function getFruitCount(fruits: string[]) {
  return fruits.length
}

// const a: string = 'ABC'
// const b: number = 1234

//타입추론
// 추론O: 원시형(문자,  숫자, 불린, null, undefined)
// 추론X: 참조형(배열, 객체, 함수)

export default function App() {
  const [fruits, setFruits] = useState<string[]>([])
  const [fruitName, setFruitName] = useState('')
  const fruitCount = getFruitCount(fruits)

  function addFruit() {
    setFruits([fruitName, ...fruits])
    setFruitName('')
  }

  return (
    <>
      <input
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

  // import { useState } from 'react'

  // export default function App() {
  //   const [fruits, setFruits] = useState(['사과', '바나나', '오렌지'])
  //   const [fruitName, setFruitName] = useState('')

  //   function addFruit() {
  //     setFruits([fruitName, ...fruits])
  //     setFruitName('')
  //   }

  //   return (
  //     <>
  //       <input
  //         type="text"
  //         value={fruitName}
  //         onChange={event => {
  //           setFruitName(event.target.value)
  //         }}
  //         onKeyDown={event => {
  //           if (event.nativeEvent.isComposing) return
  //           if (event.key === 'Enter') addFruit()
  //         }}
  //       />
  //       <button
  //         type="button"
  //         onClick={() => {
  //           addFruit()
  //         }}>
  //         추가하기
  //       </button>
  //       <ul>
  //         {fruits.map(fruit => {
  //           return <li key={fruit}>{fruit}</li>
  //         })}
  //       </ul>
  //     </>
  //   )
}

// import { useState } from 'react'

// export default function App() {
//   const [fruits, setFruits] = useState(['사과', '바나나', '오렌지'])
//   const [fruitName, setFruitName] = useState('')

//   return (
//     <>
//       <input
//         type="text"
//         value={fruitName}
//         onChange={event => {
//           setFruitName(event.target.value)
//         }}
//       />
//       <button
//         type="button"
//         onClick={() => {
//           setFruits([fruitName, ...fruits])
//           setFruitName('')
//         }}>
//         추가하기
//       </button>
//       <ul>
//         {fruits.map(fruit => {
//           return <li key={fruit}>{fruit}</li>
//         })}
//       </ul>
//     </>
//   )
// }

// import { useState } from 'react'

// export default function App() {
//   const [fruits, setFruits] = useState(['사과', '바나나', '오렌지'])
//   return (
//     <>
//       <ul>
//         {fruits.map(fruit => {
//           return <li key={fruit}>{fruit}</li>
//         })}
//       </ul>
//     </>
//   )
// }

// import { useState } from 'react'

// export default function App() {
//   const [fruits, setFruits] = useState()
//   return (
//     <>
//       <ul>
//         <li>사과</li>
//         <li>바나나</li>
//         <li>오렌지</li>
//       </ul>
//     </>
//   )
// }
