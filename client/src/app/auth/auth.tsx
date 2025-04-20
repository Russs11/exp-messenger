'use client'
import styles from './auth.module.scss'
import Button from './components/button/button'
import InputField from './components/inputField/inputField'
import LogoMvd from './components/logoMvd'

export default function Auth() {
  return (
    <div>
      <div className={styles.authContainer}>
        <LogoMvd />
        <div className={styles.authHeading}>Войти в мессенджер</div>
        <form className={styles.authForm}>
          <InputField
            id='login'
            type='login'
            placeholder='Логин'
            label='Логин'
          />
          <InputField
            id='password'
            type='password'
            placeholder='Пароль'
            label='Пароль'
          />
          <div className={styles.buttonsContainer}>
            <Button type='submit'>Войти</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
