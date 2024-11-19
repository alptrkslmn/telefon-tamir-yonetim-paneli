import { Outlet } from '@remix-run/react'
import PublicLayout from '~/components/layout/PublicLayout'

export default function PublicRoute() {
  return (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  )
}
