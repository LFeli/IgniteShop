export interface getDocumentsResponse {
  id: string
  title: string
}

export async function getDocuments() {
  const response = await window.api.fetchDocuments()

  return response
}
