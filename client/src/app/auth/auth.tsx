'use client'
import InputField from '../components/inputField/inputField'
import styles from './auth.module.scss'

export default function Auth() {
  return (
    <div>
      <div className={styles.authContainer}>
        <div className={styles.authHeading}>Войти в профиль</div>
        <div className={styles.authForm}>
          <form>
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
          </form>
        </div>
      </div>
    </div>
  )
}
