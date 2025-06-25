import { useTranslation } from 'react-i18next'
import {
  Database,
  Shield,
  Settings,
  Archive,
  Zap,
  Eye,
  Clock,
  TrendingUp,
  Unlock,
  Server,
  DollarSign,
  HardDrive,
  Cloud,
  CheckCircle,
  BarChart3
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Compression = () => {
  const { t } = useTranslation()

  // Icon mapping for advantages
  const iconMap = {
    Database,
    Shield,
    Settings,
    Archive,
    Zap,
    Eye,
    Clock,
    TrendingUp,
    Unlock,
    Server,
    DollarSign
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              {t('compression.hero.title')}
            </h1>
            <p className="text-xl mb-8 max-w-5xl mx-auto leading-relaxed">
              {t('compression.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to='/contact' className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors block text-center">
                {t('compression.hero.buttons.solutions')}
              </Link>
              <Link to='/contact' className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-colors block text-center">
                {t('compression.hero.buttons.contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#264b69] mb-8 border-b-4 border-indigo-500 inline-block pb-2">
              {t('compression.overview.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {t('compression.overview.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://ext.same-assets.com/4081831888/2948968051.jpeg"
                alt="ZipHelix Data Compression System"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <Archive className="w-8 h-8 text-indigo-500 mr-4 mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#264b69] mb-2">ZipHelix压缩技术</h3>
                  <p className="text-gray-700">独创算法实现2.25倍于gzip的压缩率，显著节省存储空间</p>
                </div>
              </div>
              <div className="flex items-start">
                <HardDrive className="w-8 h-8 text-purple-500 mr-4 mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#264b69] mb-2">智能数据管理</h3>
                  <p className="text-gray-700">自动化归档和备份，确保数据安全和高效管理</p>
                </div>
              </div>
              <div className="flex items-start">
                <Cloud className="w-8 h-8 text-blue-500 mr-4 mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#264b69] mb-2">多云部署</h3>
                  <p className="text-gray-700">支持本地、私有云和混合云等多种部署方式</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-indigo-500 inline-block pb-2">
            {t('compression.features.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Archive className="w-12 h-12 text-indigo-500 mr-4" />
                <h3 className="text-xl font-bold text-[#264b69]">
                  {t('compression.features.compression.title')}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('compression.features.compression.description')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Settings className="w-12 h-12 text-purple-500 mr-4" />
                <h3 className="text-xl font-bold text-[#264b69]">
                  {t('compression.features.automation.title')}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('compression.features.automation.description')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Shield className="w-12 h-12 text-green-500 mr-4" />
                <h3 className="text-xl font-bold text-[#264b69]">
                  {t('compression.features.storage.title')}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('compression.features.storage.description')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Server className="w-12 h-12 text-orange-500 mr-4" />
                <h3 className="text-xl font-bold text-[#264b69]">
                  {t('compression.features.flexible.title')}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('compression.features.flexible.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-indigo-500 inline-block pb-2">
            {t('compression.solutions.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {(t('compression.solutions.items', { returnObjects: true }) as Array<{title: string; description: string}>).map((solution: {title: string; description: string}) => (
              <div key={solution.title} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#264b69]">{solution.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-indigo-500 inline-block pb-2">
            {t('compression.advantages.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(t('compression.advantages.items', { returnObjects: true }) as Array<{title: string; description: string; icon: string}>).map((advantage: {title: string; description: string; icon: string}) => {
              const IconComponent = iconMap[advantage.icon as keyof typeof iconMap] || Database
              return (
                <div key={advantage.title} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#264b69]">{advantage.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed ml-12">{advantage.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-indigo-500 inline-block pb-2">
            {t('compression.specifications.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#264b69] mb-6">
                {t('compression.specifications.compression.title')}
              </h3>
              <ul className="space-y-3">
                {(t('compression.specifications.compression.items', { returnObjects: true }) as string[]).map((item: string) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#264b69] mb-6">
                {t('compression.specifications.system.title')}
              </h3>
              <ul className="space-y-3">
                {(t('compression.specifications.system.items', { returnObjects: true }) as string[]).map((item: string) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#264b69] mb-6">
                {t('compression.specifications.deployment.title')}
              </h3>
              <ul className="space-y-3">
                {(t('compression.specifications.deployment.items', { returnObjects: true }) as string[]).map((item: string) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Scenarios Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-indigo-500 inline-block pb-2">
            {t('compression.applications.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HardDrive className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#264b69] mb-4 text-center">
                {t('compression.applications.hospital.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-center">
                {t('compression.applications.hospital.description')}
              </p>
              <ul className="space-y-2">
                {(t('compression.applications.hospital.features', { returnObjects: true }) as string[]).map((feature: string) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#264b69] mb-4 text-center">
                {t('compression.applications.research.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-center">
                {t('compression.applications.research.description')}
              </p>
              <ul className="space-y-2">
                {(t('compression.applications.research.features', { returnObjects: true }) as string[]).map((feature: string) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#264b69] mb-4 text-center">
                {t('compression.applications.biotech.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-center">
                {t('compression.applications.biotech.description')}
              </p>
              <ul className="space-y-2">
                {(t('compression.applications.biotech.features', { returnObjects: true }) as string[]).map((feature: string) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-indigo-500 inline-block pb-2">
            {t('compression.workflow.title')}
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {(t('compression.workflow.steps', { returnObjects: true }) as Array<{title: string; description: string}>).map((step: {title: string; description: string}, index: number) => (
                <div key={step.title} className="text-center relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#264b69] mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{step.description}</p>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform translate-x-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">
            {t('compression.cta.title')}
          </h3>
          <p className="text-xl mb-8">
            {t('compression.cta.subtitle')}
          </p>
          <Link to='/contact' className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
            {t('compression.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Compression
