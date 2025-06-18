import { useTranslation } from 'react-i18next'
import { Heart, Users, Baby, Shield, Dna, UserCheck, Activity, Clock, CheckCircle } from 'lucide-react'

const Health = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              {t('health.hero.title')}
            </h1>
            <p className="text-xl mb-8 max-w-5xl mx-auto leading-relaxed">
              {t('health.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                {t('health.hero.buttons.consultation')}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                {t('health.hero.buttons.packages')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#264b69] mb-8 border-b-4 border-green-500 inline-block pb-2">
              {t('health.overview.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {t('health.overview.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://ext.same-assets.com/4081831888/1017918516.png"
                alt="Health Screening"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <Heart className="w-8 h-8 text-green-500 mr-4 mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#264b69] mb-2">全生命周期健康管理</h3>
                  <p className="text-gray-700">从儿童到成人，提供个性化的健康风险评估和管理方案</p>
                </div>
              </div>
              <div className="flex items-start">
                <Dna className="w-8 h-8 text-blue-500 mr-4 mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#264b69] mb-2">精准基因检测</h3>
                  <p className="text-gray-700">基于先进的基因测序技术，提供精确的疾病风险预测</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="w-8 h-8 text-purple-500 mr-4 mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#264b69] mb-2">安全用药指导</h3>
                  <p className="text-gray-700">个体化用药建议，避免药物不良反应</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-green-500 inline-block pb-2">
            {t('health.packages.title')}
          </h2>

          {/* Whole Exome Packages */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#264b69] mb-8 text-center">全外显子组健康评估套餐</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <UserCheck className="w-12 h-12 text-green-500 mr-4" />
                  <h4 className="text-xl font-bold text-[#264b69]">
                    {t('health.packages.wes.adult.title')}
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t('health.packages.wes.adult.description')}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Baby className="w-12 h-12 text-blue-500 mr-4" />
                  <h4 className="text-xl font-bold text-[#264b69]">
                    {t('health.packages.wes.child.title')}
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t('health.packages.wes.child.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Whole Genome Packages */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#264b69] mb-8 text-center">全基因组健康评估套餐</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Dna className="w-12 h-12 text-purple-500 mr-4" />
                  <h4 className="text-xl font-bold text-[#264b69]">
                    {t('health.packages.wgs.adult.title')}
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t('health.packages.wgs.adult.description')}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Baby className="w-12 h-12 text-green-500 mr-4" />
                  <h4 className="text-xl font-bold text-[#264b69]">
                    {t('health.packages.wgs.child.title')}
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t('health.packages.wgs.child.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Gene Chip Packages */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#264b69] mb-8 text-center">基因芯片筛查套餐</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Activity className="w-12 h-12 text-orange-500 mr-4" />
                  <h4 className="text-xl font-bold text-[#264b69]">
                    {t('health.packages.chip.adult.title')}
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t('health.packages.chip.adult.description')}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Baby className="w-12 h-12 text-pink-500 mr-4" />
                  <h4 className="text-xl font-bold text-[#264b69]">
                    {t('health.packages.chip.child.title')}
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t('health.packages.chip.child.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Specialized Packages */}
          <div>
            <h3 className="text-2xl font-bold text-[#264b69] mb-8 text-center">专项检测套餐</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h4 className="text-lg font-bold text-[#264b69] mb-3">
                  {t('health.packages.specialized.cancer.title')}
                </h4>
                <p className="text-gray-700 text-sm">
                  {t('health.packages.specialized.cancer.description')}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h4 className="text-lg font-bold text-[#264b69] mb-3">
                  {t('health.packages.specialized.childMedicine.title')}
                </h4>
                <p className="text-gray-700 text-sm">
                  {t('health.packages.specialized.childMedicine.description')}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h4 className="text-lg font-bold text-[#264b69] mb-3">
                  {t('health.packages.specialized.healthReport.title')}
                </h4>
                <p className="text-gray-700 text-sm">
                  {t('health.packages.specialized.healthReport.description')}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
                <h4 className="text-lg font-bold text-[#264b69] mb-3">
                  {t('health.packages.specialized.childTraits.title')}
                </h4>
                <p className="text-gray-700 text-sm">
                  {t('health.packages.specialized.childTraits.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-green-500 inline-block pb-2">
            {t('health.features.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#264b69] mb-4">
                {t('health.features.comprehensive.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('health.features.comprehensive.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#264b69] mb-4">
                {t('health.features.precision.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('health.features.precision.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#264b69] mb-4">
                {t('health.features.safety.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('health.features.safety.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#264b69] mb-4">
                {t('health.features.lifelong.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('health.features.lifelong.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Populations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-green-500 inline-block pb-2">
            {t('health.applications.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-[#264b69] mb-4">
                {t('health.applications.families.title')}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('health.applications.families.items', { returnObjects: true }) as string[]).map((item: string) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <UserCheck className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-[#264b69] mb-4">
                {t('health.applications.individuals.title')}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('health.applications.individuals.items', { returnObjects: true }) as string[]).map((item: string) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Baby className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-[#264b69] mb-4">
                {t('health.applications.children.title')}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('health.applications.children.items', { returnObjects: true }) as string[]).map((item: string) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-[#264b69] mb-4">
                {t('health.applications.seniors.title')}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('health.applications.seniors.items', { returnObjects: true }) as string[]).map((item: string) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-green-500 inline-block pb-2">
            {t('health.process.title')}
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {(t('health.process.steps', { returnObjects: true }) as Array<{title: string; description: string}>).map((step: {title: string; description: string}, index: number) => (
                <div key={step.title} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-16 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">
            {t('health.cta.title')}
          </h3>
          <p className="text-xl mb-8">
            {t('health.cta.subtitle')}
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            {t('health.cta.button')}
          </button>
        </div>
      </section>
    </div>
  )
}

export default Health
