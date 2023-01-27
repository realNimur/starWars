import React from 'react'
import styles from './Button.module.scss'

export const Button = ({ bgColor = 'yellow', children, ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles[bgColor]}`}
      type={'button'}
      {...props}
    >
      {children}
    </button>
  )
}
