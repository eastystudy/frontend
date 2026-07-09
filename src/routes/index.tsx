import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Default from './layouts/Default'
// import Home from '@/routes/pages/Home'
import About from '@/routes/pages/About'
// import Movies from './pages/Movies'
// import MovieDetails from './pages/MovieDetails'
import NotFound from './pages/NotFound'
// import SignIn from './pages/SignIn'
// import Todos from './pages/Todos'
import { fetchMovieDetails, guestOnly, requiresAuth } from './loaders'
import Loader from '@/components/Loader'
import { ErrorBoundary } from 'react-error-boundary'
import { dynamic } from './dynamic'

//const Home = layz(() => import('./pages/Home'))
// const About = layz(() => import('./pages/About'))
//const Movies = layz(() => import('./pages/Movies'))
//const MovieDetails = layz(() => import('./pages/MovieDetails'))
const NotFound = lazy(() => import('./pages/NotFound'))
const SignIn = lazy(() => import('./pages/SignIn'))
//const Todos = layz(() => import('./pages/Todos'))

const About = dynamic(() => import('./pages/About'), {
  loading: <Loader />
})

const router = createBrowserRouter([
  {
    element: <Default />,
    children: [
      {
        path: '/', // http://localhost:5173/
        element: <Home />
      },
      {
        path: '/about', // http://localhost:5173/about
        element: (
          <ErrorBoundary fallback={<h1>에러가 발생했어요!</h1>}>
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          </ErrorBoundary>
        )
      },
      {
        path: '/movies', // http://localhost:5173/movies
        loader: requiresAuth,
        element: <Movies />,
        children: [
          {
            path: '/movies/:movieId', // http://localhost:5173/movies/:ter3332
            element: <MovieDetails />
          }
        ]
      },
      {
        path: '/signin', // http://localhost:5173/signin
        loader: guestOnly,
        element: <SignIn />
      },
      {
        path: '/todos',
        loader: requiresAuth,
        element: <Todos />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
