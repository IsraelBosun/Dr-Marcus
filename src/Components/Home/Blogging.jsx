import React from 'react'

const Blogging = ({ image, title, text, button }) => {
  return (
    <div className=''> 
        <div className='w-2/3'>
            <img src={image} alt="" className='shadowing' />
        </div>
        <div className='flex flex-col my-3 '>
                <p className='font-bold'>{title}</p>
                <p className='text-xs text-gray'>{text}</p>
        </div>
        <button className='text-xs bg-Blue shadowing px-3 py-2 text-white'>
            {button}
        </button>
    </div>
  )
}

export default Blogging