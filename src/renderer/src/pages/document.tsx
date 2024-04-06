import { Document as IPCDocument } from '@shared/types/ipc'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { getDocumentBasedInID } from '../api/get-document-based-in-id'
import { Editor, OnContentUpdatedParams } from '../components/Editor'
import { ToC } from '../components/ToC'

export function Document() {
  const { id } = useParams<{ id: string }>()
  const queryClient = useQueryClient()

  const { data, isFetching } = useQuery({
    queryKey: ['document', id],
    queryFn: async () => getDocumentBasedInID(id),
  })

  const initialContent = useMemo(() => {
    if (data) {
      return `<h1>${data.title}</h1>${data.content ?? '<p></p>'}`
    }

    return ''
  }, [data])

  const { mutateAsync: saveDocument } = useMutation({
    mutationKey: ['saveDocuments'],
    mutationFn: async ({ title, content }: OnContentUpdatedParams) => {
      await window.api.saveDocument({ id: id!, title, content })
    },
    onSuccess: (_, { title, content }) => {
      queryClient.setQueryData<IPCDocument[]>(['documents'], (documents) => {
        return documents?.map((document) => {
          if (document.id === id) {
            return { ...document, title }
          }

          return document
        })
      })
    },
  })

  function handleEditorContentUpdated({
    title,
    content,
  }: OnContentUpdatedParams) {
    saveDocument({ title, content })
  }

  return (
    <main className="flex flex-1 gap-8 px-10 py-12">
      <aside className="sticky top-0 hidden lg:block">
        <span className="text-xs font-semibold uppercase text-rotion-300">
          TABLE OF CONTENTS
        </span>

        <ToC.Root>
          <ToC.Link> Back-end </ToC.Link>
          <ToC.Section> Banco de Dados </ToC.Section>
          <ToC.Section> Autenticação </ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex flex-1 flex-col items-center">
        {!isFetching && data && (
          <Editor
            onContentUpdated={handleEditorContentUpdated}
            content={initialContent}
          />
        )}
      </section>
    </main>
  )
}
