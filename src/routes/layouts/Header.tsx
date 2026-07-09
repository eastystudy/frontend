import { NavLink, useNavigate } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: '/signin', label: 'SignIn' },
  { to: '/todos', label: 'Todos' }
]

export default function Header() {
  const navigate = useNavigate()

  function signOut() {
    localStorage.removeItem('accessToken')
    //location.reload()
    navigate('/')
  }

  return (
    <>
      <header className="flex gap-4 border-b border-gray-200 p-4">
        {navigations.map(nav => {
          return (
            <NavLink
              key={nav.to}
              to={nav.to}
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}>
              {nav.label}
            </NavLink>
          )
        })}
        <button onClick={signOut}>Sign Out</button>
      </header>
    </>
  )
}

// import { NavLink } from 'react-router'

// const navigations = [
//   { to: '/', label: 'Home' },
//   { to: '/about', label: 'About' }
// ]

// export default function Header() {
//   return (
//     <>
//       <header>
//         <NavLink
//           to="/"
//           className={({ isActive }) => (isActive ? 'text-red-50' : '')}>
//           Home{' '}
//         </NavLink>
//         <NavLink
//           to="/about"
//           className={({ isActive }) => (isActive ? 'active' : '')}>
//           About
//         </NavLink>
//       </header>
//     </>
//   )
// }
