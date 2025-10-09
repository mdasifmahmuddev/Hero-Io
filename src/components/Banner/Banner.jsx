import React from 'react'

import GooglePlay from '../../assets/google-play.png'
import PlayStore from '../../assets/PlayStore.png'
import HeroImage from '../../assets/Hero.png'
import Stats from '../Stats/Stats'

const Banner = () => {
  return (
    <div className="flex flex-col items-center">

      <div className="flex flex-col items-center text-4xl font-bold p-4">
        <span>We Build</span>
        <span>
          <span className="text-4xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
            Productive
          </span>{' '}
          Apps
        </span>

        <div>
          <p className="text-gray-500 text-sm font-normal text-center max-w-2xl p-2">
            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>
        </div>
      </div>

      <div className='flex items-center gap-x-4'>

     <button className="btn">
    <img src={PlayStore} alt=""  className='h-4 w-4'/>
  <h1>Google Play</h1>
</button>



<button className="btn">
    <img src={GooglePlay}alt="" className='h-4 w-auto'/>
  <h1>App Store</h1>
</button>
      </div>




      <div>

        <img src={HeroImage} alt="" className='h-[300px] w-auto pt-4' />
       


      </div>

      <div className='w-full    '>
         <Stats></Stats>
      </div>



    </div>
  )
}

export default Banner
