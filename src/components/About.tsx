import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-white">
      {/* Company Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#264b69] mb-8 border-b-4 border-[#4fb1b4] inline-block pb-2">
              {t('about.companyIntro.title')}
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-[#264b69] mb-6">
                {t('about.companyIntro.companyName')}
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>{t('about.companyIntro.description1')}</p>
                <p>{t('about.companyIntro.description2')}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="rounded-[36px] overflow-hidden shadow-lg">
              <img
                src="/images/1224048843.jpeg"
                alt="Company Office 1"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="rounded-[36px] overflow-hidden shadow-lg">
              <img
                src="/images/1191796784.jpeg"
                alt="Company Office 2"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t('about.culture.title')}
          </h1>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#264b69] mb-4">{t('about.culture.mission.title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('about.culture.mission.content')}</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#264b69] mb-4">{t('about.culture.vision.title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('about.culture.vision.content')}</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#264b69] mb-4">{t('about.culture.product.title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('about.culture.product.content')}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 text-center">
              <h3 className="text-2xl font-bold text-[#264b69] mb-4">{t('about.culture.service.title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('about.culture.service.content')}</p>
            </div>
            <div className="md:col-span-3 text-center">
              <h3 className="text-2xl font-bold text-[#264b69] mb-4">{t('about.culture.values.title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('about.culture.values.content')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t('about.team.title')}
          </h1>

          <div className="mb-16">
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              {t('about.team.description')}
            </p>
          </div>

          {/* Team Members */}
          <div className="space-y-16">
            {/* Li Wenhui - CTO */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/4 text-center">
                  <div className="w-48 h-48 rounded-full mx-auto mb-4 bg-gradient-to-br from-[#264b69] to-[#4fb1b4] flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">李</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#264b69]">{t('about.team.members.liWenhui.name')}</h3>
                    <p className="text-[#4fb1b4] font-semibold">{t('about.team.members.liWenhui.title')}</p>
                  </div>
                </div>
                <div className="lg:w-3/4">
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg leading-relaxed">{t('about.team.members.liWenhui.description')}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-[#264b69] mb-2">{t('about.team.members.liWenhui.experience.title')}</h4>
                        <ul className="space-y-1 text-sm">
                          {(t('about.team.members.liWenhui.experience.items', { returnObjects: true }) as string[]).map((item: string) => (
                            <li key={item} className="flex items-start">
                              <span className="w-2 h-2 bg-[#4fb1b4] rounded-full mt-2 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#264b69] mb-2">{t('about.team.members.liWenhui.achievements.title')}</h4>
                        <ul className="space-y-1 text-sm">
                          {(t('about.team.members.liWenhui.achievements.items', { returnObjects: true }) as string[]).map((item: string) => (
                            <li key={item} className="flex items-start">
                              <span className="w-2 h-2 bg-[#4fb1b4] rounded-full mt-2 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Liu Yunwei - CEO */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/4 text-center">
                  <div className="w-48 h-48 rounded-full mx-auto mb-4 bg-gradient-to-br from-[#bf5d60] to-[#cc8b57] flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">刘</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#264b69]">{t('about.team.members.liuYunwei.name')}</h3>
                    <p className="text-[#4fb1b4] font-semibold">{t('about.team.members.liuYunwei.title')}</p>
                  </div>
                </div>
                <div className="lg:w-3/4">
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg leading-relaxed">{t('about.team.members.liuYunwei.description')}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-[#264b69] mb-2">{t('about.team.members.liuYunwei.background.title')}</h4>
                        <ul className="space-y-1 text-sm">
                          {(t('about.team.members.liuYunwei.background.items', { returnObjects: true }) as string[]).map((item: string) => (
                            <li key={item} className="flex items-start">
                              <span className="w-2 h-2 bg-[#4fb1b4] rounded-full mt-2 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#264b69] mb-2">{t('about.team.members.liuYunwei.experience.title')}</h4>
                        <ul className="space-y-1 text-sm">
                          {(t('about.team.members.liuYunwei.experience.items', { returnObjects: true }) as string[]).map((item: string) => (
                            <li key={item} className="flex items-start">
                              <span className="w-2 h-2 bg-[#4fb1b4] rounded-full mt-2 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wang Jia - CIO */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/4 text-center">
                  <div className="w-48 h-48 rounded-full mx-auto mb-4 bg-gradient-to-br from-[#4fb1b4] to-[#264b69] flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">王</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#264b69]">{t('about.team.members.wangJia.name')}</h3>
                    <p className="text-[#4fb1b4] font-semibold">{t('about.team.members.wangJia.title')}</p>
                  </div>
                </div>
                <div className="lg:w-3/4">
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg leading-relaxed">{t('about.team.members.wangJia.description')}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-[#264b69] mb-2">{t('about.team.members.wangJia.background.title')}</h4>
                        <ul className="space-y-1 text-sm">
                          {(t('about.team.members.wangJia.background.items', { returnObjects: true }) as string[]).map((item: string) => (
                            <li key={item} className="flex items-start">
                              <span className="w-2 h-2 bg-[#4fb1b4] rounded-full mt-2 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#264b69] mb-2">{t('about.team.members.wangJia.expertise.title')}</h4>
                        <ul className="space-y-1 text-sm">
                          {(t('about.team.members.wangJia.expertise.items', { returnObjects: true }) as string[]).map((item: string) => (
                            <li key={item} className="flex items-start">
                              <span className="w-2 h-2 bg-[#4fb1b4] rounded-full mt-2 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ding Hongyue */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/4 text-center">
                  <div className="w-48 h-48 rounded-full mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">丁</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#264b69]">{t('about.team.members.dingHongyue.name')}</h3>
                    <p className="text-[#4fb1b4] font-semibold">{t('about.team.members.dingHongyue.title')}</p>
                  </div>
                </div>
                <div className="lg:w-3/4">
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg leading-relaxed">{t('about.team.members.dingHongyue.description')}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-[#264b69] mb-2">{t('about.team.members.dingHongyue.experience.title')}</h4>
                        <ul className="space-y-1 text-sm">
                          {(t('about.team.members.dingHongyue.experience.items', { returnObjects: true }) as string[]).map((item: string) => (
                            <li key={item} className="flex items-start">
                              <span className="w-2 h-2 bg-[#4fb1b4] rounded-full mt-2 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#264b69] mb-2">{t('about.team.members.dingHongyue.achievements.title')}</h4>
                        <ul className="space-y-1 text-sm">
                          {(t('about.team.members.dingHongyue.achievements.items', { returnObjects: true }) as string[]).map((item: string) => (
                            <li key={item} className="flex items-start">
                              <span className="w-2 h-2 bg-[#4fb1b4] rounded-full mt-2 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t('about.privacy.title')}
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('about.privacy.content')}
            </p>
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-16 bg-[#264b69] text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">
            {t('about.cta.title')}
          </h3>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#264b69] mb-8 border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t('about.contact.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('about.contact.description')}
          </p>
          <button className="bg-[#4fb1b4] hover:bg-[#3a9a9d] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            {t('about.contact.button')}
          </button>
        </div>
      </section>
    </div>
  )
}

export default About