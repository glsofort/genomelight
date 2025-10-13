import { Dna, Microscope, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Services = () => {
  const { t } = useTranslation()

  const services = [
    {
      icon: <Dna className="w-16 h-16 text-[#4fb1b4]" />,
      key: 'glsofort',
      image: "/images/2058622649.png"
    },
    {
      icon: <Microscope className="w-16 h-16 text-[#bf5d60]" />,
      key: 'reagent',
      image: "/images/1017918516.png"
    },
    {
      icon: <Users className="w-16 h-16 text-[#cc8b57]" />,
      key: 'health',
      image: "/images/1795410433.png"
    },
    {
      icon: <Dna className="w-16 h-16 text-[#264b69]" />,
      key: 'compression',
      image: "/images/2058622649.png"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#264b69] mb-4">{t('services.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.key} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Service Image */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img
                  src={service.image}
                  alt={t(`services.items.${service.key}.title`)}
                  className="w-32 h-32 object-contain"
                />
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-[#264b69] ml-3">{t(`services.items.${service.key}.title`)}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t(`services.items.${service.key}.description`)}
                </p>

                <div className="space-y-2 mb-6">
                  {(t(`services.items.${service.key}.features`, { returnObjects: true }) as string[]).map((feature: string) => (
                    <div key={feature} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[#4fb1b4] rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-[#264b69] hover:bg-[#1e3a52] text-white py-3 rounded-lg font-semibold transition-colors">
                  <Link to={t(`services.items.${service.key}.link`)} className="block w-full ">{t('services.button')}</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
