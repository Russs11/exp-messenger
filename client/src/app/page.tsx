import Image from "next/image";
import styles from "./page.module.scss";
import btnMenu from "../img/menu btn.svg"
import Logo from "./components/logo"

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.header_menu}>
          <Image src={btnMenu} alt='menu btn' />
          <Logo />
        </div>
      </div>
    </div>
  )
}
