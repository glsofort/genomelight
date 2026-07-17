import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'

const LanguageToggle = () => {
  const { i18n } = useTranslation()
  const isChinese = i18n.resolvedLanguage?.startsWith('zh') ?? true

  const toggleLanguage = () => {
    const newLang = isChinese ? 'en-US' : 'zh-CN'
    i18n.changeLanguage(newLang)
  }

  const nextLang = isChinese ? 'English' : '\u4e2d\u6587'

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="flex min-h-9 items-center gap-2 bg-white/10 px-3 py-2 text-white transition-colors hover:bg-white/20"
      title={`Switch to ${nextLang}`}
      aria-label={`Switch to ${nextLang}`}
    >
      <Globe size={16} />
      <span className="text-sm font-medium">{nextLang}</span>
    </button>
  )
}

export default LanguageToggle
