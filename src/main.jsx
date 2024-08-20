import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PokeProvider } from './PokeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PokeProvider>
        <App />
      </PokeProvider>
    </BrowserRouter>
  </StrictMode>,
)
