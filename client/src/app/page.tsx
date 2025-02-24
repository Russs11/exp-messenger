import Image from "next/image";
import styles from "./page.module.scss";
import btnMenu from "../img/menu btn.svg"
import btnSearch from '../img/search btn.svg'
import Logo from "./components/logo"

interface Room {
  roomId: string,
  avatarUrl: string,
  name: string
}

const rooms: Room[] = [
  { roomId: '1', avatarUrl: '../img/avatar.svg', name: 'Все подразделения' },
  {
    roomId: '2',
    avatarUrl: '../img/avatar.svg',
    name: 'Отдел криминалистических экспертиз',
  },
  {
    roomId: '3',
    avatarUrl: '../img/avatar.svg',
    name: 'Отдел криминалистических учетов',
  },
  {
    roomId: '4',
    avatarUrl: '../img/avatar.svg',
    name: 'Отдел специальных видов исследования',
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
        <div className={styles.card}>
          <div className=''></div>
        </div>
      </div>
    </div>
  )
}
