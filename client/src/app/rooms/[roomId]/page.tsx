import { ReactElement } from 'react'
import styles from './page.module.scss'
import Logo from '../../components/logo'
import BtnMenu from '../../components/btnMenu'
import BtnSearch from '../../components/btnSearch'

export default async function Room({ params }: { params: Promise<string> }) {
  const res = await params
  console.log('res: ', res);
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.header_menu}>
          <BtnMenu />
          <Logo />
          <BtnSearch style={styles.btnSearch} />
        </div>
      </div>
      <div className={styles.main}>{}</div>
    </div>
  )
}
