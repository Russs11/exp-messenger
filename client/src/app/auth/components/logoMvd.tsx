import Image from 'next/image'
import { ReactElement } from 'react'
import logoMvd from '../../../img/LogoMVD.svg'

export default function LogoMvd(): ReactElement {
  return (
    <Image src={logoMvd} alt={'logo MVD'} width={250} priority />
  )
}
