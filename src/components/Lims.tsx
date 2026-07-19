import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Database,
  ExternalLink,
  FileCheck2,
  FlaskConical,
  Gauge,
  GitBranch,
  History,
  Network,
  PackageSearch,
  ScanLine,
  Search,
  ShieldCheck,
  UsersRound,
  Wrench
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

type ContentItem = {
  title: string
  description: string
}

type PlanItem = ContentItem & {
  label: string
  features: string[]
}

const workflowIcons = [
  ScanLine,
  ClipboardCheck,
  FlaskConical,
  ShieldCheck,
  FileCheck2,
  History
]
const capabilityIcons = [ShieldCheck, Gauge, GitBranch, Network]
const operationIcons = [PackageSearch, Wrench, UsersRound, Database]
const dataAssetIcons = [Database, Search, History, BarChart3]

const Lims = () => {
  const { t } = useTranslation()
  const workflow = t('lims.workflow.steps', {
    returnObjects: true
  }) as ContentItem[]
  const capabilities = t('lims.capabilities.items', {
    returnObjects: true
  }) as ContentItem[]
  const plans = t('lims.plans.items', { returnObjects: true }) as PlanItem[]
  const operations = t('lims.operations.items', {
    returnObjects: true
  }) as ContentItem[]
  const dataAssets = t('lims.dataAssets.items', {
    returnObjects: true
  }) as ContentItem[]
  const deployment = t('lims.deployment.items', {
    returnObjects: true
  }) as ContentItem[]
  const faqs = t('lims.faq.items', { returnObjects: true }) as ContentItem[]

  return (
    <div className="bg-white text-[#173449]">
      <section className="overflow-hidden bg-[#173449] pt-16 text-white md:pt-24">
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase text-[#75d5d2]">
              LAB OPERATIONS / LIMS
            </p>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              {t('lims.hero.title')}
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#d4e1e4] md:text-xl">
              {t('lims.hero.subtitle')}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#4fb1b4] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#3a9a9d]"
              >
                {t('lims.hero.buttons.consult')}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a
                href="#plans"
                className="inline-flex min-h-12 items-center justify-center border border-[#78919e] px-7 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-[#173449]"
              >
                {t('lims.hero.buttons.plans')}
              </a>
            </div>
          </div>

          <ol className="mx-auto mt-14 grid max-w-6xl border-x border-t border-[#496577] sm:grid-cols-3 lg:grid-cols-6">
            {workflow.map((step, index) => {
              const Icon = workflowIcons[index] ?? ClipboardCheck
              return (
                <li
                  key={step.title}
                  className="border-b border-[#496577] px-5 py-6 sm:border-r sm:[&:nth-child(3n)]:border-r-0 lg:border-r lg:[&:nth-child(3n)]:border-r lg:last:border-r-0"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      className="h-6 w-6 text-[#75d5d2]"
                      aria-hidden="true"
                    />
                    <span className="text-[11px] text-[#8fa6b1]">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-5 text-sm font-semibold text-white">
                    {step.title}
                  </p>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <nav
        className="border-b border-[#d5e1df] bg-[#f2f7f6]"
        aria-label={t('lims.nav.label')}
      >
        <div className="container mx-auto grid max-w-6xl grid-cols-2 px-5 sm:grid-cols-5 md:px-8">
          {(
            [
              'workflow',
              'capabilities',
              'plans',
              'dataAssets',
              'deployment'
            ] as const
          ).map((item, index) => (
            <a
              key={item}
              href={`#${item}`}
              className="flex min-h-16 items-center justify-center gap-2 border-r border-[#d5e1df] text-sm font-semibold text-[#385665] first:border-l hover:bg-white hover:text-[#247c7f]"
            >
              <span className="text-xs text-[#2d8f91]">0{index + 1}</span>
              {t(`lims.nav.${item}`)}
            </a>
          ))}
        </div>
      </nav>

      <section id="workflow" className="scroll-mt-28 py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase text-[#9d4f59]">
                  01 / TRACEABLE WORKFLOW
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  {t('lims.workflow.title')}
                </h2>
              </div>
              <p className="max-w-3xl text-lg leading-8 text-[#586f78]">
                {t('lims.workflow.description')}
              </p>
            </div>

            <div className="mt-12 grid border-y border-[#cad9d7] md:grid-cols-2 lg:grid-cols-3">
              {workflow.map((step, index) => {
                const Icon = workflowIcons[index] ?? ClipboardCheck
                return (
                  <section
                    key={step.title}
                    className="border-b border-[#cad9d7] py-8 md:border-r md:px-8 lg:[&:nth-child(3n)]:border-r-0"
                  >
                    <div className="flex items-center justify-between">
                      <Icon
                        className="h-7 w-7 text-[#2d8f91]"
                        aria-hidden="true"
                      />
                      <span className="text-xs text-[#879ba1]">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-3 text-base leading-7 text-[#60747b]">
                      {step.description}
                    </p>
                  </section>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="scroll-mt-28 border-y border-[#d6e1df] bg-[#f2f7f6] py-20 md:py-28"
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase text-[#2d8f91]">
                02 / CORE CAPABILITIES
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                {t('lims.capabilities.title')}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#586f78]">
                {t('lims.capabilities.description')}
              </p>
            </div>

            <div className="mt-12 grid border-y border-[#cad9d7] md:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((item, index) => {
                const Icon = capabilityIcons[index] ?? ShieldCheck
                return (
                  <section
                    key={item.title}
                    className="border-b border-[#cad9d7] py-8 md:border-r md:px-7 lg:border-b-0 lg:last:border-r-0"
                  >
                    <Icon
                      className="h-7 w-7 text-[#9d4f59]"
                      aria-hidden="true"
                    />
                    <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#60747b]">
                      {item.description}
                    </p>
                  </section>
                )
              })}
            </div>

            <div className="mt-8 flex items-start gap-4 border-l-2 border-[#9d4f59] pl-5 text-sm leading-6 text-[#60747b]">
              <ShieldCheck
                className="mt-0.5 h-5 w-5 shrink-0 text-[#9d4f59]"
                aria-hidden="true"
              />
              <p>{t('lims.capabilities.note')}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="scroll-mt-28 py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase text-[#9d4f59]">
                  03 / CONFIGURATIONS
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  {t('lims.plans.title')}
                </h2>
              </div>
              <p className="max-w-3xl text-lg leading-8 text-[#586f78]">
                {t('lims.plans.description')}
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {plans.map((plan, index) => (
                <article
                  key={plan.title}
                  className={`border p-7 md:p-8 ${index === 1 ? 'border-[#2d8f91] bg-[#f2f7f6]' : 'border-[#cad9d7] bg-white'}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-bold uppercase text-[#2d8f91]">
                      {plan.label}
                    </span>
                    <span className="text-xs text-[#879ba1]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{plan.title}</h3>
                  <p className="mt-4 min-h-[5.25rem] text-sm leading-7 text-[#60747b]">
                    {plan.description}
                  </p>
                  <ul className="mt-7 border-t border-[#cad9d7] pt-5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 py-2 text-sm leading-6 text-[#405b67]"
                      >
                        <CheckCircle2
                          className="mt-1 h-4 w-4 shrink-0 text-[#2d8f91]"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#173449] py-20 text-white md:py-28">
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase text-[#75d5d2]">
                  MINI ERP / OPERATIONS
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  {t('lims.operations.title')}
                </h2>
              </div>
              <p className="text-lg leading-8 text-[#c9d8dc]">
                {t('lims.operations.description')}
              </p>
            </div>

            <div className="mt-12 grid border-y border-[#496577] md:grid-cols-2 lg:grid-cols-4">
              {operations.map((item, index) => {
                const Icon = operationIcons[index] ?? Boxes
                return (
                  <section
                    key={item.title}
                    className="border-b border-[#496577] py-8 md:border-r md:px-7 lg:border-b-0 lg:last:border-r-0"
                  >
                    <Icon
                      className="h-7 w-7 text-[#75d5d2]"
                      aria-hidden="true"
                    />
                    <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#c9d8dc]">
                      {item.description}
                    </p>
                  </section>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="dataAssets"
        className="scroll-mt-28 border-y border-[#d6e1df] bg-[#f2f7f6] py-20 md:py-28"
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase text-[#9d4f59]">
                  LOCAL DATA / LAB ASSETS
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  {t('lims.dataAssets.title')}
                </h2>
              </div>
              <p className="text-lg leading-8 text-[#586f78]">
                {t('lims.dataAssets.description')}
              </p>
            </div>

            <div className="mt-12 grid border-y border-[#cad9d7] md:grid-cols-2 lg:grid-cols-4">
              {dataAssets.map((item, index) => {
                const Icon = dataAssetIcons[index] ?? Database
                return (
                  <section
                    key={item.title}
                    className="border-b border-[#cad9d7] py-8 md:border-r md:px-7 lg:border-b-0 lg:last:border-r-0"
                  >
                    <div className="flex items-center justify-between">
                      <Icon
                        className="h-7 w-7 text-[#2d8f91]"
                        aria-hidden="true"
                      />
                      <span className="text-xs text-[#879ba1]">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#60747b]">
                      {item.description}
                    </p>
                  </section>
                )
              })}
            </div>

            <p className="mt-7 border-l-2 border-[#9d4f59] pl-5 text-sm leading-7 text-[#60747b]">
              {t('lims.dataAssets.note')}
            </p>
          </div>
        </div>
      </section>

      <section id="deployment" className="scroll-mt-28 py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <figure className="border border-[#cad9d7] bg-[#fffef4] p-3 md:p-5">
              <img
                src="/images/lims/genomelight-lims-workflow.png"
                alt={t('lims.deployment.imageAlt')}
                width="741"
                height="497"
                loading="lazy"
                decoding="async"
                className="aspect-[741/497] w-full object-contain"
              />
              <figcaption className="px-1 pt-4 text-sm leading-6 text-[#667b82]">
                {t('lims.deployment.imageCaption')}
              </figcaption>
            </figure>

            <div>
              <p className="text-xs font-bold uppercase text-[#2d8f91]">
                04 / DEPLOYMENT & INTEGRATION
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                {t('lims.deployment.title')}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#586f78]">
                {t('lims.deployment.description')}
              </p>
              <div className="mt-8 border-t border-[#cad9d7]">
                {deployment.map((item, index) => (
                  <section
                    key={item.title}
                    className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[#cad9d7] py-5"
                  >
                    <span className="text-xs font-semibold text-[#2d8f91]">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#60747b]">
                        {item.description}
                      </p>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d6e1df] bg-[#f2f7f6] py-20 md:py-24">
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase text-[#9d4f59]">
              FAQ / LIMS
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              {t('lims.faq.title')}
            </h2>
            <div className="mt-10 border-t border-[#cad9d7]">
              {faqs.map((item) => (
                <details
                  key={item.title}
                  className="group border-b border-[#cad9d7] py-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-[#173449]">
                    {item.title}
                    <span className="text-xl font-normal text-[#2d8f91] group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pt-4 text-sm leading-7 text-[#60747b]">
                    {item.description}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#173449] py-16 text-white">
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold">{t('lims.cta.title')}</h2>
              <p className="mt-4 text-lg leading-8 text-[#c9d8dc]">
                {t('lims.cta.description')}
              </p>
              <a
                href="https://mp.weixin.qq.com/s/JT6k0JLQ-bqdDn3OE8Bq9w"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#75d5d2] hover:text-white"
              >
                {t('lims.cta.source')}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#4fb1b4] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#3a9a9d]"
            >
              {t('lims.cta.button')}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Lims
