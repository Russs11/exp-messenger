import { ReactElement } from 'react'
import Image from 'next/image'
import btnSearch from '../../img/search btn.svg'

export default function BtnSearch({ style }: { style: string }): ReactElement {
  return <Image className={style} src={btnSearch} alt='search btn' />
}
