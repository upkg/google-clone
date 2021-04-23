import Head from 'next/head'
import Avatar from '../components/Avatar'
import Test from '../components/Test'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import Image from "next/image"
import { SearchIcon } from "@heroicons/react/outline"
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`)
  }
  
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <header className="flex w-full p-5
      justify-between text-sm text-gray-700">
      {/* left */}
        <div className="flex space-x-4 item-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* right */}
        <div className="flex space-x-4 item-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>


          {/* icon  */}
          <ViewGridIcon 
            className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'
          />

          {/* avatar */}
          <Avatar url="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80" />
          
        </div>
      </header>

      {/* body */}

      <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
        <Image 
          src="https://www.google.com.gh/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />

        <div 
          className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg 
            max-w-md rounded-full border border-gray-200 px-5 py-3 
            items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon 
            className='h-5 mr-3 text-gray-500'
          />

          <input 
            ref={searchInputRef}
            type='text'
            className='focus:outline-none flex-grow'
          />
          <MicrophoneIcon 
            className='h-5'
          />
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button className='btn' onClick={search}> 
            Google Search
          </button>

          <button className='btn'>
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* footer */}
      <Footer />
    </div>
  )
}
