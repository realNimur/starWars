import React, { useContext, useEffect, useState } from 'react'
import Select from 'react-select'
import {
  Container,
  Header,
  IntlText,
  Loader,
  Paginator,
} from '../../components'
import { useIntl } from '../../hooks/useIntl.js'
import { CharacterItem } from '../../components/CharactersPage'
import { CharactersDataContextContext } from '../../context'
import styles from './CharactersPage.module.scss'

export const CharactersPage = () => {
  const [filteredCharactersList, setFilteredCharactersList] = useState([])
  const { currentLang } = useIntl()
  const {
    charactersList,
    optionList,
    totalCount,
    error,
    isLoading,
    currentFilter,
    setCurrentFilter,
  } = useContext(CharactersDataContextContext)

  const handleChangeFilterByHair = ({ value }) => {
    if (value === 'all' || !value) {
      return setFilteredCharactersList(charactersList)
    }

    const filteredList = charactersList.filter(
      (character) => character.hair_color.toLowerCase() === value
    )

    setFilteredCharactersList(filteredList)
  }

  useEffect(() => {
    setFilteredCharactersList(charactersList)
  }, [charactersList])

  useEffect(() => {
    handleChangeFilterByHair(currentFilter)
  }, [currentFilter])

  return (
    <>
      <Header activePage={'characters'} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {error ? (
            <p>{error.message ? error.message : 'Something went wrong'}</p>
          ) : (
            <Container>
              <div className={styles.wrapper}>
                <p className={styles.lang}>
                  <IntlText translateKey={'language'} />: {currentLang}
                </p>
                <div>
                  <h1 className={styles.title}>
                    {totalCount ? totalCount : null}{' '}
                    <span className={styles.bold}>
                      <IntlText translateKey={'Peoples'} />
                    </span>{' '}
                    <IntlText translateKey={`foryoutochooseyourfavorite`} />
                  </h1>
                  <div className={styles.filter}>
                    <p className={styles.filter__text}>
                      <IntlText translateKey={`haircolor`} />
                    </p>
                    <Select
                      isSearchable={false}
                      value={currentFilter}
                      onChange={(selectedValue) => {
                        setCurrentFilter(selectedValue)
                      }}
                      className={styles.filter__select}
                      options={optionList}
                    />
                    {currentFilter ? (
                      <button
                        className={styles.reset}
                        onClick={() => setCurrentFilter('')}
                      >
                        <IntlText translateKey={'reset'} />
                      </button>
                    ) : null}
                  </div>
                </div>
                <div className={styles.characters__list}>
                  {filteredCharactersList.length > 0
                    ? filteredCharactersList.map((character) => {
                        return (
                          <CharacterItem
                            key={character.url}
                            height={character.height}
                            birth_year={character.birth_year}
                            name={character.name}
                            gender={character.gender}
                            mass={character.mass}
                            skin_color={character.skin_color}
                            hair_color={character.hair_color}
                            eye_color={character.eye_color}
                          />
                        )
                      })
                    : 'no results'}
                </div>
                <Paginator />
              </div>
            </Container>
          )}
        </>
      )}
    </>
  )
}
