import React, { useContext, useEffect } from 'react'
import styles from './Paginator.module.scss'
import { CharactersDataContextContext } from '../../../context'

export const Paginator = () => {
  const { countOfPages, currentPage, setCurrentPage } = useContext(
    CharactersDataContextContext
  )

  const pagesList = Array.from({ length: countOfPages }, (_, i) => i + 1)

  const goNextPage = () => {
    if (currentPage !== countOfPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  if (pagesList.length === 0) {
    return null
  }

  const handleKeyArrow = (e) => {
    if (e.keyCode === 37) {
      goPrevPage()
    } else if (e.keyCode === 39) {
      goNextPage()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyArrow, false)

    return () => {
      document.removeEventListener('keydown', handleKeyArrow, false)
    }
  }, [])

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__arrow} onClick={goPrevPage}>
        {'<'}
      </div>
      {pagesList.map((item, ind) => {
        return (
          <div
            key={ind}
            onClick={() => setCurrentPage(item)}
            className={`${styles.pagination__item} ${
              currentPage === item ? styles.active : ''
            }`}
          >
            {item}
          </div>
        )
      })}
      <div className={styles.pagination__arrow} onClick={goNextPage}>
        {'>'}
      </div>
    </div>
  )
}
