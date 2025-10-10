import React from 'react'

import GooglePlay from '../../assets/google-play.png'
import PlayStore from '../../assets/PlayStore.png'
import HeroImage from '../../assets/Hero.png'
import Stats from '../Stats/Stats'

const Banner = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">

      <div className="flex flex-col items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold p-4">
        <span>We Build</span>
        <span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
            Productive
          </span>{' '}
          Apps
        </span>

        <div>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base font-normal text-center max-w-2xl p-2 mt-2">
           <i> At  <span className='font-bold'> HERO.IO</span>   we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</i>
          </p>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0'>

        <a
          href="https://play.google.com/store/apps"
          target="_blank"
          rel="noopener noreferrer"
          className="btn w-full sm:w-auto flex items-center justify-center gap-2"
        >
          <img src={PlayStore} alt="" className='h-4 w-4' />
          Google Play
        </a>

        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn w-full sm:w-auto flex items-center justify-center gap-2"
        >
          <img src={GooglePlay} alt="" className='h-4 w-auto' />
          App Store
        </a>
      </div>

      <div className='w-full flex justify-center'>
        <img src={HeroImage} alt="" className='h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-auto pt-4 sm:pt-6' />
      </div>

      <div className='w-full'>
         <Stats></Stats>
      </div>

    </div>
  )
}

export default Banner
