import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Discount from './components/Discount'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Discount />
  </StrictMode>,
)
