import React from 'react'

const ServiceContainer = ({ image, title, text}) => {
  return (
    <div className='border border-Blue shadow   hover:bg-Blue hover:text-white transition px-4 py-4 flex gap-3'>
        <div className='w-1/3 mt-2'>
            <img src={image} alt="" className='' />
        </div>
        <div>
            <p className='font-bold text-lg'>{title}</p>
            <p className='text-xs'>{text}</p>
        </div>
    </div>
  )
}

export default ServiceContainer