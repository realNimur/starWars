import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Header, IntlText } from '../../components'
import { CHARACTERS_PAGE } from '../../constants/routes.js'
import styles from './HomePage.module.scss'
import YodaPNG from './../../assets/images/HomePage/yoda.png'

export const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.wrapper_content}>
        <Container>
          <div className={styles.content}>
            <div className={styles.greetings}>
              <h1 className={styles.greetings__title}>
                <span className={styles.bold}>
                  <IntlText translateKey={'Find'} />{' '}
                </span>{' '}
                <IntlText translateKey={'allyourfavorite'} /> <br />{' '}
                <span className={styles.bold}>
                  <IntlText translateKey={'character'} />
                </span>
              </h1>
              <p className={styles.greetings__desc}>
                <IntlText
                  translateKey={
                    'Youcanfindoutalltheinformationaboutyourfavoritecharacters'
                  }
                />
              </p>
              <Button onClick={() => navigate(CHARACTERS_PAGE)}>
                <IntlText translateKey={'Seemore'} />
              </Button>
            </div>
            <div className={styles.banner}>
              <img
                className={styles.banner__image}
                src={YodaPNG}
                height={400}
                width={400}
                alt="yoda"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
