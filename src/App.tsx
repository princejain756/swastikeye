import { SeoProvider } from './Seo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Chatbot from './components/Chatbot'
import Footer from './components/Footer'
import SiteCallout from './components/SiteCallout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import Doctor from './pages/Doctor'
import Glaucoma from './pages/Glaucoma'
import LASIK from './pages/LASIK'
import Contact from './pages/Contact'
import Book from './pages/Book'
import Cataract from './pages/Cataract'
import ContactLens from './pages/ContactLens'

export default function App() {
  return (
    <SeoProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:slug" element={<Doctor />} />
          <Route path="/glaucoma" element={<Glaucoma />} />
          <Route path="/lasik" element={<LASIK />} />
          <Route path="/cataract" element={<Cataract />} />
          <Route path="/contact-lens" element={<ContactLens />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
        </Routes>
        <SiteCallout />
        <Footer />
        <Chatbot />
      </BrowserRouter>
    </SeoProvider>
  )
}
