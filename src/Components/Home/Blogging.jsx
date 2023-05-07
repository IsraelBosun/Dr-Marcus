import React from 'react'

const Blogging = ({ image, title, text, button }) => {
  return (
    <div className='flex flex-col items-center '> 
        <div className='w-2/3'>
            <img src={image} alt="" className='shadowing' />
        </div>
        <div className='flex items-center flex-col gap-1 my-3 '>
                <p className='font-bold text-center'>{title}</p>
                <p className='text-xs text-gray max-w-[280px] text-center'>{text}</p>
        </div>
        <button className='text-xs bg-Blue shadowing px-3 py-2 text-white'>
            {button}
        </button>
    </div>
  )
}

export default Blogging