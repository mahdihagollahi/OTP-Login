import React from 'react'
import LandingLogo from '@/assent/Img/Landing/LandingLogo.svg'
import Image from 'next/image'
const Landing = () => {
  return (
    <>
    <div className='flex  flex-col py-20 justify-center items-center'>
      <Image
      src={LandingLogo}
      width={315}
      height={273}
      alt=''
     className=''
      />
      <h1 className='font-bold mt-20 text-3xl text-[#000000] leading-10'>
      Explore the app
      </h1>
    </div>
    </>
  )
}

export default Landing