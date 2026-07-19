import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://www.genomelight.com'

const pageKeys: Record<string, string> = {
  '/': 'home',
  '/about': 'about',
  '/glsofort': 'glsofort',
  '/reagent': 'reagent',
  '/health': 'health',
  '/lims': 'lims',
  '/contact': 'contact',
  '/news': 'news'
}

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element?.setAttribute(name, value)
  })
}

const upsertCanonical = (href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]'
  )
  if (!element) {
    element = document.createElement('link')
    element.rel = 'canonical'
    document.head.appendChild(element)
  }
  element.href = href
}

const Seo = () => {
  const location = useLocation()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const pathname = location.pathname.replace(/\/+$/, '') || '/'
    const pageKey = pageKeys[pathname] ?? 'notFound'
    const isIndexable = Boolean(pageKeys[pathname])
    const isNewsArticle = pathname === '/news'
    const isLimsPage = pathname === '/lims'
    const canonicalPath = pageKeys[pathname] ? pathname : '/'
    const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`
    const language = i18n.resolvedLanguage?.startsWith('en') ? 'en-US' : 'zh-CN'
    const title = t(`seo.${pageKey}.title`)
    const description = t(`seo.${pageKey}.description`)
    const socialImage = isNewsArticle
      ? `${SITE_URL}/images/news/glsofort-hpo-workflow.png`
      : isLimsPage
        ? `${SITE_URL}/images/lims/genomelight-lims-workflow.png`
        : `${SITE_URL}/images/genomelight-social.jpg`

    document.documentElement.lang = language
    document.title = title

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: description
    })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: isIndexable
        ? 'index, follow, max-image-preview:large'
        : 'noindex, follow'
    })
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: title
    })
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: isNewsArticle ? 'article' : 'website'
    })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description
    })
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl
    })
    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: language === 'en-US' ? 'en_US' : 'zh_CN'
    })
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: socialImage
    })
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title
    })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description
    })
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: socialImage
    })
    upsertCanonical(canonicalUrl)

    const graph: Record<string, unknown>[] = [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'GenomeLight',
        legalName: t('footer.company.name'),
        url: SITE_URL,
        logo: `${SITE_URL}/images/1691569958.png`,
        email: 'info@genomelight.com',
        telephone: '+86-19936076456',
        foundingDate: '2021',
        description: t('seo.home.description'),
        address: {
          '@type': 'PostalAddress',
          streetAddress: t('contact.info.offices.chongqing.address'),
          addressLocality: language === 'en-US' ? 'Chongqing' : '重庆',
          addressCountry: 'CN'
        }
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'GenomeLight',
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: language
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        inLanguage: language
      }
    ]

    if (isNewsArticle) {
      graph.push({
        '@type': 'NewsArticle',
        '@id': `${canonicalUrl}#article`,
        headline: title,
        description,
        datePublished: '2026-07-15T16:15:00+08:00',
        dateModified: '2026-07-18T00:00:00+08:00',
        image: socialImage,
        mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: language
      })
    }

    if (isLimsPage) {
      graph.push({
        '@type': 'SoftwareApplication',
        '@id': `${canonicalUrl}#software`,
        name: t('lims.hero.title'),
        description,
        applicationCategory: 'Laboratory Information Management System',
        operatingSystem: 'Web',
        url: canonicalUrl,
        provider: { '@id': `${SITE_URL}/#organization` },
        inLanguage: language
      })
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': graph
    }

    let script = document.head.querySelector<HTMLScriptElement>(
      '#site-structured-data'
    )
    if (!script) {
      script = document.createElement('script')
      script.id = 'site-structured-data'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData)
  }, [i18n.resolvedLanguage, location.pathname, t])

  return null
}

export default Seo
