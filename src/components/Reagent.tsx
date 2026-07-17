import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Clock3,
  FileCheck2,
  Gauge,
  Info,
  MonitorCog,
  ShieldCheck,
  SlidersHorizontal
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ComplianceNotice from './ComplianceNotice'

type ProductFeature = {
  title: string
  description: string
}

type PerformanceRow = {
  reads: string
  cycles: string
  output: string
  q30: string
  time: string
}

type ApplicationRow = {
  method: string
  application: string
  readLength: string
  dataRequirement: string
  samples: string
}

const featureIcons = [ShieldCheck, SlidersHorizontal, Clock3, BadgeCheck]

const Reagent = () => {
  const { t } = useTranslation()
  const features = t('reagent.page.features.items', {
    returnObjects: true
  }) as ProductFeature[]
  const performanceRows = t('reagent.page.performance.rows', {
    returnObjects: true
  }) as PerformanceRow[]
  const applicationRows = t('reagent.page.applications.rows', {
    returnObjects: true
  }) as ApplicationRow[]

  return (
    <div className="bg-white">
      <section
        className="overflow-hidden border-b border-[#d5e1df] bg-[#f2f7f6]"
        aria-labelledby="reagent-title"
      >
        <div className="container relative mx-auto px-5 pb-10 pt-12 md:px-8 lg:min-h-[580px] lg:pb-0 lg:pt-0">
          <div className="relative z-10 max-w-2xl lg:flex lg:min-h-[580px] lg:flex-col lg:justify-center lg:py-14">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-[#9d4f59]">
              <span className="h-px w-10 bg-[#9d4f59]" aria-hidden="true" />
              {t('reagent.page.eyebrow')}
            </p>
            <h1
              id="reagent-title"
              className="max-w-xl text-4xl font-semibold leading-[1.18] text-[#173449] md:text-5xl"
            >
              {t('reagent.page.title')}
            </h1>
            <p className="mt-4 text-lg font-semibold text-[#9d4f59]">
              {t('reagent.page.method')}
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#526a73] md:text-lg">
              {t('reagent.page.summary')}
            </p>

            <dl className="mt-7 flex max-w-2xl flex-wrap gap-x-6 gap-y-3 border-y border-[#c8d8d6] py-4 text-sm">
              <div className="flex items-center gap-2">
                <FileCheck2
                  className="h-4 w-4 text-[#247c7f]"
                  aria-hidden="true"
                />
                <dt className="text-[#71858b]">
                  {t('reagent.page.registration.label')}
                </dt>
                <dd className="font-semibold text-[#173449]">
                  {t('reagent.page.registration.value')}
                </dd>
              </div>
              <div className="flex items-center gap-2">
                <MonitorCog
                  className="h-4 w-4 text-[#247c7f]"
                  aria-hidden="true"
                />
                <dt className="text-[#71858b]">
                  {t('reagent.page.platform.label')}
                </dt>
                <dd className="font-semibold text-[#173449]">
                  {t('reagent.page.platform.value')}
                </dd>
              </div>
              <div className="flex items-center gap-2">
                <Boxes className="h-4 w-4 text-[#247c7f]" aria-hidden="true" />
                <dt className="text-[#71858b]">
                  {t('reagent.page.composition.label')}
                </dt>
                <dd className="font-semibold text-[#173449]">
                  {t('reagent.page.composition.value')}
                </dd>
              </div>
            </dl>

            <div className="mt-7 flex gap-3">
              <a
                href="#performance"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 bg-[#173449] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#245f70] sm:flex-none"
              >
                {t('reagent.page.buttons.performance')}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-12 flex-1 items-center justify-center border border-[#9bb2b8] bg-white/65 px-5 py-3 font-semibold text-[#173449] transition-colors hover:border-[#173449] hover:bg-white sm:flex-none"
              >
                {t('reagent.page.buttons.contact')}
              </Link>
            </div>
          </div>

          <figure className="relative mx-auto mt-8 w-[280px] lg:absolute lg:bottom-16 lg:right-10 lg:mt-0 lg:w-[470px]">
            <img
              src="/images/reagent-kit-product.jpeg"
              alt={t('reagent.page.imageAlt')}
              width="447"
              height="282"
              decoding="async"
              className="h-auto w-full mix-blend-multiply"
            />
            <figcaption className="mt-3 text-center text-xs leading-5 text-[#71858b]">
              {t('reagent.page.imageCaption')}
            </figcaption>
          </figure>
        </div>
      </section>

      <ComplianceNotice />

      <nav
        className="border-b border-[#d5e1df] bg-white"
        aria-label={t('reagent.page.nav.label')}
      >
        <div className="container mx-auto grid grid-cols-3 px-5 md:px-8">
          {(['features', 'performance', 'applications'] as const).map(
            (section, index) => (
              <a
                key={section}
                href={`#${section}`}
                className="flex min-h-16 items-center justify-center gap-2 border-r border-[#e0e8e7] text-sm font-semibold text-[#385665] transition-colors first:border-l hover:bg-[#f2f7f6] hover:text-[#247c7f]"
              >
                <span className="text-xs text-[#2d8f91]">0{index + 1}</span>
                {t(`reagent.page.nav.${section}`)}
              </a>
            )
          )}
        </div>
      </nav>

      <section
        id="features"
        className="scroll-mt-32 py-20 md:py-28"
        aria-labelledby="features-title"
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase text-[#9d4f59]">
                01 / FEATURES
              </p>
              <h2
                id="features-title"
                className="text-3xl font-semibold text-[#173449] md:text-4xl"
              >
                {t('reagent.page.features.title')}
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-7 text-[#586e77] md:text-lg">
              {t('reagent.page.features.description')}
            </p>
          </div>

          <div className="mt-12 grid border-y border-[#c8d8d6] md:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = featureIcons[index] ?? Gauge
              return (
                <article
                  key={feature.title}
                  className="border-b border-[#c8d8d6] py-8 md:border-b-0 md:border-r md:px-7 md:last:border-r-0"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      className="h-7 w-7 text-[#9d4f59]"
                      aria-hidden="true"
                    />
                    <span className="text-xs text-[#8a9da2]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[#173449]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#63777f]">
                    {feature.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="performance"
        className="scroll-mt-32 border-y border-[#d5e1df] bg-[#f2f7f6] py-20 md:py-28"
        aria-labelledby="performance-title"
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase text-[#2d8f91]">
                02 / PERFORMANCE
              </p>
              <h2
                id="performance-title"
                className="text-3xl font-semibold text-[#173449] md:text-4xl"
              >
                {t('reagent.page.performance.title')}
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-7 text-[#586e77] md:text-lg">
              {t('reagent.page.performance.description')}
            </p>
          </div>

          <div className="mt-12 overflow-x-auto border border-[#c8d8d6] bg-white">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <caption className="sr-only">
                {t('reagent.page.performance.title')}
              </caption>
              <thead className="bg-[#173449] text-white">
                <tr>
                  {(['reads', 'cycles', 'output', 'q30', 'time'] as const).map(
                    (header) => (
                      <th
                        key={header}
                        scope="col"
                        className="px-5 py-4 text-sm font-semibold"
                      >
                        {t(`reagent.page.performance.headers.${header}`)}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {performanceRows.map((row) => (
                  <tr
                    key={`${row.reads}-${row.cycles}`}
                    className="border-b border-[#dbe5e4] last:border-b-0 even:bg-[#f7faf9]"
                  >
                    <td className="px-5 py-4 font-semibold text-[#173449]">
                      {row.reads}
                    </td>
                    <td className="px-5 py-4 text-[#4f6670]">{row.cycles}</td>
                    <td className="px-5 py-4 font-semibold text-[#247c7f]">
                      {row.output}
                    </td>
                    <td className="px-5 py-4 text-[#4f6670]">{row.q30}</td>
                    <td className="px-5 py-4 text-[#4f6670]">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 flex max-w-5xl items-start gap-3 text-sm leading-6 text-[#63777f]">
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-[#9d4f59]"
              aria-hidden="true"
            />
            {t('reagent.page.performance.note')}
          </p>
        </div>
      </section>

      <section
        id="applications"
        className="scroll-mt-32 py-20 md:py-28"
        aria-labelledby="applications-title"
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase text-[#9d4f59]">
                03 / APPLICATIONS
              </p>
              <h2
                id="applications-title"
                className="text-3xl font-semibold text-[#173449] md:text-4xl"
              >
                {t('reagent.page.applications.title')}
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-7 text-[#586e77] md:text-lg">
              {t('reagent.page.applications.description')}
            </p>
          </div>

          <div className="mt-12 overflow-x-auto border border-[#c8d8d6] bg-white">
            <table className="w-full min-w-[940px] border-collapse text-left">
              <caption className="sr-only">
                {t('reagent.page.applications.title')}
              </caption>
              <thead className="bg-[#173449] text-white">
                <tr>
                  {(
                    [
                      'method',
                      'application',
                      'readLength',
                      'dataRequirement',
                      'samples'
                    ] as const
                  ).map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="px-5 py-4 text-sm font-semibold"
                    >
                      {t(`reagent.page.applications.headers.${header}`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {applicationRows.map((row) => (
                  <tr
                    key={`${row.method}-${row.application}`}
                    className="border-b border-[#dbe5e4] last:border-b-0 even:bg-[#f7faf9]"
                  >
                    <td className="px-5 py-4 font-semibold text-[#173449]">
                      {row.method}
                    </td>
                    <td className="px-5 py-4 text-[#4f6670]">
                      {row.application}
                    </td>
                    <td className="px-5 py-4 text-[#4f6670]">
                      {row.readLength}
                    </td>
                    <td className="px-5 py-4 text-[#4f6670]">
                      {row.dataRequirement}
                    </td>
                    <td className="px-5 py-4 font-semibold text-[#247c7f]">
                      {row.samples}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 flex max-w-5xl items-start gap-3 text-sm leading-6 text-[#63777f]">
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-[#9d4f59]"
              aria-hidden="true"
            />
            {t('reagent.page.applications.note')}
          </p>
        </div>
      </section>

      <section className="bg-[#173449] py-16 text-white">
        <div className="container mx-auto flex flex-col gap-7 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-3xl">
              {t('reagent.page.cta.title')}
            </h2>
            <p className="mt-3 text-base leading-7 text-white/72">
              {t('reagent.page.cta.description')}
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-white px-6 py-3 font-semibold text-[#173449] transition-colors hover:bg-[#e7f2f0]"
          >
            {t('reagent.page.cta.button')}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Reagent
