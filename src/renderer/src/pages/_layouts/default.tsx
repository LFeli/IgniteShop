import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

export function Default() {
  return (
    <div className="flex h-screen w-screen bg-rotion-900 text-rotion-100">
      <Sidebar />
      <div className="flex max-h-screen flex-1 flex-col">
        <Header />

        <Outlet />
      </div>
    </div>
  )
}
