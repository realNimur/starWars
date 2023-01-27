import React, { useEffect, useMemo, useState } from 'react'
import { useFetchPeople } from '../../hooks/useFetchPeople.js'

export const CharactersDataContextContext = React.createContext({})

export const CharactersDataContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentFilter, setCurrentFilter] = useState('')
  const { charactersList, optionList, totalCount, error, isLoading } =
    useFetchPeople(currentPage)
  const countOfPages = useMemo(() => Math.ceil(totalCount / 10), [totalCount])

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
