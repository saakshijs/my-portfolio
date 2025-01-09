'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    
    
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
         <div className='col-span-7 place-self-center text-center sm:text-left'>   
      <h1 className="text-white mb-4 sm:text-5xl lg:text-6xl font font-extrabold"><span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello I am {""} </span> <br></br>
      <TypeAnimation
       sequence={['Saakshi J Shetty',1000,'Web Developer',1000,'App developer',1000,'AIML Enthusiast',1000,"Your friend",1000]}
       wrapper='span'
       speed={50}
       repeat={Infinity}
      />
      </h1>
      <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>A self-driven individual with strong communication skills, the ability to multi-task, a hardworking, confident, honest, and loyal nature, committed to learning, adapting, and serving the public.</p>
      
      </div>
      <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
        <div className='rounded-full bg-[#FFFF00] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
       <Image 
       src="/images/hero-image.png"
       alt="Saakshi"
       className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
       width={300}
       height={300}/>
       </div>
      </div>
      </div>
    </section>
  )
}

export default HeroSection
