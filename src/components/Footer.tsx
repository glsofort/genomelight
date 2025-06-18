import { Phone, Mail, Globe, ArrowUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#264b69] text-white relative">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("https://ext.same-assets.com/4081831888/3253282782.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">{t('footer.company.title')}</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <img
                    src="https://ext.same-assets.com/4081831888/1691569958.png"
                    alt="GenomeLight Logo"
                    className="h-8 w-8 mr-3"
                  />
                  <span className="font-semibold">{t('footer.company.name')}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t('footer.company.description')}
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">{t('footer.services.title')}</h3>
              <ul className="space-y-3 text-gray-300">
                {(t('footer.services.items', { returnObjects: true }) as string[]).map((item: string) => (
                  <li key={item}>
                    <button className="hover:text-[#4fb1b4] transition-colors text-left">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">{t('footer.contact.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone size={16} className="mr-3 text-[#4fb1b4]" />
                  <span className="text-gray-300">{t('footer.contact.phone')}</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-3 text-[#4fb1b4]" />
                  <span className="text-gray-300">{t('footer.contact.email')}</span>
                </div>
                <div className="flex items-center">
                  <Globe size={16} className="mr-3 text-[#4fb1b4]" />
                  <span className="text-gray-300">{t('footer.contact.website')}</span>
                </div>
              </div>
            </div>

            {/* Legal Info */}
            {/* <div>
              <h3 className="text-xl font-bold mb-6">{t('footer.legal.title')}</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <p>{t('footer.legal.creditCode')}</p>
                <p>{t('footer.legal.creditNumber')}</p>
                <p className="mt-4">{t('footer.legal.license')}</p>
                <p>{t('footer.legal.licenseNumber')}</p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-[#1e3a52] py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">{t('footer.form.title')}</h3>
              <p className="text-gray-300">{t('footer.form.subtitle')}</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder={t('footer.form.placeholders.name')}
                  className="bg-white bg-opacity-10 border border-gray-400 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#4fb1b4]"
                />
                <input
                  type="email"
                  placeholder={t('footer.form.placeholders.email')}
                  className="bg-white bg-opacity-10 border border-gray-400 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#4fb1b4]"
                />
              </div>
              <textarea
                placeholder={t('footer.form.placeholders.message')}
                rows={4}
                className="w-full bg-white bg-opacity-10 border border-gray-400 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#4fb1b4] mb-4"
              />
              <button className="w-full bg-[#4fb1b4] hover:bg-[#3a9a9d] text-white py-3 rounded-lg font-semibold transition-colors">
                {t('footer.form.submit')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#1a2f47] py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                <p>{t('footer.bottom.copyright')} |
                  <button className="hover:text-white ml-2">{t('footer.bottom.privacy')}</button>
                </p>
                <div className="flex items-center space-x-4 mt-2">
                  <button className="flex items-center hover:text-white">
                    <img
                      src="https://ext.same-assets.com/4081831888/3329168636.png"
                      alt="公安备案"
                      className="h-4 mr-1"
                    />
                    {t('footer.bottom.police')}
                  </button>
                  <button className="hover:text-white">
                    {t('footer.bottom.icp')}
                  </button>
                </div>
              </div>

              <button
                onClick={scrollToTop}
                className="bg-[#4fb1b4] hover:bg-[#3a9a9d] text-white p-3 rounded-full transition-colors"
                aria-label="回到顶部"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
