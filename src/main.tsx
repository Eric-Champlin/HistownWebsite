import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Programs from './pages/Programs.tsx'
import DanceClasses from './pages/DanceClasses.tsx'
import DanceDetail from './pages/DanceDetail.tsx'
import MusicClasses from './pages/MusicClasses.tsx'
import MusicDetail from './pages/MusicDetail.tsx'
import FeaturedClasses from './pages/FeaturedClasses.tsx'
import FeaturedDetail from './pages/FeaturedDetail.tsx'
import About from './pages/About.tsx'
import OurTeam from './pages/OurTeam.tsx'
import OurStory from './pages/OurStory.tsx'
import PastEvents from './pages/PastEvents.tsx'
import DressCode from './pages/DressCode.tsx'
import StudioRental from './pages/StudioRental.tsx'
import Tuition from './pages/Tuition.tsx'
import Contact from './pages/Contact.tsx'
import More from './pages/More.tsx'
import Store from './pages/Store.tsx'
import FreeTrial from './pages/FreeTrial.tsx'
import ScrollToTop from './components/common/ScrollToTop.tsx'
import LiveChat from './components/common/LiveChat.tsx'
import { initBrowserCompat } from './utils/browserCompat.ts'
import './index.css'

// Initialize browser compatibility features
initBrowserCompat();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <LiveChat />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/classes/dance" element={<DanceClasses />} />
        <Route path="/classes/dance/:danceId" element={<DanceDetail />} />
        <Route path="/classes/music" element={<MusicClasses />} />
        <Route path="/classes/music/:musicId" element={<MusicDetail />} />
        <Route path="/classes/featured" element={<FeaturedClasses />} />
        <Route path="/classes/featured/:featuredId" element={<FeaturedDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/team" element={<OurTeam />} />
        <Route path="/about/story" element={<OurStory />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/dress-code" element={<DressCode />} />
        <Route path="/studio-rental" element={<StudioRental />} />
        <Route path="/tuition-fees" element={<Tuition />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} />
        <Route path="/store" element={<Store />} />
        <Route path="/free-trial" element={<FreeTrial />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

// Service worker disabled - was causing Safari compatibility issues
// TODO: Re-enable with proper cache configuration later
// if ('serviceWorker' in navigator && import.meta.env.MODE === 'production') {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js')
//       .then((registration) => {
//         console.log('SW registered: ', registration);
//       })
//       .catch((registrationError) => {
//         console.log('SW registration failed: ', registrationError);
//       });
//   });
// }