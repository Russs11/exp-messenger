import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react'

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

export default function InputField(): IInputFieldProps {
  return (
		<div>
			<label htmlFor="">
			</label>
			<div>
      <input type='text' />
		</div>
		</div>

  )
}
