import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { RoundStatItem, TabletItem } from '../../CharactersPage'
import styles from './Modal.module.scss'

function ModalContainer({
  setOpen,
  name,
  height,
  mass,
  birth_year,
  gender,
  skin_color,
  hair_color,
  eye_color,
}) {
  const closeModal = () => {
    setOpen(false)
  }

  const iconImg =
    gender.toLowerCase() === 'male'
      ? styles.male
      : gender.toLowerCase() === 'female'
      ? styles.female
      : styles.another

  const handleEscClick = (event) => {
    if (event.key === 'Escape') {
      closeModal()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscClick, false)
    document.querySelector('body').style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscClick, false)
      document.querySelector('body').style.overflow = 'auto'
    }
  }, [])

  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modal__close} onClick={closeModal} />
        <div className={styles.modal__left}>
          <div className={`${styles.photo} ${iconImg}`} />
          <div className={styles.tablets}>
            <TabletItem variant={'gender'} value={gender} />
            <TabletItem variant={'birth_year'} value={birth_year} />
          </div>
        </div>
        <div className={styles.modal__right}>
          <div className={styles.header}>
            <p className={styles.name}>{name}</p>
            <div className={styles.characteristics}>
              <p>hair_color : {hair_color}</p>
              <p>skin_color : {skin_color}</p>
              <p>eye_color : {eye_color}</p>
            </div>
          </div>
          <div className={styles.card__list}>
            {height && height !== 'unknown' ? (
              <div className={styles.card__item}>
                <RoundStatItem value={height} text={'height'} />
              </div>
            ) : null}
            {mass && mass !== 'unknown' ? (
              <div className={styles.card__item}>
                <RoundStatItem value={mass} text={'mass'} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('app-modal')
  )
}

export function Modal({ open, setOpen, ...props }) {
  return <>{open ? <ModalContainer {...props} setOpen={setOpen} /> : null}</>
}
