import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CalendarDays,
  ClipboardList,
  Dna,
  FlaskConical,
  Microscope,
  Network,
  TestTube2,
  UsersRound
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

type ContentItem = {
  title: string
  description: string
}

const solutionDefinitions = [
  { key: 'reagent', path: '/reagent', icon: TestTube2 },
  { key: 'glsofort', path: '/glsofort', icon: BrainCircuit },
  { key: 'lims', path: '/lims', icon: ClipboardList },
  { key: 'services', path: '/contact', icon: Dna }
]

const researchIcons = [BrainCircuit, Microscope, FlaskConical, Network]

const About = () => {
  const { t } = useTranslation()
  const facts = t('about.companyIntro.facts', {
    returnObjects: true
  }) as ContentItem[]
  const research = t('about.research.items', {
    returnObjects: true
  }) as ContentItem[]
  const cooperation = t('about.cooperation.items', {
    returnObjects: true
  }) as ContentItem[]

  const members = [
    {
      key: 'liWenhui',
      image: '/images/team/laura-li.png',
      imagePosition: 'object-top',
      detailGroups: ['experience', 'achievements']
    },
    {
      key: 'dingHongyue',
      image: '/images/team/ding-hongyue.jpeg',
      imagePosition: 'object-top',
      detailGroups: ['experience', 'achievements']
    }
  ]

  return (
    <div className="bg-white text-[#173449]">
      <section className="border-b border-[#d5e1df] bg-[#f2f7f6] py-16 md:py-24">
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase text-[#2d8f91]">
              COMPANY / GENOMELIGHT
            </p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                  {t('about.companyIntro.title')}
                </h1>
                <p className="mt-4 text-xl font-semibold text-[#2d6675]">
                  {t('about.companyIntro.companyName')}
                </p>
              </div>
              <p className="max-w-3xl text-lg leading-8 text-[#586f78]">
                {t('about.companyIntro.description2')}
              </p>
            </div>

            <div className="mt-12 grid border-y border-[#cad9d7] md:grid-cols-3">
              {facts.map((fact, index) => {
                const Icon =
                  [CalendarDays, Building2, UsersRound][index] ?? Building2
                return (
                  <section
                    key={fact.title}
                    className="border-b border-[#cad9d7] py-7 md:border-b-0 md:border-r md:px-8 md:last:border-r-0"
                  >
                    <Icon
                      className="h-6 w-6 text-[#9d4f59]"
                      aria-hidden="true"
                    />
                    <h2 className="mt-5 text-xl font-semibold">{fact.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-[#60747b]">
                      {fact.description}
                    </p>
                  </section>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" aria-labelledby="solution-title">
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase text-[#9d4f59]">
                NGS / INTEGRATED SOLUTION
              </p>
              <h2
                id="solution-title"
                className="mt-4 text-3xl font-semibold md:text-4xl"
              >
                {t('about.solution.title')}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#586f78]">
                {t('about.solution.description')}
              </p>
            </div>

            <div className="mt-12 grid border-y border-[#cad9d7] md:grid-cols-2 lg:grid-cols-4">
              {solutionDefinitions.map((solution, index) => {
                const Icon = solution.icon
                return (
                  <article
                    key={solution.key}
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
                    <h3 className="mt-6 text-xl font-semibold">
                      {t(`about.solution.items.${solution.key}.title`)}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#60747b]">
                      {t(`about.solution.items.${solution.key}.description`)}
                    </p>
                    <Link
                      to={solution.path}
                      className="mt-6 inline-flex items-center gap-2 border-b border-[#8eb4b2] pb-1 text-sm font-semibold text-[#245f70] hover:border-[#173449] hover:text-[#173449]"
                    >
                      {t('about.solution.link')}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-[#d6e1df] bg-[#f2f7f6] py-20"
        aria-labelledby="culture-title"
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase text-[#2d8f91]">
              MISSION / CULTURE
            </p>
            <h2
              id="culture-title"
              className="mt-4 text-3xl font-semibold md:text-4xl"
            >
              {t('about.culture.title')}
            </h2>
            <div className="mt-10 grid border-y border-[#cad9d7] md:grid-cols-3">
              {(['mission', 'vision', 'values'] as const).map((item) => (
                <section
                  key={item}
                  className="border-b border-[#cad9d7] py-8 md:border-b-0 md:border-r md:px-8 md:last:border-r-0"
                >
                  <h3 className="text-xl font-semibold">
                    {t(`about.culture.${item}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#60747b]">
                    {t(`about.culture.${item}.content`)}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[#173449] py-20 text-white md:py-28"
        aria-labelledby="team-title"
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase text-[#75d5d2]">
                CORE TEAM / REVIEW
              </p>
              <h2
                id="team-title"
                className="mt-4 text-3xl font-semibold md:text-4xl"
              >
                {t('about.team.title')}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#c9d8dc]">
                {t('about.team.description')}
              </p>
            </div>

            <div className="mt-12 divide-y divide-[#496577] border-y border-[#496577]">
              {members.map((member) => (
                <article
                  key={member.key}
                  className="grid gap-8 py-10 lg:grid-cols-[15rem_1fr]"
                >
                  <div>
                    <img
                      src={member.image}
                      alt={t(`about.team.members.${member.key}.name`)}
                      width="544"
                      height="644"
                      loading="lazy"
                      decoding="async"
                      className={`aspect-[4/5] w-full max-w-60 object-cover ${member.imagePosition}`}
                    />
                    <h3 className="mt-5 text-2xl font-semibold">
                      {t(`about.team.members.${member.key}.name`)}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-[#75d5d2]">
                      {t(`about.team.members.${member.key}.title`)}
                    </p>
                  </div>

                  <div>
                    <p className="text-base leading-8 text-[#d4e1e4]">
                      {t(`about.team.members.${member.key}.description`)}
                    </p>
                    <div className="mt-7 grid gap-8 md:grid-cols-2">
                      {member.detailGroups.map((group) => (
                        <section key={group}>
                          <h4 className="font-semibold text-white">
                            {t(
                              `about.team.members.${member.key}.${group}.title`
                            )}
                          </h4>
                          <ul className="mt-4 space-y-3 text-sm leading-6 text-[#c9d8dc]">
                            {(
                              t(
                                `about.team.members.${member.key}.${group}.items`,
                                {
                                  returnObjects: true
                                }
                              ) as string[]
                            ).map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <span
                                  className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#75d5d2]"
                                  aria-hidden="true"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </section>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-[#d6e1df] bg-[#f2f7f6] py-20 md:py-24"
        aria-labelledby="research-title"
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase text-[#2d8f91]">
                  RESEARCH & IMPLEMENTATION
                </p>
                <h2
                  id="research-title"
                  className="mt-4 text-3xl font-semibold md:text-4xl"
                >
                  {t('about.research.title')}
                </h2>
              </div>
              <p className="text-lg leading-8 text-[#586f78]">
                {t('about.research.description')}
              </p>
            </div>
            <div className="mt-10 grid border-y border-[#cad9d7] md:grid-cols-2 lg:grid-cols-4">
              {research.map((item, index) => {
                const Icon = researchIcons[index] ?? Microscope
                return (
                  <section
                    key={item.title}
                    className="border-b border-[#cad9d7] py-8 md:border-r md:px-7 lg:border-b-0 lg:last:border-r-0"
                  >
                    <Icon
                      className="h-7 w-7 text-[#9d4f59]"
                      aria-hidden="true"
                    />
                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#60747b]">
                      {item.description}
                    </p>
                  </section>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" aria-labelledby="cooperation-title">
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase text-[#9d4f59]">
              COLLABORATION
            </p>
            <h2
              id="cooperation-title"
              className="mt-4 text-3xl font-semibold md:text-4xl"
            >
              {t('about.cooperation.title')}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#586f78]">
              {t('about.cooperation.description')}
            </p>
            <div className="mt-10 grid border-y border-[#cad9d7] md:grid-cols-2 lg:grid-cols-4">
              {cooperation.map((item) => (
                <section
                  key={item.title}
                  className="border-b border-[#cad9d7] py-7 md:border-r md:px-7 lg:border-b-0 lg:last:border-r-0"
                >
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#60747b]">
                    {item.description}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="privacy"
        className="border-y border-[#d6e1df] bg-[#f2f7f6] py-16"
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto max-w-4xl border-l-2 border-[#9d4f59] pl-6">
            <h2 className="text-2xl font-semibold">
              {t('about.privacy.title')}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#60747b]">
              {t('about.privacy.content')}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#173449] py-16 text-white">
        <div className="container mx-auto px-5 md:px-8">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold">
                {t('about.contact.title')}
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#c9d8dc]">
                {t('about.contact.description')}
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#4fb1b4] px-7 py-3 font-semibold text-white hover:bg-[#3a9a9d]"
            >
              {t('about.contact.button')}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
