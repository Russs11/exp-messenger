import { ReactElement } from 'react'
import Image from 'next/image'
import btnMenu from '../../img/menu btn.svg'

export default function BtnMenu(): ReactElement {
  return <Image src={btnMenu} alt='menu btn' />
}