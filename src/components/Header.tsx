import { Phone, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import LanguageToggle from './LanguageToggle'

const Header = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm">
      {/* Top contact bar */}
      <div className="bg-[#264b69] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <LanguageToggle />
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>{t('footer.contact.phone')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>{t('footer.contact.email')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://ext.same-assets.com/4081831888/1691569958.png"
              alt="GenomeLight Logo"
              className="h-12"
            />
            <div>
              <h1 className="text-xl font-bold text-[#264b69]">{t('header.companyName')}</h1>
              <p className="text-sm text-gray-600">{t('header.tagline')}</p>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                location.pathname === '/'
                  ? 'text-[#4fb1b4]'
                  : 'text-[#264b69] hover:text-[#4fb1b4]'
              }`}
            >
              {t('header.nav.home')}
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                location.pathname === '/about'
                  ? 'text-[#4fb1b4]'
                  : 'text-[#264b69] hover:text-[#4fb1b4]'
              }`}
            >
              {t('header.nav.about')}
            </Link>
            <div className="relative group">
              <button className="text-[#264b69] hover:text-[#4fb1b4] font-medium">{t('header.nav.services')}</button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <Link to="/glsofort" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">{t('header.nav.serviceItems.glsofort')}</Link>
                <Link to="/reagent" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">{t('header.nav.serviceItems.reagent')}</Link>
                <Link to="/health" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">{t('header.nav.serviceItems.health')}</Link>
                <Link to="/compression" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">{t('header.nav.serviceItems.compression')}</Link>
              </div>
            </div>
            <Link
              to="/news"
              className={`font-medium transition-colors ${
                location.pathname === '/news'
                  ? 'text-[#4fb1b4]'
                  : 'text-[#264b69] hover:text-[#4fb1b4]'
              }`}
            >
              {t('header.nav.news')}
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                location.pathname === '/contact'
                  ? 'text-[#4fb1b4]'
                  : 'text-[#264b69] hover:text-[#4fb1b4]'
              }`}
            >
              {t('header.nav.contact')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-[#264b69] hover:text-[#4fb1b4] transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <Link
                to="/"
                className={`font-medium transition-colors ${
                  location.pathname === '/'
                    ? 'text-[#4fb1b4]'
                    : 'text-[#264b69] hover:text-[#4fb1b4]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('header.nav.home')}
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors ${
                  location.pathname === '/about'
                    ? 'text-[#4fb1b4]'
                    : 'text-[#264b69] hover:text-[#4fb1b4]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('header.nav.about')}
              </Link>
              
              {/* Mobile Services Menu */}
              <div className="flex flex-col space-y-2">
                <span className="font-medium text-[#264b69]">{t('header.nav.services')}</span>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link 
                    to="/glsofort" 
                    className="text-sm text-gray-700 hover:text-[#4fb1b4] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('header.nav.serviceItems.glsofort')}
                  </Link>
                  <Link 
                    to="/reagent" 
                    className="text-sm text-gray-700 hover:text-[#4fb1b4] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('header.nav.serviceItems.reagent')}
                  </Link>
                  <Link 
                    to="/health" 
                    className="text-sm text-gray-700 hover:text-[#4fb1b4] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('header.nav.serviceItems.health')}
                  </Link>
                  <Link 
                    to="/compression" 
                    className="text-sm text-gray-700 hover:text-[#4fb1b4] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('header.nav.serviceItems.compression')}
                  </Link>
                </div>
              </div>
              
              <Link
                to="/news"
                className={`font-medium transition-colors ${
                  location.pathname === '/news'
                    ? 'text-[#4fb1b4]'
                    : 'text-[#264b69] hover:text-[#4fb1b4]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('header.nav.news')}
              </Link>
              <Link
                to="/contact"
                className={`font-medium transition-colors ${
                  location.pathname === '/contact'
                    ? 'text-[#4fb1b4]'
                    : 'text-[#264b69] hover:text-[#4fb1b4]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('header.nav.contact')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
