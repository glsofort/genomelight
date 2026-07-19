import { useTranslation } from 'react-i18next'
import { Brain, Cpu, Database, Dna, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import ComplianceNotice from './ComplianceNotice'

type ContentItem = {
  title: string
  description: string
}

const aiCapabilityIcons = [Cpu, Database, Brain, FileText]

const GLSofort = () => {
  const { t } = useTranslation()
  const aiCapabilities = t('glsofort.aiCapabilities.items', {
    returnObjects: true
  }) as ContentItem[]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#173449] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              {t('glsofort.hero.title')}
            </h1>
            <p className="text-xl mb-8 max-w-5xl mx-auto leading-relaxed px-6 text-left">
              {t('glsofort.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-[#264b69] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                {t('glsofort.hero.buttons.demo')}
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-[#264b69] px-8 py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                {t('glsofort.hero.buttons.contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ComplianceNotice />

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-8 border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t('glsofort.intro.title')}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-left">
            {t('glsofort.intro.description')}
          </p>
          <figure className="bg-gray-50 rounded-xl p-8">
            <img
              src="/images/glsofort/platform-interface.jpeg"
              alt={t('glsofort.intro.title')}
              width="2527"
              height="1002"
              loading="lazy"
              decoding="async"
              className="mx-auto w-full max-w-5xl border border-[#cad9d7] object-contain"
            />
            <figcaption className="mx-auto mt-4 max-w-5xl text-sm leading-6 text-gray-600">
              {t('glsofort.intro.imageCaption')}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Service Range Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t('glsofort.serviceRange.title')}
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#88d4e8]">
                  <tr>
                    <th className="px-6 py-4 text-left text-[#1c436e] font-bold text-lg">
                      {t('glsofort.serviceRange.table.headers.type')}
                    </th>
                    <th className="px-6 py-4 text-left text-[#1c436e] font-bold text-lg">
                      {t('glsofort.serviceRange.table.headers.scope')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">
                      {t('glsofort.serviceRange.table.rows.panel.type')}
                    </td>
                    <td className="px-6 py-4">
                      {t('glsofort.serviceRange.table.rows.panel.scope')}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium">
                      {t('glsofort.serviceRange.table.rows.wes.type')}
                    </td>
                    <td className="px-6 py-4">
                      {t('glsofort.serviceRange.table.rows.wes.scope')}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">
                      {t('glsofort.serviceRange.table.rows.wgs.type')}
                    </td>
                    <td className="px-6 py-4">
                      {t('glsofort.serviceRange.table.rows.wgs.scope')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section
        id="ai-capabilities"
        className="scroll-mt-28 border-y border-[#d5e1df] bg-[#f2f7f6] py-20 md:py-28"
        aria-labelledby="ai-capabilities-title"
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase text-[#9d4f59]">
                AI / CLOSED-LOOP ANALYSIS
              </p>
              <h2
                id="ai-capabilities-title"
                className="mt-4 text-3xl font-semibold text-[#173449] md:text-4xl"
              >
                {t('glsofort.aiCapabilities.title')}
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#586f78]">
              {t('glsofort.aiCapabilities.description')}
            </p>
          </div>

          <div className="mt-12 grid border-y border-[#c8d8d6] md:grid-cols-2 lg:grid-cols-4">
            {aiCapabilities.map((item, index) => {
              const Icon = aiCapabilityIcons[index] ?? Brain
              return (
                <article
                  key={item.title}
                  className="border-b border-[#c8d8d6] py-8 md:border-r md:px-7 lg:border-b-0 lg:last:border-r-0"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      className="h-7 w-7 text-[#2d8f91]"
                      aria-hidden="true"
                    />
                    <span className="text-xs text-[#8a9da2]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[#173449]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#60747b]">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>

          <p className="mt-7 border-l-2 border-[#9d4f59] pl-5 text-sm leading-7 text-[#60747b]">
            {t('glsofort.aiCapabilities.note')}
          </p>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t('glsofort.advantages.title')}
          </h2>

          <div className="max-w-4xl mx-auto">
            <ul className="space-y-6">
              {(
                t('glsofort.advantages.items', {
                  returnObjects: true
                }) as string[]
              ).map((advantage: string, index: number) => (
                <li
                  key={advantage.slice(0, 20)}
                  className="flex items-start bg-white rounded-lg p-6 shadow-md"
                >
                  <div className="w-8 h-8 bg-[#4fb1b4] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{advantage}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t('glsofort.applications.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(
              t('glsofort.applications.areas', {
                returnObjects: true
              }) as Array<{ title: string; description: string }>
            ).map((area: { title: string; description: string }) => (
              <div
                key={area.title}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#264b69] to-[#4fb1b4] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Dna className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#264b69] mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#264b69] text-white">
        <div className="mx-800 px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">{t('glsofort.cta.title')}</h3>
          <p className="text-xl mb-8">{t('glsofort.cta.subtitle')}</p>
          <Link
            to="/contact"
            className="bg-[#4fb1b4] hover:bg-[#3a9a9d] text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            {t('glsofort.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default GLSofort
