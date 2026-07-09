import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(1)

  function renderCountState() {
    if (count <= 3) {
      return <p>카운트가 3 이하입니다</p>
    } else {
      return <p>카운트가 3 초과입니다.</p>
    }
  }

  return (
    <>
      <h1
        id="title"
        className={count > 3 ? 'active' : ''}
        style={{ fontSize: `${20 + count}px` }}
        onClick={() => {
          const newCount = count + 1
          setCount(newCount)
          console.log(newCount)
        }}>
        Count: {count}
      </h1>
      {count > 3 && <p>Count is greater than 3</p>}
      {count > 3 ? (
        <p>Count is greater than 3</p>
      ) : (
        <p>Count is not greater than 3</p>
      )}
      {renderCountState()}
    </>
  )
}

// 거짓(Falsy)
// 0, '', false, null, undefined, NaN, 0n

// import { useState } from 'react'

// export default function App() {
//   const [count, setCount] = useState(1)

//   return (
//     <>
//       <h1
//         id="title"
//         className={count > 3 ? 'active' : ''}
//         style={{
//           fontSize: `${20 + count}px`
//         }}
//         onClick={() => {
//           const newCount = count + 1
//           setCount(newCount)
//           console.log(newCount)
//         }}>
//         Count: {count}
//       </h1>
//     </>
//   )
// }

// import { useState } from 'react'

// export default function App() {
//   const [count, setCount] = useState(1)

//   return (
//     <>
//       <h1
//         id="title"
//         className={count > 3 ? 'active' : ''}
//         onClick={() => {
//           const newCount = count + 1
//           setCount(newCount)
//           console.log(newCount)
//         }}>
//         Count: {count}
//       </h1>
//     </>
//   )
// }

// import { useState } from 'react'

// export default function App() {
//   const [count, setCount] = useState(1)

//   return (
//     <>
//       <h1
//         onClick={() => {
//           const newCount = count + 1
//           setCount(newCount)
//           console.log(newCount)
//         }}>
//         Count: {count}
//       </h1>
//     </>
//   )
// }

// import { useState } from 'react'

// export default function App() {
//   const [count, setCount] = useState(1)

//   return (
//     <>
//       <h1
//         onClick={() => {
//           setCount(count + 1)
//           console.log(count)
//         }}>
//         Count: {count}
//       </h1>
//     </>
//   )
// }

// import { useState } from 'react'

// export default function App() {
//   let count = 1
//   //const [count, setCount] = useState()

//   return (
//     <>
//       <h1
//         onClick={() => {
//           count += 1
//           console.log(count)
//         }}>
//         Count: {count}
//       </h1>
//     </>
//   )
// }
