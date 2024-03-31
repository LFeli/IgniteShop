import './styles/global.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Routes } from './routes'

export function App() {
  return (
    <div className="flex h-screen w-screen bg-rotion-900 text-rotion-100">
      <Sidebar />
      <div className="flex max-h-screen flex-1 flex-col">
        <Header />

        <Routes />
      </div>
    </div>
  )
}
