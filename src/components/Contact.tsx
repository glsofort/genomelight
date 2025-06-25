import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#264b69] to-[#4fb1b4]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl mb-8 max-w-5xl mx-auto leading-relaxed">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#264b69] mb-8 border-b-4 border-[#4fb1b4] inline-block pb-2">
              {t('contact.welcome.title')}
            </h2>
            <div className="max-w-md mx-auto mb-8">
              <img
                src="https://ext.same-assets.com/4081831888/4239303297.png"
                alt="Contact QR Code"
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-12">
              {t('contact.welcome.description')}
            </p>
            
            {/* Market Manager Contact */}
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-[#264b69] mb-6">
                {t('contact.marketManager.title')}
              </h3>
              <div className="mb-6">
                <img
                  src="/contact1.png"
                  alt="Market Manager QR Code"
                  className="w-48 h-48 mx-auto rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#4fb1b4] mr-3" />
                  <span className="text-gray-700">{t('contact.marketManager.phone')}</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#4fb1b4] mr-3" />
                  <span className="text-gray-700">{t('contact.marketManager.email')}</span>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  {t('contact.marketManager.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#264b69] mb-8">
                {t('contact.info.title')}
              </h2>

              {/* Office Locations */}
              <div className="space-y-8 mb-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <Building className="w-6 h-6 text-[#4fb1b4] mr-3" />
                    <h3 className="text-xl font-bold text-[#264b69]">
                      {t('contact.info.offices.chongqing.title')}
                    </h3>
                  </div>
                  <div className="flex items-start mb-3">
                    <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      {t('contact.info.offices.chongqing.address')}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {t('contact.info.offices.chongqing.description')}
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <Building className="w-6 h-6 text-[#4fb1b4] mr-3" />
                    <h3 className="text-xl font-bold text-[#264b69]">
                      {t('contact.info.offices.shenzhen.title')}
                    </h3>
                  </div>
                  <div className="flex items-start mb-3">
                    <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      {t('contact.info.offices.shenzhen.address')}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {t('contact.info.offices.shenzhen.description')}
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[#4fb1b4] mr-3" />
                    <a href={`tel:${t('contact.info.phone')}`} className="text-gray-700 hover:text-[#4fb1b4] transition-colors">
                      {t('contact.info.phone')}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#4fb1b4] mr-3" />
                    <a href={`mailto:${t('contact.info.email')}`} className="text-gray-700 hover:text-[#4fb1b4] transition-colors">
                      {t('contact.info.email')}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Building className="w-5 h-5 text-[#4fb1b4] mr-3" />
                    <span className="text-gray-700">{t('contact.info.website')}</span>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-[#4fb1b4] mr-3" />
                  <h3 className="text-xl font-bold text-[#264b69]">
                    {t('contact.businessHours.title')}
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">{t('contact.businessHours.weekdays')}</p>
                  <p className="text-gray-700">{t('contact.businessHours.weekends')}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-[#264b69] mb-2">
                  {t('contact.form.title')}
                </h2>
                <p className="text-gray-600 mb-8">
                  {t('contact.form.subtitle')}
                </p>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-green-700">{t('contact.form.success')}</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-200 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                    <span className="text-red-700">{t('contact.form.error')}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.fields.name.label')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.fields.name.placeholder')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4fb1b4] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.fields.company.label')}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.fields.company.placeholder')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4fb1b4] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.fields.phone.label')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.fields.phone.placeholder')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4fb1b4] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.fields.email.label')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.fields.email.placeholder')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4fb1b4] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.fields.service.label')}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4fb1b4] focus:border-transparent"
                    >
                      <option value="">{t('contact.form.fields.service.placeholder')}</option>
                      {(t('contact.form.fields.service.options', { returnObjects: true }) as string[]).map((option: string) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.fields.message.label')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.fields.message.placeholder')}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4fb1b4] focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#4fb1b4] hover:bg-[#3a9a9d] text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? '发送中...' : t('contact.form.submit')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#264b69] mb-4 border-b-4 border-[#4fb1b4] inline-block pb-2">
              {t('contact.map.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('contact.map.description')}
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 text-center">
            <img
              src="https://ext.same-assets.com/4081831888/2299838749.jpeg"
              alt="Office Location Map"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
            <p className="mt-4 text-gray-600">重庆医科大学缙云校区位置图</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
