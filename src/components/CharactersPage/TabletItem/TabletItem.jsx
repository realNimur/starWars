import React from 'react'
import styles from './TabletItem.module.scss'
import { COLOR_GENDER, NON_FILLED_VALUES } from '../../../constants/gender.js'

export const TabletItem = ({ variant, value }) => {
  const colorGender = COLOR_GENDER[value] || 'yellow'

  return (
    <>
      {value && !NON_FILLED_VALUES.includes(value) ? (
        <p
          className={`${styles.tablet__item} ${
            variant === 'gender' ? styles[colorGender] : styles.blue
          }`}
        >
          {value}
        </p>
      ) : null}
    </>
  )
}
