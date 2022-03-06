import { availableLanguages } from 'contexts/LangContext'
import en from 'lang/en'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
const DEFAULT_LANGUAGE = en

const useLanguage = (): [
  typeof DEFAULT_LANGUAGE,
  React.Dispatch<React.SetStateAction<string>>,
] => {
  const [langCode, setLangCode] = useState<string>(
    localStorage.getItem('langCode') || DEFAULT_LANGUAGE._code,
  )
  const { pathname } = useLocation()

  useEffect(() => {
    localStorage.setItem('langCode', langCode)
  }, [langCode])

  useEffect(() => {
    const possibleLangCode = pathname.split('/')[1]
    console.log(possibleLangCode)
    if (availableLanguages.find((avLang) => avLang._code === possibleLangCode)) {
      setLangCode(possibleLangCode)
    }
  }, [pathname])

  const selectedLanguage = availableLanguages.find(
    (avLang) => avLang._code === langCode,
  )

  return [
    selectedLanguage
      ? (selectedLanguage as typeof DEFAULT_LANGUAGE)
      : DEFAULT_LANGUAGE,
    setLangCode,
  ]
}

export default useLanguage
