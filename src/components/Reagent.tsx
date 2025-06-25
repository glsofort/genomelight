import { useTranslation } from 'react-i18next'
import { Beaker, Cpu, CheckCircle, BarChart3, Dna, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const Reagent = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#bf5d60] to-[#cc8b57]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              {t('reagent.hero.title')}
            </h1>
            <p className="text-xl mb-8 max-w-5xl mx-auto leading-relaxed">
              {t('reagent.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#bf5d60] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                <Link to='/contact' className="block w-full ">{t('reagent.hero.buttons.specifications')}</Link>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#bf5d60] px-8 py-3 rounded-lg font-semibold transition-colors">
                <Link to='/contact' className="block w-full ">{t('reagent.hero.buttons.contact')}</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#264b69] mb-8 border-b-4 border-[#4fb1b4] inline-block pb-2">
              {t('reagent.overview.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {t('reagent.overview.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <Beaker className="w-12 h-12 text-[#bf5d60] mr-6 mt-2" />
                  <div>
                    <h3 className="text-2xl font-bold text-[#264b69] mb-4">
                      {t('reagent.overview.reagents.title')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('reagent.overview.reagents.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Cpu className="w-12 h-12 text-[#cc8b57] mr-6 mt-2" />
                  <div>
                    <h3 className="text-2xl font-bold text-[#264b69] mb-4">
                      {t('reagent.overview.chips.title')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('reagent.overview.chips.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <img
                src="https://ext.same-assets.com/4081831888/1017918516.png"
                alt="Sequencing Reagent Kit"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Results */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t('reagent.qualityControl.title')}
          </h2>

          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-8">
              {t('reagent.qualityControl.description')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#bf5d60] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-lg">
                      {t('reagent.qualityControl.table.headers.batch')}
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-lg">
                      {t('reagent.qualityControl.table.headers.q30')}
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-lg">
                      {t('reagent.qualityControl.table.headers.reads')}
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-lg">
                      {t('reagent.qualityControl.table.headers.standard')}
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-lg">
                      {t('reagent.qualityControl.table.headers.result')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">GL0120241001</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">91.52%</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-bold">489.65M</td>
                    <td className="px-6 py-4 text-center text-sm" rowSpan={3}>
                      <div className="space-y-1">
                        <div>Q30 &gt; 80%</div>
                        <div>reads &gt; 400M</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">
                          {t('reagent.qualityControl.table.passedStandard')}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium">GL0120241201</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">92.73%</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-bold">432.98M</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">
                          {t('reagent.qualityControl.table.passedStandard')}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">GL0120250101</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">91.20%</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-bold">414.27M</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">
                          {t('reagent.qualityControl.table.passedStandard')}
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t('reagent.applications.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bf5d60] to-[#cc8b57] rounded-full flex items-center justify-center mx-auto mb-6">
                <Dna className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#264b69] mb-4">
                {t('reagent.applications.genetic.title')}
              </h3>
              <ul className="text-gray-700 text-sm space-y-2">
                {(t('reagent.applications.genetic.items', { returnObjects: true }) as string[]).map((item: string) => (
                  <li key={item} className="flex items-start">
                    <span className="w-2 h-2 bg-[#4fb1b4] rounded-full mt-2 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bf5d60] to-[#cc8b57] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#264b69] mb-4">
                {t('reagent.applications.cancer.title')}
              </h3>
              <ul className="text-gray-700 text-sm space-y-2">
                {(t('reagent.applications.cancer.items', { returnObjects: true }) as string[]).map((item: string) => (
                  <li key={item} className="flex items-start">
                    <span className="w-2 h-2 bg-[#4fb1b4] rounded-full mt-2 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bf5d60] to-[#cc8b57] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#264b69] mb-4">
                {t('reagent.applications.reproductive.title')}
              </h3>
              <ul className="text-gray-700 text-sm space-y-2">
                {(t('reagent.applications.reproductive.items', { returnObjects: true }) as string[]).map((item: string) => (
                  <li key={item} className="flex items-start">
                    <span className="w-2 h-2 bg-[#4fb1b4] rounded-full mt-2 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bf5d60] to-[#cc8b57] rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#264b69] mb-4">
                {t('reagent.applications.research.title')}
              </h3>
              <ul className="text-gray-700 text-sm space-y-2">
                {(t('reagent.applications.research.items', { returnObjects: true }) as string[]).map((item: string) => (
                  <li key={item} className="flex items-start">
                    <span className="w-2 h-2 bg-[#4fb1b4] rounded-full mt-2 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t('reagent.features.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-12 h-12 text-[#bf5d60] mr-4" />
                <h3 className="text-xl font-bold text-[#264b69]">
                  {t('reagent.features.quality.title')}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('reagent.features.quality.description')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <BarChart3 className="w-12 h-12 text-[#bf5d60] mr-4" />
                <h3 className="text-xl font-bold text-[#264b69]">
                  {t('reagent.features.performance.title')}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('reagent.features.performance.description')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Shield className="w-12 h-12 text-[#bf5d60] mr-4" />
                <h3 className="text-xl font-bold text-[#264b69]">
                  {t('reagent.features.compatibility.title')}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('reagent.features.compatibility.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t('reagent.specifications.title')}
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#264b69] mb-6">
                    {t('reagent.specifications.technical.title')}
                  </h3>
                  <ul className="space-y-4">
                    {(t('reagent.specifications.technical.items', { returnObjects: true }) as string[]).map((item: string) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#264b69] mb-6">
                    {t('reagent.specifications.applications.title')}
                  </h3>
                  <ul className="space-y-4">
                    {(t('reagent.specifications.applications.items', { returnObjects: true }) as string[]).map((item: string) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#bf5d60] text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">
            {t('reagent.cta.title')}
          </h3>
          <p className="text-xl mb-8">
            {t('reagent.cta.subtitle')}
          </p>
          <button className="bg-white text-[#bf5d60] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            {t('reagent.cta.button')}
          </button>
        </div>
      </section>
    </div>
  )
}

export default Reagent
