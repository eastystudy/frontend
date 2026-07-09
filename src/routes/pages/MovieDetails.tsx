import { useParams, useNavigate } from 'react-router'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Loader from '@/components/Loader'
import { delay, loadImage } from '@/utils'
import Modal from '@/components/Modal'

export interface Movie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export interface Rating {
  Source: string
  Value: string
}

export default function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState<Movie | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingForPoster, setIsLoadingForPoster] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    ;(async function () {
      await loadImage(
        `https://img.omdbapi.com/?apikey=7035c60c&i=${movieId}&h=3000`
      )
      setIsLoadingForPoster(false)
    })()
    ;(async function () {
      await delay(2000)
      const { data } = await axios.get<Movie>(
        `https://omdbapi.com/?apikey=7035c60c&i=${movieId}`
      )
      setMovie(data)
      setIsLoading(false)
    })()
  }, [])

  return (
    <Modal onClose={() => navigate('/movies')}>
      {isLoading && (
        <Loader
          size={100}
          weight={5}
          className="absolute z-1"
        />
      )}
      {movie && (
        <>
          <h1>{movie.Title}</h1>
          <h1>{movie.Plot}</h1>
          <ul>
            {movie.Ratings.map(rating => {
              return (
                <li>
                  {rating.Source}: {rating.Value}
                </li>
              )
            })}
          </ul>
        </>
      )}
      <div className="relative aspect-2/3 w-[500px] bg-gray-100">
        {isLoadingForPoster && (
          <Loader
            size={100}
            color="black"
            className="absolute"
          />
        )}
        <img
          //src={movie.Poster}
          src={`https://img.omdbapi.com/?apikey=7035c60c&i=${movieId}&h=3000`}
          alt={movie?.Title}
        />
      </div>
    </Modal>
  )
}
