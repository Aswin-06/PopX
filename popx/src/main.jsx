import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { DataProvider } from './components/Context.jsx'

createRoot(document.getElementById('root')).render(
  <DataProvider>
    <App/>
  </DataProvider>
)
