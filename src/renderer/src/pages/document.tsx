import { Link } from 'react-router-dom'

export function Document() {
  return (
    <main className="flex flex-1 items-center justify-center text-rotion-400">
      Selecione ou crie um documento
      <Link to="/">Acessar Blank</Link>
    </main>
  )
}
