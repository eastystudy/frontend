import type { RefObject, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  ref?: RefObject<HTMLInputElement | null>
  label?: string
}

export default function TextField({ label, ref, ...restProps }: Props) {
  return (
    <label className="grow">
      <span>{label}</span>
      <input
        type="text"
        ref={ref}
        {...restProps}
        className={`h-[36px] rounded-md border border-gray-400 outline-none focus:border-blue-500 ${restProps.className || ''}`}
      />
    </label>
  )
}

// interface Props {
//   label: string
//   value: string
//   onChange: (value: string) => void
// }

// export default function TextField({ label, value, onChange }: Props) {
//   //const abc = props.abc
//   //const { abc } = props

//   return (
//     <label>
//       <span>{label}</span>
//       <input
//         type="text"
//         value={value}
//         onChange={onChange}
//       />
//     </label>
//   )
// }

// interface Props {
//   abc: string
//   xyz: (value: string) => void
// }

// export default function TextField({ abc, xyz }: Props) {
//   //const abc = props.abc
//   //const { abc } = props

//   return (
//     <>
//       <input
//         type="text"
//         value={abc}
//         onChange={event => {
//           xyz(event.target.value)
//         }}
//       />
//     </>
//   )
// }
