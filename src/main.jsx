import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HooskAp } from './HooskAp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HooskAp />
  </StrictMode>,
)
