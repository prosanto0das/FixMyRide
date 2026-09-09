import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './pages/Services'
import ServiceDetail from './pages/services/ServiceDetail'
import Shop from './pages/Shop'
import ShopDetail from './pages/ShopDetail'
import Rentals from './pages/Rentals'
import RentalDetail from './pages/RentalDetail'
import About from './pages/About'
import ExpertDetail from './pages/ExpertDetail'
import FAQ from './pages/FAQ'
import Feedback from './pages/Feedback'
import Gallery from './pages/Gallery'
import FAQChatbot from './components/FAQChatbot'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:type/:id" element={<ShopDetail />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/rentals/:type/:id" element={<RentalDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/expert/:id" element={<ExpertDetail />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <FAQChatbot />
    </Router>
  )
}

export default App
