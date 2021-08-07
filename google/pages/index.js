import Head from 'next/head'
import Image from 'next/image'
import Profile from '../components/Profile'
import { MicrophoneIcon, ViewGridIcon, SearchIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

{/* maybe make all the useless-links in header link to "Never Gonna Give You Up" */ }

export default function Home() {

  const router = useRouter();
  const searchReference = useRef(null);

  const search = event => {
    event.preventDefault();
    const term = searchReference.current.value;

    if (!term) return;

    router.push(`/search?term=${term}&start=0`);

  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/GoogleLogo.svg" />
      </Head>

      {/* Header */}
      <header className="flex w-full justify-between px-8 py-3 text-sm">
        {/* Left section */}
        <div className="flex space-x-5 items-center">
          <p className="useless-links">About</p>
          <p className="useless-links">Store</p>
        </div>

        {/* Left section */}
        <div className="flex space-x-5 items-center">
          <p className="useless-links">Gmail</p>
          <p className="useless-links">Images</p>

          {/* Menu icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Profile Picture */}
          <Profile url='https://i.pinimg.com/564x/c8/ba/85/c8ba858ac51835cc0bfcd0fe871efb04.jpg' />
        </div>
      </header>

      {/* Body */}
      <form className='flex flex-col items-center mt-20 flex-grow w-4/5'>
        <Image
          src='https://www.google.ca/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
          width={272} height={92}
          alt="Absolute Chad" />

        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full 
        border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 w-5 mr-3 text-gray-500' />
          <input ref={searchReference} type='text' className='focus:outline-none flex-grow' />
          <MicrophoneIcon className='h-6 w-5 text-gray-500' />
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>Google Search</button>
          <button onClick={search} className='btn'>I&apos;m Feeling Lucky</button>
        </div>

      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}
