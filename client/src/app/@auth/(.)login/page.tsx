import Link from 'next/link'

export default function Page() {
  return (
    <div className='grid grid-rows-2 grid-cols-1 items-center justify-items-center gap-1 mt-[50%] h-[300px] w-[500px] bg-[#cccccc] absolute z-10'>
      <div className='grid grid-rows-1 grid-cols-1 text-[#000000] items-center justify-items-center'>
        login interceptor
      </div>
      <button className='rounded w-[100px]'>
        <Link href='/'>back to home page</Link>
      </button>
    </div>
  )
}
