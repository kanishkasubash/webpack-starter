import { copyrightSign } from '../assets'

const Footer = () => {
  return (
    <footer className='h-20 text-white bg-mine-shaft'>
      <div className='flex flex-row items-center justify-center pt-6'>
        <img
          src={copyrightSign}
          alt='copyright sign'
          width={20}
          height={20}
          className='m-0 rounded-full'
        />
        <p className='ml-1'>Copyright. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer