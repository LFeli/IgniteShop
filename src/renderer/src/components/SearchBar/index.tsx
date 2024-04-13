import { useQuery } from '@tanstack/react-query'
import { Command } from 'cmdk'
import { File, MagnifyingGlass } from 'phosphor-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { getDocuments } from '../../api/get-documents'

interface SearchBarProps {
  open: boolean
  onOpenChange: (isOpen: boolean) => void
}

export function SearchBar({ open, onOpenChange }: SearchBarProps) {
  const navigate = useNavigate()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.metaKey) {
        onOpenChange(!open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [onOpenChange, open])

  const { data: documents } = useQuery({
    queryKey: ['documents'],
    queryFn: getDocuments,
  })

  function handleOpenDocument(id: string) {
    navigate(`/documents/${id}`)
  }

  return (
    <Command.Dialog
      className="fixed left-1/2 top-24 w-[480px] max-w-full -translate-x-1/2 rounded-md border border-rotion-600 bg-rotion-800 text-rotion-100 shadow-2xl"
      open={open}
      onOpenChange={onOpenChange}
      label="Search"
    >
      <div className="flex items-center gap-2 border-b border-rotion-700 p-4">
        <MagnifyingGlass className="h-5 w-5" />
        <Command.Input
          autoFocus
          placeholder="Buscar documentos..."
          className="w-full bg-transparent text-sm text-rotion-50 placeholder:text-rotion-200 focus:outline-none"
        />
      </div>
      <Command.List className="scrollbar-thin scrollbar-thumb-rotion-600 scrollbar-track-rotion-800 max-h-48 py-2">
        <Command.Empty className="px-4 py-3 text-sm text-rotion-200">
          Nenhum documento encontrado.
        </Command.Empty>

        {documents?.map((document) => {
          return (
            <Command.Item
              key={document.id}
              onSelect={() => handleOpenDocument(document.id)}
              className="flex items-center gap-2 px-4 py-3 text-sm text-rotion-50 hover:bg-rotion-700 aria-selected:!bg-rotion-600"
            >
              <File className="h-4 w-4" />
              {document.title}
            </Command.Item>
          )
        })}
      </Command.List>
    </Command.Dialog>
  )
}
