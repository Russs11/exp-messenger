import { ReactElement } from 'react'
import styles from './styles/roomCard.module.scss'
import { RoomCardDto } from './dto/roomCard.dto'

export default function RoomCard(roomCardDto: RoomCardDto): ReactElement {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.avatar}>{roomCardDto.avatar}</div>
      <div className={styles.name}>{roomCardDto.roomName}</div>
    </div>
  )
}
