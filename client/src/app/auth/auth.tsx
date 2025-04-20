'use client'
import styles from './auth.module.scss'
import Button from './components/button/button'
import InputField from './components/inputField/inputField'

export default function Auth() {
  return (
    <div>
      <div className={styles.authContainer}>
        <div className={styles.authHeading}>Войти в профиль</div>
        <form className={styles.authForm}>
          <InputField
            id='email'
            type='login'
            placeholder='Введите логин'
            label='Логин'
          />
          <InputField
            id='email'
            type='login'
            placeholder='Введите логин'
            label='Логин'
          />
          <div className={styles.buttonsContainer}>
            <Button type='submit'>Войти</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
