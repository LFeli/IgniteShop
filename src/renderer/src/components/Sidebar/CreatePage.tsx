import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'phosphor-react'

import { Document } from '~/src/shared/types/ipc'

export function CreatePage() {
  const queryClient = useQueryClient()

  const { isPending: isCreatingDocument, mutateAsync: createDocument } =
    useMutation({
      mutationFn: async () => {
        const response = await window.api.createDocument()

        return response.data
      },
      onSuccess: (data) => {
        queryClient.setQueriesData(
          { queryKey: ['documents'] },
          (documents: Document[] | undefined) => {
            if (documents && documents.length >= 0) {
              return [...documents, data]
            }
            return [data]
          },
        )
      },
    })

  return (
    <button
      onClick={() => createDocument()}
      disabled={isCreatingDocument}
      className="absolute bottom-0 left-0 right-0 flex w-[240px] items-center gap-2 border-t border-rotion-600 px-5 py-4 text-sm hover:bg-rotion-700 disabled:opacity-60"
    >
      <Plus className="h-4 w-4" />
      Novo documento
    </button>
  )
}
