import {
  ArrowUpRight,
  BrainCircuit,
  ClipboardList,
  Database,
  HeartPulse,
  ScanSearch,
  TestTube2,
  UserRoundCheck
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const serviceDefinitions = [
  {
    key: 'glsofort',
    image: '/images/2948968051.jpeg',
    width: 1600,
    height: 900,
    icon: BrainCircuit
  },
  {
    key: 'reagent',
    image: '/images/3253282782.png',
    width: 1910,
    height: 248,
    icon: TestTube2,
    signals: ['NEXTSEQ 500/550', 'BATCH QC']
  },
  {
    key: 'health',
    image: '/images/2058622649.png',
    width: 800,
    height: 800,
    icon: HeartPulse,
    signals: ['WES / WGS', 'PRO REVIEW']
  },
  {
    key: 'lims',
    image: '/images/lims/genomelight-lims-workflow.png',
    width: 741,
    height: 497,
    icon: ClipboardList,
    signals: ['SAMPLE / SOP / QC', 'HIS / LIS / API']
  }
]

const platformWorkflowIcons = [Database, ScanSearch, UserRoundCheck]

const Services = () => {
  const { t } = useTranslation()
  const platformWorkflow = t('home.workflow.steps', {
    returnObjects: true
  }) as Array<{ title: string; description: string }>

  return (
    <section
      className="bg-white py-20 md:py-28"
      aria-labelledby="services-title"
    >
      <div className="container mx-auto px-5 md:px-8">
        <div className="mb-12 grid gap-5 border-b border-[#cdd9da] pb-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase text-[#2d8f91]">
              {t('services.eyebrow')}
            </p>
            <h2
              id="services-title"
              className="text-3xl font-semibold text-[#173449] md:text-4xl"
            >
              {t('services.title')}
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-7 text-[#526670] md:text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {serviceDefinitions.map((service, index) => {
            const Icon = service.icon
            const isFeatured = service.key === 'glsofort'

            if (isFeatured) {
              return (
                <article
                  key={service.key}
                  className="group overflow-hidden border border-[#cbdcda] bg-[#eef5f4] lg:min-h-[520px]"
                >
                  <div className="grid min-h-full sm:grid-cols-[1.05fr_0.95fr]">
                    <div className="flex flex-col p-7 sm:p-9">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-bold uppercase text-[#247c7f]">
                          GLSofort / 01
                        </span>
                        <span className="flex h-11 w-11 items-center justify-center border border-[#9bc5c1] bg-white text-[#247c7f]">
                          <BrainCircuit
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </span>
                      </div>

                      <h3 className="mt-10 max-w-lg text-2xl font-semibold leading-[1.25] text-[#173449]">
                        {t('services.items.glsofort.title')}
                      </h3>
                      <p className="mt-5 max-w-xl text-base leading-7 text-[#526a73]">
                        {t('services.items.glsofort.description')}
                      </p>

                      <Link
                        to={t('services.items.glsofort.link')}
                        className="mt-9 inline-flex w-fit items-center gap-2 border-b border-[#78aaa7] pb-1 text-sm font-semibold text-[#245f70] transition-colors hover:border-[#173449] hover:text-[#173449] sm:mt-auto sm:pt-8"
                      >
                        {t('services.button')}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>

                    <div className="border-t border-[#cbdcda] bg-white/75 p-6 sm:border-l sm:border-t-0 sm:p-7">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs font-bold uppercase text-[#647c83]">
                          {t('home.workflow.eyebrow')}
                        </p>
                        <span className="text-xs text-[#8a9da2]">
                          WGS / WES
                        </span>
                      </div>

                      <ol className="mt-5 border-t border-[#cbdcda]">
                        {platformWorkflow.map((step, stepIndex) => {
                          const StepIcon =
                            platformWorkflowIcons[stepIndex] ?? UserRoundCheck

                          return (
                            <li
                              key={step.title}
                              className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-[#d8e3e2] py-5"
                            >
                              <span className="flex h-11 w-11 items-center justify-center bg-[#173449] text-white">
                                <StepIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                              <div>
                                <span className="text-[11px] font-bold text-[#2d8f91]">
                                  0{stepIndex + 1}
                                </span>
                                <h4 className="mt-0.5 text-base font-semibold text-[#173449]">
                                  {step.title}
                                </h4>
                                <p className="mt-1 text-xs leading-5 text-[#6a7d84]">
                                  {step.description}
                                </p>
                              </div>
                            </li>
                          )
                        })}
                      </ol>
                    </div>
                  </div>
                </article>
              )
            }

            return (
              <article
                key={service.key}
                className="group min-h-[480px] overflow-hidden border border-[#cbdcda] bg-[#eef5f4] transition-colors hover:border-[#8ebfc0]"
              >
                <div className="grid min-h-full sm:grid-cols-[1.05fr_0.95fr]">
                  <div className="flex flex-col p-7 sm:p-9">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-bold uppercase text-[#247c7f]">
                        {service.key} / {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center border border-[#9bc5c1] bg-white text-[#247c7f]">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                    </div>

                    <h3 className="mt-10 text-2xl font-semibold leading-[1.25] text-[#173449]">
                      {t(`services.items.${service.key}.title`)}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-[#526a73]">
                      {t(`services.items.${service.key}.description`)}
                    </p>

                    <Link
                      to={t(`services.items.${service.key}.link`)}
                      className="mt-9 inline-flex w-fit items-center gap-2 border-b border-[#78aaa7] pb-1 text-sm font-semibold text-[#245f70] transition-colors hover:border-[#173449] hover:text-[#173449] sm:mt-auto sm:pt-8"
                    >
                      {t('services.button')}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>

                  <div className="flex flex-col border-t border-[#cbdcda] bg-white/75 p-6 sm:border-l sm:border-t-0 sm:p-7">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-bold uppercase text-[#647c83]">
                        Product view
                      </p>
                      <span className="text-xs text-[#8a9da2]">
                        {service.signals?.[0]}
                      </span>
                    </div>

                    <figure className="relative mt-5 h-48 overflow-hidden bg-[#e8f0ef] sm:h-52">
                      <img
                        src={service.image}
                        alt={t(`services.items.${service.key}.title`)}
                        width={service.width}
                        height={service.height}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
                      />
                    </figure>

                    <div className="mt-5 border-t border-[#cbdcda]">
                      {service.signals?.map((signal, signalIndex) => (
                        <div
                          key={signal}
                          className="flex items-center gap-3 border-b border-[#d8e3e2] py-3 text-xs font-semibold text-[#385665]"
                        >
                          <span className="text-[11px] text-[#2d8f91]">
                            0{signalIndex + 1}
                          </span>
                          {signal}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
