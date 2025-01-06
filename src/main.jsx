import { React,StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@splidejs/splide/dist/css/splide.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
</StrictMode>

)