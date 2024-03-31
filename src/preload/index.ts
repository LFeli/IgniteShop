import { ElectronAPI, electronAPI } from '@electron-toolkit/preload'
import { contextBridge, ipcRenderer } from 'electron'

declare global {
  export interface Window {
    electron: ElectronAPI
    api: typeof api
  }
}

const api = {
  fetchDocuments(params: any) {
    return ipcRenderer.invoke('fetch-documents', params)
  },
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
