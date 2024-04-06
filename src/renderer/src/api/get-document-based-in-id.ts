export async function getDocumentBasedInID(id: string | undefined) {
  const response = await window.api.fetchDocument({ id: id! })

  return response.data
}
