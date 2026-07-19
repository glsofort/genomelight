import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  ExternalLink,
  FileText,
  Network,
  ShieldCheck
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

type ContentItem = {
  title: string
  description: string
}

const News = () => {
  const { t } = useTranslation()
  const upgrades = t('news.article.upgrades.items', {
    returnObjects: true
  }) as ContentItem[]
  const workflow = t('news.article.workflow.steps', {
    returnObjects: true
  }) as string[]
  const values = t('news.article.value.items', {
    returnObjects: true
  }) as ContentItem[]
  const upgradeIcons = [BrainCircuit, FileText, Network]

  return (
    <article className="bg-white text-[#173449]">
      <header className="border-b border-[#d4e2df] bg-[#f2f7f6] pt-16 md:pt-24">
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-[#2d7f82]">
              <span>{t('news.article.category')}</span>
              <span className="h-4 w-px bg-[#abc5c2]" aria-hidden="true" />
              <time dateTime="2026-07-15">{t('news.article.date')}</time>
              <span className="h-4 w-px bg-[#abc5c2]" aria-hidden="true" />
              <span className="inline-flex items-center gap-2 text-[#60747b]">
                <Clock3 className="h-4 w-4" aria-hidden="true" />
                {t('news.article.readingTime')}
              </span>
            </div>

            <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-tight text-[#173449] md:text-6xl">
              {t('news.article.title')}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#536c75] md:text-xl">
              {t('news.article.lead')}
            </p>

            <nav
              aria-label={t('news.article.navigation.label')}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#c9d9d6] py-5 text-sm font-semibold"
            >
              {(['upgrades', 'workflow', 'value'] as const).map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-[#31596b] transition-colors hover:text-[#9d4f59]"
                >
                  {t(`news.article.navigation.${item}`)}
                </a>
              ))}
            </nav>
          </div>

          <figure className="mx-auto max-w-6xl border-x border-t border-[#c9d9d6] bg-white p-3 md:p-6">
            <img
              src="/images/news/glsofort-hpo-workflow.png"
              alt={t('news.article.images.workflowAlt')}
              width="1080"
              height="582"
              decoding="async"
              className="aspect-[1080/582] w-full object-cover object-top"
            />
            <figcaption className="px-1 pb-1 pt-4 text-sm leading-6 text-[#667b82]">
              {t('news.article.images.workflowCaption')}
            </figcaption>
          </figure>
        </div>
      </header>

      <section id="upgrades" className="scroll-mt-28 py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase text-[#9d4f59]">
                01 / AI UPDATE
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                {t('news.article.upgrades.title')}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#586f78]">
                {t('news.article.upgrades.description')}
              </p>
            </div>

            <div className="mt-12 grid border-y border-[#cad9d7] md:grid-cols-3">
              {upgrades.map((item, index) => {
                const Icon = upgradeIcons[index] ?? BrainCircuit
                return (
                  <section
                    key={item.title}
                    className="border-b border-[#cad9d7] py-8 md:border-b-0 md:border-r md:px-8 md:last:border-r-0"
                  >
                    <div className="flex items-center justify-between">
                      <Icon
                        className="h-7 w-7 text-[#2d8f91]"
                        aria-hidden="true"
                      />
                      <span className="text-xs text-[#8a9ca1]">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-[#60747b]">
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
        id="workflow"
        className="scroll-mt-28 bg-[#173449] py-20 text-white md:py-28"
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase text-[#75d5d2]">
                02 / WORKFLOW
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                {t('news.article.workflow.title')}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#c9d8dc]">
                {t('news.article.workflow.description')}
              </p>
            </div>

            <ol className="border-t border-[#466173]">
              {workflow.map((step, index) => (
                <li
                  key={step}
                  className="grid grid-cols-[3rem_1fr] gap-5 border-b border-[#466173] py-6"
                >
                  <span className="text-sm font-semibold text-[#75d5d2]">
                    0{index + 1}
                  </span>
                  <span className="text-base leading-7 text-[#edf4f5]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase text-[#9d4f59]">
                03 / USE CASE
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                {t('news.article.case.title')}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#586f78]">
                {t('news.article.case.description')}
              </p>
              <p className="mt-5 border-l-2 border-[#2d8f91] pl-5 text-base leading-7 text-[#60747b]">
                {t('news.article.case.note')}
              </p>
            </div>

            <figure className="border border-[#cad9d7] bg-[#f8faf9] p-3 md:p-5">
              <img
                src="/images/news/glsofort-hpo-gene-ranking.png"
                alt={t('news.article.images.geneAlt')}
                width="1080"
                height="437"
                loading="lazy"
                decoding="async"
                className="aspect-[1080/437] w-full object-cover object-top"
              />
              <figcaption className="px-1 pt-4 text-sm leading-6 text-[#667b82]">
                {t('news.article.images.geneCaption')}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section
        id="value"
        className="scroll-mt-28 border-y border-[#d6e1df] bg-[#f2f7f6] py-20 md:py-28"
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase text-[#2d8f91]">
                04 / VALUE
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                {t('news.article.value.title')}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#586f78]">
                {t('news.article.value.description')}
              </p>
            </div>

            <div className="mt-12 grid gap-0 border-y border-[#cad9d7] md:grid-cols-3">
              {values.map((item) => (
                <section
                  key={item.title}
                  className="border-b border-[#cad9d7] py-8 md:border-b-0 md:border-r md:px-8 md:last:border-r-0"
                >
                  <CheckCircle2
                    className="h-7 w-7 text-[#9d4f59]"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#60747b]">
                    {item.description}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto flex max-w-5xl items-start gap-5 border-l-2 border-[#9d4f59] pl-6 md:pl-8">
            <ShieldCheck
              className="mt-1 h-7 w-7 shrink-0 text-[#9d4f59]"
              aria-hidden="true"
            />
            <div>
              <h2 className="text-xl font-semibold">
                {t('news.article.responsible.title')}
              </h2>
              <p className="mt-3 text-base leading-7 text-[#60747b]">
                {t('news.article.responsible.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#173449] py-16 text-white">
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold">
                {t('news.article.cta.title')}
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#c9d8dc]">
                {t('news.article.cta.description')}
              </p>
              <a
                href="https://mp.weixin.qq.com/s/BYy8UaWxPM_TIfRnRpsgrg"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#75d5d2] hover:text-white"
              >
                {t('news.article.source')}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#4fb1b4] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#3a9a9d]"
            >
              {t('news.article.cta.button')}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </footer>
    </article>
  )
}

export default News
