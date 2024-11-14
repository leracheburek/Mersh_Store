import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Discount from './components/Discount'
import TShirtCard from './components/Discount/TShirtCard'
import TShirtCarousel from './components/Discount/TShirtCarousel'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Discount />
    <TShirtCard/>
    <TShirtCarousel/>
  </StrictMode>,
)
