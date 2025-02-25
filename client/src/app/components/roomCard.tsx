import { ReactElement } from 'react'
import styles from './styles/roomCard.module.scss'
import { RoomCardDto } from './dto/roomCard.dto'

export default function RoomCard(roomCardDto: RoomCardDto): ReactElement {
  return <div className={styles.logo}>exp-messenger</div>
}
