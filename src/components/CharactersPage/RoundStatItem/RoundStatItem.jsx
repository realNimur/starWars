import React from 'react'
import styles from './RoundStatItem.module.scss'

export const RoundStatItem = ({ value, text }) => {
  if (!value || value === 'unknown') {
    return null
  }

  return (
    <div className={styles.characteristics__item}>
      <div className={styles.value}>{value}</div>
      <p className={styles.title}>{text}</p>
    </div>
  )
}
