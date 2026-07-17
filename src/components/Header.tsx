import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import LanguageToggle from './LanguageToggle'

const serviceLinks = [
  { path: '/glsofort', key: 'glsofort' },
  { path: '/reagent', key: 'reagent' },
  { path: '/health', key: 'health' },
  { path: '/compression', key: 'compression' }
]

const Header = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const navClass = (path: string) =>
    `inline-flex min-h-12 items-center border-b-2 px-1 text-sm font-semibold transition-colors ${
      location.pathname === path
        ? 'border-[#2d8f91] text-[#245f70]'
        : 'border-transparent text-[#314b5b] hover:text-[#2d8f91]'
    }`

  const servicesActive = serviceLinks.some(
    (service) => location.pathname === service.path
  )

  return (
    <header className="sticky top-0 z-50 border-b border-[#dce4e5] bg-white/95 shadow-[0_1px_8px_rgba(18,48,65,0.05)] backdrop-blur">
      <div className="hidden bg-[#123247] text-white md:block">
        <div className="container mx-auto flex min-h-9 items-center justify-between px-4 text-xs md:px-8">
          <LanguageToggle />
          <div className="flex items-center gap-5 text-white/80">
            <a
              href={`tel:${t('footer.contact.phone')}`}
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">
                {t('footer.contact.phone')}
              </span>
            </a>
            <a
              href={`mailto:${t('footer.contact.email')}`}
              className="hidden items-center gap-2 hover:text-white sm:inline-flex"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{t('footer.contact.email')}</span>
            </a>
          </div>
        </div>
      </div>

      <nav
        className="container mx-auto px-4 md:px-8"
        aria-label={t('header.nav.primaryLabel')}
      >
        <div className="flex min-h-[70px] items-center justify-between md:min-h-[78px]">
          <Link
            to="/"
            className="flex min-w-0 items-center"
            aria-label={t('header.nav.homeLabel')}
          >
            <img
              src="/images/1691569958.png"
              alt=""
              width="115"
              height="40"
              className="h-9 w-auto md:h-11"
            />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            <Link
              to="/"
              className={navClass('/')}
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              {t('header.nav.home')}
            </Link>
            <Link
              to="/about"
              className={navClass('/about')}
              aria-current={location.pathname === '/about' ? 'page' : undefined}
            >
              {t('header.nav.about')}
            </Link>

            <div className="group relative">
              <button
                type="button"
                className={`${navClass('/__services')} gap-1 ${servicesActive ? 'border-[#2d8f91] text-[#245f70]' : ''}`}
                aria-haspopup="true"
              >
                {t('header.nav.services')}
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
              <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 border border-[#d7e0e1] bg-white p-2 opacity-0 shadow-[0_14px_36px_rgba(23,52,73,0.14)] transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block border-b border-[#edf1f1] px-4 py-3 text-sm font-medium text-[#314b5b] last:border-b-0 hover:bg-[#f1f6f5] hover:text-[#2d8f91]"
                  >
                    {t(`header.nav.serviceItems.${service.key}`)}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/news"
              className={navClass('/news')}
              aria-current={location.pathname === '/news' ? 'page' : undefined}
            >
              {t('header.nav.news')}
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center bg-[#173449] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#245f70]"
              aria-current={
                location.pathname === '/contact' ? 'page' : undefined
              }
            >
              {t('header.nav.contact')}
            </Link>
          </div>

          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center text-[#173449] lg:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={
              isMobileMenuOpen
                ? t('header.nav.closeMenu')
                : t('header.nav.openMenu')
            }
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-[#dce4e5] pb-5 pt-3 lg:hidden">
            <Link
              to="/"
              className="block min-h-12 py-3 font-semibold text-[#314b5b]"
            >
              {t('header.nav.home')}
            </Link>
            <Link
              to="/about"
              className="block min-h-12 py-3 font-semibold text-[#314b5b]"
            >
              {t('header.nav.about')}
            </Link>
            <p className="pt-3 text-xs font-bold uppercase text-[#7b8c93]">
              {t('header.nav.services')}
            </p>
            <div className="mt-2 border-l-2 border-[#8fc7c3] pl-4">
              {serviceLinks.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="block min-h-12 py-3 text-sm font-medium text-[#405967]"
                >
                  {t(`header.nav.serviceItems.${service.key}`)}
                </Link>
              ))}
            </div>
            <Link
              to="/news"
              className="block min-h-12 py-3 font-semibold text-[#314b5b]"
            >
              {t('header.nav.news')}
            </Link>
            <Link
              to="/contact"
              className="block min-h-12 py-3 font-semibold text-[#314b5b]"
            >
              {t('header.nav.contact')}
            </Link>
            <div className="mt-3 flex items-center justify-between bg-[#123247] px-3 py-1 text-white md:hidden">
              <LanguageToggle />
              <a
                href={`tel:${t('footer.contact.phone')}`}
                className="inline-flex min-h-11 items-center gap-2 text-xs text-white/80"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {t('footer.contact.phone')}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
