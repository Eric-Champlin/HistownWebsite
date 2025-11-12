import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Programs from './pages/Programs.tsx'
import DanceClasses from './pages/DanceClasses.tsx'
import DanceDetail from './pages/DanceDetail.tsx'
import MusicClasses from './pages/MusicClasses.tsx'
import FeaturedClasses from './pages/FeaturedClasses.tsx'
import About from './pages/About.tsx'
import More from './pages/More.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/classes/dance" element={<DanceClasses />} />
        <Route path="/classes/dance/:danceId" element={<DanceDetail />} />
        <Route path="/classes/music" element={<MusicClasses />} />
        <Route path="/classes/featured" element={<FeaturedClasses />} />
        <Route path="/about" element={<About />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

// Register service worker for better caching (production only)
if ('serviceWorker' in navigator && import.meta.env.MODE === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}