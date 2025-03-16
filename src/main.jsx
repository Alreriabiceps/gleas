import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import Start from './pages/Start.jsx'
import Profile from './pages/Profile.jsx'
import ShowDown from './pages/ShowDown.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<HomePage />} />
        <Route path="start" element={<Start />} />
        <Route path="profile" element={<Profile />} />
        <Route path="showdown" element={<ShowDown />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
