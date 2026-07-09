import { redirect } from 'react-router'
import axios from 'axios'

// export function requiresAuth() {
//   const accessToken = localStorage.getItem('accessToken')
//   if (accessToken) {
//     return true
//   }
//   return redirect('/signin')
// }

export type User = {
  Name: string
  Age: number
}

export function requiresAuth(): User {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    return {
      Name: '호이',
      Age: 31
    }
  }

  throw redirect('/signin')
}

export function guestOnly() {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    return redirect('/')
  }
  return true
}

export async function fetchMovieDetails(movieId: string) {
  const { data } = await axios.get(
    `https://omdbapi.com/?apikey=7035c60c&i=${movieId}`
  )
  return data
}
