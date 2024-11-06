import Link from 'next/link'
import { WebsocketProvider, socket } from './context/WebsocetContext'

export default function Home() {
  return (
    <WebsocketProvider value={socket}>
    <div className='grid grid-rows-[50px_1fr_50px] items-center justify-items-center min-h-screen gap-1 p-2'>
      <div className='grid bg-slate-500 h-full w-2/4 items-center justify-items-center'>
        <Link href='/login'>login</Link>
        <Link href='/a'>a</Link>
      </div>
      <div className='grid bg-slate-500 h-full w-3/4 items-center justify-items-center'>
        2
      </div>
      <div className='grid bg-slate-500 h-full w-5/6 items-center justify-items-center'>
        3
      </div>
    </div>

    </WebsocketProvider>
  )
}