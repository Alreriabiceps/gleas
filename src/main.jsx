import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Homepage.jsx'
import Start from './pages/Start.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<HomePage />} />
        <Route path="start" element={<Start />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
