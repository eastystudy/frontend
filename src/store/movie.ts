import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

export interface ResponseData {
  Response: 'True' | 'False'
  Search?: Movie[]
  totalResults?: string
  Error?: string
}

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const useMovieStore = create(
  combine(
    {
      searchText: '',
      movies: [] as Movie[],
      isLoading: false
    },
    (set, get) => {
      return {
        setSeachText(searchText: string) {
          set({ searchText: searchText })
        },
        async fetchMovies() {
          const { searchText } = get()
          set({ isLoading: true })
          const { data } = await axios.get<ResponseData>(
            `https://omdbapi.com/?apikey=7035c60c&s=${searchText}`
          )
          set({ isLoading: false })
          if (data.Response == 'True') {
            const { Search } = data
            set({ movies: Search })
            return
          }
        }
      }
    }
  )
)
