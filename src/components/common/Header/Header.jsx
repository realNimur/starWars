import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../Container/Container.jsx'
import { IntlText } from '../IntlText/IntlText'
import { CHARACTERS_PAGE } from '../../../constants/routes.js'
import styles from './Header.module.scss'

export const Header = ({ activePage = 'main' }) => {
  return (
    <div className={styles.wrapper_header}>
      <Container>
        <header className={styles.header}>
          <Link className={styles.logo} to={'/'} />
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li
                className={`${styles.list__item} ${
                  activePage === 'main' ? styles.active : ''
                }`}
              >
                <Link to={'/'}>
                  <IntlText translateKey={'Home'} />
                </Link>
              </li>
              <li
                className={`${styles.list__item} ${
                  activePage === 'characters' ? styles.active : ''
                }`}
              >
                <Link to={CHARACTERS_PAGE}>
                  <IntlText translateKey={'Characters'} />
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </Container>
    </div>
  )
}
