import Logo from '../components/logo'
import Auth from './auth'
import styles from './page.module.scss'

export default function AuthPage() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.header}>
          <Logo />
        </div>
        <Auth />
      </div>
      <div className={styles.main}></div>
    </>
  )
}
