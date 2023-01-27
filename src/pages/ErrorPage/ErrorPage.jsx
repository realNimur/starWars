import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, IntlText } from '../../components'
import styles from './ErrorPage.module.scss'

export const ErrorPage = () => {
  const navigate = useNavigate()

  const goToHomePage = () => {
    window.scrollTo(0, 0)
    navigate('/')
  }

  return (
    <div className={styles.error__wrapper}>
      <p className={styles.error__text}>404</p>
      <Button bgColor={'green'} onClick={goToHomePage}>
        <IntlText translateKey={'Return'} />
      </Button>
    </div>
  )
}
