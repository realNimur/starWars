import React, { useEffect, useState } from 'react'
import { TranslateButton } from '../../components'
import enDirection from './../../assets/locales/en.json'
import wookieeDirection from './../../assets/locales/wookiee.json'

export const IntlContext = React.createContext({})

export const IntlProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en')
  const [messagesList, setMessagesList] = useState(enDirection)

  const changeLang = () => {
    setCurrentLang(currentLang === 'en' ? 'wookiee' : 'en')
  }

  useEffect(() => {
    setMessagesList(currentLang === 'en' ? enDirection : wookieeDirection)
  }, [currentLang])

  return (
    <IntlContext.Provider value={{ currentLang, messagesList, changeLang }}>
      {children}
      <TranslateButton />
    </IntlContext.Provider>
  )
}
