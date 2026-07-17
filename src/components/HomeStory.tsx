import {
  ArrowRight,
  CheckCircle2,
  Database,
  FileSearch,
  LockKeyhole,
  Microscope,
  ShieldCheck,
  UserRoundCheck
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const principleIcons = [FileSearch, UserRoundCheck, LockKeyhole]
const workflowIcons = [Database, Microscope, CheckCircle2]

const HomeStory = () => {
  const { t } = useTranslation()
  const workflowSteps = t('home.workflow.steps', {
    returnObjects: true
  }) as Array<{ title: string; description: string }>
  const principles = t('home.principles.items', {
    returnObjects: true
  }) as Array<{ title: string; description: string }>

  return (
    <>
      <section
        className="bg-[#f4f7f6] py-20 md:py-28"
        aria-labelledby="workflow-title"
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase text-[#2d8f91]">
                {t('home.workflow.eyebrow')}
              </p>
              <h2
                id="workflow-title"
                className="text-3xl font-semibold leading-tight text-[#173449] md:text-4xl"
              >
                {t('home.workflow.title')}
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-7 text-[#586a73] md:text-lg">
              {t('home.workflow.description')}
            </p>
          </div>

          <ol className="relative mt-12 grid gap-4 md:grid-cols-3 md:gap-0">
            <div
              className="absolute left-[16.67%] right-[16.67%] top-9 hidden h-px bg-[#9eb8b7] md:block"
              aria-hidden="true"
            />
            {workflowSteps.map((step, index) => {
              const Icon = workflowIcons[index] ?? CheckCircle2
              return (
                <li
                  key={step.title}
                  className="relative border border-[#cddad9] bg-white p-6 md:border-r-0 md:p-7 md:last:border-r"
                >
                  <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center border border-[#83bdb8] bg-[#f4f7f6] text-[#247c7f]">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <span className="absolute right-5 top-5 text-xs font-bold text-[#8aa09f]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-7 text-xl font-semibold text-[#173449]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#62727a]">
                    {step.description}
                  </p>
                </li>
              )
            })}
          </ol>

          <Link
            to="/glsofort"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-[#245f70] hover:text-[#2d8f91]"
          >
            {t('home.workflow.link')}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section
        className="border-y border-[#cfdbdc] bg-[#eef4f3] py-20"
        aria-labelledby="principles-title"
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase text-[#2d806d]">
                {t('home.principles.eyebrow')}
              </p>
              <h2
                id="principles-title"
                className="text-3xl font-semibold text-[#173449] md:text-4xl"
              >
                {t('home.principles.title')}
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-7 text-[#586a73] md:text-lg">
              {t('home.principles.description')}
            </p>
          </div>

          <div className="mt-12 grid border-y border-[#bfcfcf] md:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = principleIcons[index] ?? ShieldCheck
              return (
                <article
                  key={item.title}
                  className="border-b border-[#bfcfcf] py-9 md:border-b-0 md:border-r md:px-8 md:last:border-r-0"
                >
                  <Icon className="h-7 w-7 text-[#2d806d]" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold text-[#173449]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#62727a]">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className="bg-[#173449] py-20 text-white"
        aria-labelledby="team-review-title"
      >
        <div className="container mx-auto grid gap-10 px-5 md:px-8 lg:grid-cols-[20rem_1fr] lg:items-center">
          <figure className="relative border-l border-[#75d4c8] pl-5">
            <img
              src="/nbl5tzs1ss0-image.png"
              alt={t('home.team.imageAlt')}
              width="235"
              height="234"
              loading="lazy"
              decoding="async"
              className="h-64 w-full max-w-72 object-cover object-top"
            />
            <figcaption className="mt-3 text-sm text-white/65">
              {t('about.team.members.liWenhui.name')} ·{' '}
              {t('about.team.members.liWenhui.title')}
            </figcaption>
          </figure>

          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase text-[#75d4c8]">
              {t('home.team.eyebrow')}
            </p>
            <h2
              id="team-review-title"
              className="text-3xl font-semibold leading-tight md:text-4xl"
            >
              {t('home.team.title')}
            </h2>
            <p className="mt-5 text-base leading-7 text-white/75 md:text-lg">
              {t('home.team.description')}
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[#8de0d5] hover:text-white"
            >
              {t('home.team.link')}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeStory
