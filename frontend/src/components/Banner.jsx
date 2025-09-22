import React from 'react'
import banner from '../assets/electronics-banner-1.png'
import banner2 from '../assets/electronics-banner-2.png'
const Banner = () => {
  return (
    <section className='max-padd-container py-16'>
      <div className="flex flex-col sm:flex-row flex-warp gap-4 xl:gap-12 gap-y-10">
        <div className="flex-1">
          <img src={banner} alt="" className='rounded-lg' />
        </div>
        <div className="flex-1">
          <img src={banner2} alt="" className='rounded-lg' />
        </div>
      </div>
    </section>
  )
}

export default Banner
