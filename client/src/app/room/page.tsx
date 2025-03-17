import Image from 'next/image'
import styles from './page.module.scss'
import btnMenu from '../../img/menu btn.svg'
import btnSearch from '../../img/search btn.svg'
import Logo from '../components/logo'

export default function Room() {
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
      <div className={styles.main}></div>
    </div>
  )
}
