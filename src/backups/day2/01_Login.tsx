import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useState } from 'react'

export default function App() {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  function signIn(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(id, pw)
  }

  return (
    <>
      <form onSubmit={event => signIn(event)}>
        <TextField
          label="ID"
          placeholder="ID를 입력해 주세요"
          type="text"
          value={id}
          onChange={e => {
            setId(e.target.value)
          }}
        />
        <TextField
          label="PW"
          type="password"
          value={pw}
          onChange={e => {
            setPw(e.target.value)
          }}
        />
        <Button type="submit">로그인</Button>
      </form>
    </>
  )
}

// import TextField from '@/components/TextField'
// import { useState } from 'react'

// export default function App() {
//   const [text, setText] = useState('Hello, Props!')

//   return (
//     <>
//       <main>
//         <section>
//           <TextField
//             abc={text}
//             xyz={setText}
//           />
//         </section>
//         <h1 id="title">{text}</h1>
//       </main>
//     </>
//   )
// }
