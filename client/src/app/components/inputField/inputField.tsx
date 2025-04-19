import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react'
import styles from './inputField.module.scss'




interface IInputFieldProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: string
  id?: string
  name?: string
  label?: string
  placeholder?: string
  value?: string
  autoComplete?: string
  isNumber?: boolean
  state?: 'error' | 'success'
}

export default function InputField({
  id,
  type,
  placeholder,
  label,
  value,
  autoComplete,
  isNumber,
  state,
  ...props
}: IInputFieldProps) {
  return (
    <div>
      <label htmlFor={id}></label>
      <div>
        <input className={styles.inputField} type={type} />
      </div>
    </div>
  )
}
