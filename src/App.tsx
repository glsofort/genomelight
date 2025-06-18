import './i18n'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import GLSofort from './components/GLSofort'
import Reagent from './components/Reagent'
import Health from './components/Health'
import Compression from './components/Compression'
import Contact from './components/Contact'
import News from './components/News'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/glsofort" element={<GLSofort />} />
            <Route path="/reagent" element={<Reagent />} />
            <Route path="/health" element={<Health />} />
            <Route path="/compression" element={<Compression />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
