import { create } from 'zustand'
import {
  combine,
  subscribeWithSelector,
  persist,
  devtools,
  createJSONStorage
} from 'zustand/middleware'

export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        combine(
          {
            count: 7,
            double: 14
          },
          set => {
            return {
              setCount(newCount: number) {
                set({
                  count: newCount
                })
                set({
                  double: newCount * 2
                })
              }
            }
          }
        )
      ),
      {
        version: 1,
        name: 'Count Store',
        storage: createJSONStorage(() => localStorage)
      }
    )
  )
)

// export const useCountStore = create(
//   subscribeWithSelector(
//     combine(
//       {
//         count: 7,
//         double: 14
//       },
//       set => {
//         return {
//           setCount(newCount: number) {
//             set({
//               count: newCount
//             })
//           }
//         }
//       }
//     )
//   )
// )

// useCountStore.subscribe(
//   state => state.count,
//   count => {
//     //const { count } = useCountStore.getState()
//     useCountStore.setState({ double: count * 2 })
//   }
// )

// interface State {
//   count: number
//   setCount: (newCount: number) => void
// }

// export const useCountStore = create<State>((set, get) => {
//   return {
//     count: 7,
//     setCount(newCount: number) {
//       set({
//         count: newCount
//       })
//     }
//   }
// })

// export const useXXXStore = create(
//     combine(
//         {
//             state1: 값
//         }
//     )
// )
