import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import Start from './pages/Start.jsx'
import Profile from './pages/Profile.jsx'
import ShowDown from './pages/ShowDown.jsx'
import ProveYourSelf from './pages/ProveYourSelf.jsx'
import RapidFire from './pages/RapidFire.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<HomePage />} />
        <Route path="start" element={<Start />} />
        <Route path="profile" element={<Profile />} />
        <Route path="showdown" element={<ShowDown />} />
        <Route path="prove-yourself" element={<ProveYourSelf />} />
        <Route path="rapid-fire" element={<ProveYourSelf />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
