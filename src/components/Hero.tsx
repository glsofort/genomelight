import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "https://ext.same-assets.com/4081831888/753706709.jpeg",
      title: "基因光照亮健康未来",
      subtitle: "专业的基因检测与分析服务"
    },
    {
      image: "https://ext.same-assets.com/4081831888/542701640.jpeg",
      title: "AI驱动的基因解析",
      subtitle: "融合人工智能与基因组学"
    },
    {
      image: "https://ext.same-assets.com/4081831888/3495893387.jpeg",
      title: "罕见病基因诊断",
      subtitle: "精准诊断，个性化治疗"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10" />
        </div>
      ))}

      {/* Content Overlay */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            {t('hero.subtitle')}
          </p>
          <div className="text-lg md:text-xl mb-8 space-y-2">
            <p>{t('hero.description1')}</p>
            <p>{t('hero.description2')}</p>
            <p>{t('hero.description3')}</p>
            <p>{t('hero.description4')}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#4fb1b4] hover:bg-[#3a9a9d] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              {t('hero.buttons.learnMore')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#264b69] px-8 py-3 rounded-lg font-semibold transition-colors">
              {t('hero.buttons.contact')}
            </button>
          </div>
        </div>
      </div> */}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
