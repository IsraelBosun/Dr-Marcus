import React from 'react'

const ServiceContainer = ({ image, title, text}) => {
  return (
    <div className=' shadow  shadow-xl  hover:bg-Blue hover:text-white transition px-4 py-4 flex gap-3'>
        <div className='w-[70%] mt-2'>
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

// border border-Blue