import Loader from '@/components/Loader'

// 타입을 지정하는 행위 => Typing!
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'danger'
}

export default function Button({
  variant = 'primary',
  loading,
  children,
  ...restProps
}: Props) {
  const variantClasses = {
    primary: 'text-white bg-blue-500 hover:bg-blue-400',
    secondary: 'text-white bg-gray-400 hover:bg-gray-300',
    danger: 'text-white bg-red-500 hover:bg-red-400'
  }

  return (
    <button
      {...restProps}
      className={`itmes-center relative flex h-[30px] min-w-[70px] justify-center rounded cursor_pointer${variantClasses[variant]}`}>
      {loading ? <Loader color="white" /> : children}
    </button>
  )
}
