import React, { useEffect, useState } from 'react'
import { useFetchPeople } from '../../hooks/useFetchPeople.js'

export const CharactersDataContextContext = React.createContext({})

export const CharactersDataContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentFilter, setCurrentFilter] = useState('')
  const {
    charactersList,
    optionList,
    totalCount,
    error,
    isLoading,
    countOfPages,
  } = useFetchPeople(currentPage)

  useEffect(() => {
    setCurrentFilter('')
  }, [currentPage])

  return (
    <CharactersDataContextContext.Provider
      value={{
        charactersList,
        optionList,
        currentPage,
        countOfPages,
        totalCount,
        error,
        isLoading,
        setCurrentPage,
        currentFilter,
        setCurrentFilter,
      }}
    >
      {children}
    </CharactersDataContextContext.Provider>
  )
}
