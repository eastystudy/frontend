import { useCountStore } from '@/store/count'

export default function Home() {
  const count = useCountStore(state => state.count)
  const double = useCountStore(state => state.double)
  const setCount = useCountStore(state => state.setCount)

  return (
    <>
      <h1> home page </h1>
      <h2 onClick={() => setCount(count + 1)}>
        {count}/{double}
      </h2>
    </>
  )
}
