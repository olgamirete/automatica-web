import { useContext } from 'react'
import LangContext, { availableLanguages } from 'contexts/LangContext'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'

export interface LanguageSelectorProps {
  setLanguage: (langCode: string) => void
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ setLanguage }) => {
  const lang = useContext(LangContext)
  return (
    <ButtonGroup>
      {availableLanguages.map((avLang, i) => (
        <ToggleButton
          key={i}
          id={`lang-select-${avLang._code}`}
          type="radio"
          variant="secondary"
          name="lang"
          className={`ms-1 btn-sm border-0 rounded shadow-none ${avLang._code === lang._code ? 'bg-secondary' : 'bg-transparent text-dark'}`}
          value={avLang._code as string}
          checked={avLang._code === lang._code}
          onChange={() => setLanguage(avLang._code as string)}
        >
          <div className="d-flex flex-row flex-nowrap justify-content-center align-items-center">
            <div className="fs-5">{avLang._flag}</div>
            <div className="ms-1 d-none d-sm-block">{avLang._name}</div>
          </div>
        </ToggleButton>
      ))}
    </ButtonGroup>
  )
}

export default LanguageSelector
