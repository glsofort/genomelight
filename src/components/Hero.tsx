import { ArrowRight, Check, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Hero = () => {
  const { t } = useTranslation()
  const scope = t('hero.scope', { returnObjects: true }) as string[]

  return (
    <section
      className="overflow-hidden border-b border-[#d7e3e1] bg-[#f4f8f7]"
      aria-labelledby="home-hero-title"
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-[#d7e3e1]" />
        <div className="container relative mx-auto min-h-[740px] px-5 pb-[270px] pt-12 md:px-8 lg:min-h-[620px] lg:pb-0 lg:pt-0">
          <img
            src="/images/genomelight-hero-scene.png"
            alt={t('home.principles.illustrationAlt')}
            width="1220"
            height="520"
            decoding="async"
            className="pointer-events-none absolute bottom-0 left-1/2 w-[610px] max-w-none -translate-x-1/2 object-contain object-bottom lg:bottom-5 lg:left-auto lg:right-[-2rem] lg:w-[64%] lg:max-w-[780px] lg:translate-x-0"
          />

          <div className="relative z-10 max-w-[34rem] lg:flex lg:min-h-[620px] lg:flex-col lg:justify-center lg:py-14">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-[#247c7f]">
              <span className="h-px w-10 bg-[#247c7f]" aria-hidden="true" />
              {t('hero.eyebrow')}
            </p>
            <h1
              id="home-hero-title"
              className="mb-5 text-5xl font-semibold leading-[1.04] text-[#123247] md:text-6xl"
            >
              {t('hero.title')}
            </h1>
            <p className="max-w-2xl text-xl font-semibold leading-8 text-[#1e465b] md:text-2xl md:leading-9">
              {t('hero.subtitle')}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#526b75] md:text-lg">
              {t('hero.description2')}
            </p>

            <ul className="mt-6 flex max-w-2xl flex-wrap gap-x-5 gap-y-3 text-sm text-[#385665]">
              {scope.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center gap-2 border-l border-[#8fc0bc] pl-3"
                >
                  <Check
                    className="h-4 w-4 shrink-0 text-[#247c7f]"
                    aria-hidden="true"
                  />
                  <span className="text-[11px] font-semibold text-[#2d8f91]">
                    0{index + 1}
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/about"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#173449] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#245f70]"
              >
                {t('hero.buttons.learnMore')}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#9bb2b8] bg-white/60 px-6 py-3 font-semibold text-[#173449] transition-colors hover:border-[#173449] hover:bg-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {t('hero.buttons.contact')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
