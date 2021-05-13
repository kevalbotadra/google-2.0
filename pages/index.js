import Head from 'next/head';
import Image from 'next/image';
import Avatar from '../components/Avatar';
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import styles from '../styles/Home.module.css' ;
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();
  const searchRef = useRef(null);

  const search = (e) => {
      e.preventDefault();
      const term = searchRef.current.value;

      if (!term) return;

      router.push(`/search?term=${term}`);

  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google 2.0</title>
        <link rel="icon" href="/favicon.ico" /> {/* change to google 2.0 icon */}
      </Head>

      {/*  Header  */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">

        {/*  Left Div  */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

    
        {/*  Right Div  */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
        

        {/*  Icon  */}
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>


        {/*  Avatar  */}
        <Avatar url={"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"}/>



        </div>
      </header>

      {/*  Body  */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">

        {/*  Google Image  */}
        <Image 
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
          height={100}
          width={300}
        />


        {/*  Search Bar Icons  */}
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 px-5 py-3 items-center sm:mx-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          
          <input ref={searchRef} type="text" className="flex-grow focus:outline-none" />

          <MicrophoneIcon className="h-5" />

        </div>

        {/*  Buttons  */}
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={search} className="btn">I'm Feeling Lucky</button>
        </div>

      </form>

      {/*  Footer  */}
      <Footer />

    </div>
  )
}
