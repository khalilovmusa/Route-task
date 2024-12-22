
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import './App.css'

function App() {

  return (
    <div>
      <nav className="navigation">
        <div><a href='/'>Home</a></div>
        <div><a href='/about'>About</a></div>
        <div><a href='/contact'>Contact</a></div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
