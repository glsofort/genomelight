import './i18n'
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import GLSofort from './components/GLSofort'
import Reagent from './components/Reagent'
import Health from './components/Health'
import Lims from './components/Lims'
import Contact from './components/Contact'
import News from './components/News'
import Footer from './components/Footer'
import Seo from './components/Seo'

function App() {
  return (
    <Router>
      <Seo />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/glsofort" element={<GLSofort />} />
            <Route path="/reagent" element={<Reagent />} />
            <Route path="/health" element={<Health />} />
            <Route path="/lims" element={<Lims />} />
            <Route
              path="/compression"
              element={<Navigate to="/lims" replace />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
