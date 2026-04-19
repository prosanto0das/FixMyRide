import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './pages/Services'
import ServiceDetail from './pages/services/ServiceDetail'
import About from './pages/About'
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
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <FAQChatbot />
    </Router>
  )
}

export default App
