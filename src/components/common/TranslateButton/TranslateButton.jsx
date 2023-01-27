import React, { useContext } from 'react'
import styles from './TranslateButton.module.scss'
import { IntlContext } from '../../../context/intl/IntlContext.jsx'

export const TranslateButton = () => {
  const { changeLang, currentLang } = useContext(IntlContext)

  return (
    <button
      onClick={changeLang}
      className={`${styles.button} ${styles[currentLang]}`}
    />
  )
}
