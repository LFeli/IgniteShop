import { Plus } from 'phosphor-react'

export function CreatePage() {
  return (
    <button className="absolute bottom-0 left-0 right-0 flex w-[240px] items-center gap-2 border-t border-rotion-600 px-5 py-4 text-sm hover:bg-rotion-700 disabled:opacity-60">
      <Plus className="h-4 w-4" />
      Novo documento
    </button>
  )
}
