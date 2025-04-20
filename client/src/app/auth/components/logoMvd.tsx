import { ReactElement } from 'react'
import Image from 'next/image'
import logoMvd from '../../../img/LogoMVD.svg'

export default function LogoMvd(): ReactElement {
  return <Image src={logoMvd} alt={'logo MVD'} width={300} />
}