import React, { useState } from 'react'
import { Modal } from '../../common/Modal/Modal.jsx'
import { RoundStatItem } from '../RoundStatItem/RoundStatItem.jsx'
import { TabletItem } from '../TabletItem/TabletItem.jsx'
import styles from './CharacterItem.module.scss'

export const CharacterItem = ({
  name,
  height,
  mass,
  birth_year,
  gender,
  skin_color,
  hair_color,
  eye_color,
}) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        name={name}
        height={height}
        mass={mass}
        birth_year={birth_year}
        gender={gender}
        skin_color={skin_color}
        hair_color={hair_color}
        eye_color={eye_color}
      />
      <div
        className={styles.character__item}
        onClick={() => setOpenModal(true)}
      >
        <p className={styles.title}>{name}</p>
        <div className={styles.characteristics}>
          <RoundStatItem value={height} text={'height'} />
          <RoundStatItem value={mass} text={'mass'} />
        </div>
        <div className={styles.tablets}>
          <TabletItem variant={'gender'} value={gender} />
          <TabletItem variant={'birth_year'} value={birth_year} />
        </div>
      </div>
    </>
  )
}
