import Logo from '../components/logo'
import Auth from './auth'
import styles from './authPage.module.scss'

export default function AuthPage() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.header}>
          <div className={styles.header_menu}>
            <Logo />
          </div>
        </div>
        <div className={styles.main}>
        <Auth />
        </div>
      </div>
    </>
  )
}
