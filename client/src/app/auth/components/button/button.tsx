import { DetailedHTMLProps, HTMLAttributes, JSX } from 'react'
import style from './button.module.scss'

interface IButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type?: 'submit' | 'reset' | 'button'
}

export default function Button({ type, children }: IButtonProps): JSX.Element {
  return (
    <button type={type} className={style.submitButton}>
      {children}
    </button>
  )
}
