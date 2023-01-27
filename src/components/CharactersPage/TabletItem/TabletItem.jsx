import React from 'react'
import styles from './TabletItem.module.scss'

const NonFilledValues = ['none', 'n/a', 'unknown']

export const TabletItem = ({ variant, value }) => {
  const colorGender =
    value === 'male' ? 'green' : value === 'female' ? 'purple' : 'yellow'

  return (
    <>
      {value && !NonFilledValues.includes(value) ? (
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
