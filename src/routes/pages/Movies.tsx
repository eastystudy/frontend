import TextField from '@/components/TextField'
import Button from '@/components/Button'
import type { FormEvent } from 'react'
import { Link } from 'react-router'
import { useMovieStore } from '@/store/movie'
import { Outlet } from 'react-router'

export default function Movies() {
  const searchText = useMovieStore(state => state.searchText)
  const movies = useMovieStore(state => state.movies)
  const isLoading = useMovieStore(state => state.isLoading)
  const setSearchText = useMovieStore(state => state.setSeachText)
  const fetchMovies = useMovieStore(state => state.fetchMovies)

  async function _fetchMovies(event: FormEvent) {
    event.preventDefault()
    fetchMovies()
  }

  return (
    <>
      <h1>영화 페이지</h1>
      <form
        onSubmit={_fetchMovies}
        className="flex items-center gap-3">
        <TextField
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <Button
          loading={isLoading}
          type="submit">
          {' '}
          검색{' '}
        </Button>
      </form>
      <ul className="flex flex-wrap gap-3">
        {movies.map(movie => {
          return (
            <li key={movie.imdbID}>
              <Link to={`/movies/${movie.imdbID}`}>
                <h3 className="max-w-[200px] truncate">{movie.Title}</h3>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  width={200}
                  height={300}
                />
              </Link>
            </li>
          )
        })}
      </ul>
      <Outlet />
    </>
  )
}

// import TextField from '@/components/TextField'
// import Button from '@/components/Button'
// import { useState } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router'

// export interface ResponseData {
//   Response: 'True' | 'False'
//   Search?: Movie[]
//   totalResults?: string
//   Error?: string
// }

// // export interface ResponseSuccessData {
// //   Response: 'True'
// //   Search: Movie[]
// //   totalResults: string
// // }

// // export interface ResponseFailureData {
// //   Response: 'False'
// //   Error: string
// // }

// export interface Movie {
//   Title: string
//   Year: string
//   imdbID: string
//   Type: string
//   Poster: string
// }

// export default function Movies() {
//   const [searchText, setSearchText] = useState('')
//   const [movies, setMovies] = useState<Movie[]>([])

//   async function fetchMovies(event) {
//     event.preventDefault()
//     const { data } = await axios.get<ResponseData>(
//       `https://omdbapi.com/?apikey=7035c60c&s=${searchText}`
//     )

//     const { Search = [] } = data
//     setMovies(Search)
//   }

//   return (
//     <>
//       <h1>영화 페이지</h1>
//       <form onSubmit={fetchMovies}>
//         <TextField
//           value={searchText}
//           onChange={e => setSearchText(e.target.value)}
//         />
//         <Button type="submit"> 검색 </Button>
//       </form>
//       <ul className="flex flex-wrap gap-3">
//         {movies.map(movie => {
//           return (
//             <li key={movie.imdbID}>
//               <h3 className="max-w-[200px] truncate">{movie.Title}</h3>
//               <img
//                 src={movie.Poster}
//                 alt={movie.Title}
//                 width={200}
//                 height={300}
//               />
//             </li>
//           )
//         })}
//       </ul>
//     </>
//   )
// }
