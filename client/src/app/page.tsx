import { ReactNode } from 'react'
import Image from 'next/image'
import styles from './page.module.scss'
import btnMenu from '../img/menu btn.svg'
import btnSearch from '../img/search btn.svg'
import Logo from './components/logo'
import RoomCard from './components/roomCard'

interface Room {
  roomId: string
  avatar: string
  roomName: string
}

const rooms: Room[] = [
  { roomId: '1', avatar: 'ВП', roomName: 'Все подразделения' },
  {
    roomId: '2',
    avatar: 'КЭ',
    roomName: 'Отдел криминалистических экспертиз',
  },
  {
    roomId: '3',
    avatar: 'КУ',
    roomName: 'Отдел криминалистических учетов',
  },
  {
    roomId: '4',
    avatar: 'СИ',
    roomName: 'Отдел специальных видов исследования',
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.header_menu}>
          <Image src={btnMenu} alt='menu btn' />
          <Logo />
          <Image
            className={styles.btnSearch}
            src={btnSearch}
            alt='search btn'
          />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.cards}>
          {rooms.map((item: Room): ReactNode => {
            return (
              <RoomCard
                key={item.roomId}
                roomId={item.roomId}
                avatar={item.avatar}
                roomName={item.roomName}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
