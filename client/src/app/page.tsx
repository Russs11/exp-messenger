'use client'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { WebsocketContext, WebsocketProvider } from './context/WebsocketContext'

interface IMessage {
  socketId: string
  rooms: string[]
  text: string
}

export default function Home() {
  const socket = useContext(WebsocketContext)

  const [messages, setMessages] = useState<IMessage[]>([])

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected')
    })
    socket.on('onMessage', (data: IMessage) => {
      console.log('onMessage event received')
      console.log(data)
      setMessages(prev => {
        return [...prev, data]
      })
    })
    return () => {
      console.log('Unregistering events...')
      socket.off('connect')
      socket.off('onMessage')
    }
  }, [])

  function emitNewMessage1() {
    const message: IMessage = {
      socketId: socket.id ? socket.id : 'no id',
      rooms: [],
      text: 'Hello World',
    }
    socket.emit('newMessage', message)
  }
  function emitNewMessage2() {
    const message: IMessage = {
      socketId: socket.id ? socket.id : 'no id',
      rooms: [],
      text: 'Hi',
    }
    socket.emit('newMessage', message)
  }
  function messagesList(messages: IMessage[]) {
    const newMessagesList = messages.map((msg, index) => {
      const text = `From ${msg.socketId} - ${msg.text}`
      return <div key={index}>{text}</div>
    })
    return newMessagesList
  }
  function joinToRoom() {



    const message: IMessage = {
      socketId: socket.id ? socket.id : 'no id',
      rooms: [],
      text: 'room1',
    }
    socket.emit('joinToRoom', message)
  }

  return (
    <WebsocketProvider value={socket}>
      <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
          <Image
            className='dark:invert'
            src='/next.svg'
            alt='Next.js logo'
            width={180}
            height={38}
            blurDataURL={'/next.svg'}
            priority
          />
          <ol className='list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
            <li className='mb-2' onClick={emitNewMessage1}>
              Get started by editing{' '}
              <code className='bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold'>
                src/app/page.tsx
              </code>
              .
            </li>
            <li onClick={emitNewMessage2}>
              Save and see your changes instantly.
            </li>
          </ol>
          {messages.length === 0 ? (
            <div>no messages</div>
          ) : (
            messagesList(messages)
          )}
          <div className='flex gap-4 items-center flex-col sm:flex-row'>
            <div className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'>
              <Image
                className='dark:invert'
                src='/vercel.svg'
                alt='Vercel logomark'
                width={20}
                height={20}
              />
              Join to room1
            </div>
            <div className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'>
              <Image
                className='dark:invert'
                src='/vercel.svg'
                alt='Vercel logomark'
                width={20}
                height={20}
              />
              Leave the room1
            </div>
            <a
              className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
              href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='dark:invert'
                src='/vercel.svg'
                alt='Vercel logomark'
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
              href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Read our docs
            </a>
          </div>
        </main>
        <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
          <a
            className='flex items-center gap-2 hover:underline hover:underline-offset-4'
            href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              aria-hidden
              src='/file.svg'
              alt='File icon'
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className='flex items-center gap-2 hover:underline hover:underline-offset-4'
            href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              aria-hidden
              src='/window.svg'
              alt='Window icon'
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className='flex items-center gap-2 hover:underline hover:underline-offset-4'
            href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              aria-hidden
              src='/globe.svg'
              alt='Globe icon'
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </WebsocketProvider>
  )
}
