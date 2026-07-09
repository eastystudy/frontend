import { Outlet, ScrollRestoration } from 'react-router'
import Header from '@/routes/layouts/Header'

export default function Default() {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollRestoration />
    </>
  )
}
