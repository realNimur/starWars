import { useEffect, useMemo, useState } from 'react'
import { getPeople } from '../API/api.js'

export const useFetchPeople = (numberOfPage) => {
  const [charactersList, setCharactersList] = useState([])
  const [optionList, setOptionList] = useState([])
  const [totalCount, setTotalCount] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const countOfPages = useMemo(() => Math.ceil(totalCount / 10), [totalCount])

  const getOptionList = (results) => {
    const optionList = [{ value: 'all', label: 'all' }]

    results.forEach((item) => {
      const lowerHairColor = item.hair_color.toLowerCase()

      if (!optionList.some((option) => option.value === lowerHairColor)) {
        optionList.push({ value: lowerHairColor, label: lowerHairColor })
      }
    })

    return optionList
  }

  useEffect(() => {
    setLoading(true)
    setCharactersList([])

    getPeople(numberOfPage)
      .then((data) => {
        const { count, results } = data
        const optionList = getOptionList(results)

        setTotalCount(count)
        setCharactersList(results)
        setOptionList(optionList)
      })
      .catch((e) => setError(e))
      .finally(() => {
        setLoading(false)
      })
  }, [numberOfPage])

  return {
    charactersList,
    optionList,
    totalCount,
    error,
    isLoading,
    countOfPages,
  }
}
