import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'

const LanguageToggle = () => {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh-CN' ? 'en-US' : 'zh-CN'
    i18n.changeLanguage(newLang)
  }

  const currentLang = i18n.language === 'zh-CN' ? '中文' : 'English'
  const nextLang = i18n.language === 'zh-CN' ? 'English' : '中文'

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-200 text-white"
      title={`Switch to ${nextLang}`}
    >
      <Globe size={16} />
      <span className="text-sm font-medium">{currentLang}</span>
    </button>
  )
}

export default LanguageToggle
