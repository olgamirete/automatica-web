import { availableLanguages } from "contexts/LangContext"
import { useEffect, useState } from "react"
const DEFAULT_LANGUAGE = 'en'

const useLanguage = () => {
    
    const [langCode, setLangCode] = useState<string>(localStorage.getItem('langCode') || DEFAULT_LANGUAGE )

    useEffect(() => {
        localStorage.setItem('langCode', langCode)
    }, [langCode])

    return [availableLanguages.find((avLang) => avLang._code === langCode), setLangCode]

}

export default useLanguage