import React from 'react'
import hero from "../../assets/hero2.png"
const Hero = () => {
    return (
        <div className='section'>
            <div className='md:flex items-center justify-center'>
                <div className='flex-1 '>
                    <div className='font-bold text-xs text-Blue mb-2'>
                        Meet Dr Oluwole
                    </div>
                    <div className='sm:text-[2.5rem] text-[1.825rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 '>
                        Your Trusted <br /> Medical Professional
                    </div>
                    <p className='text-sm leading-7 text-black max-w-sm py-2 '>
                    I am Dr. Oluwole, a highly skilled and experienced Medical Doctor, author, and entrepreneur, specializing in hypertension. With a compassionate approach, I provide personalized care to help patients achieve optimal health.
                    </p>
                    <button className='py-2 px-6 text-white  shadowing bg-Blue mb-3 btn-hover' >Let's Talk
                    </button>
                </div>
                <div className='  flex items-center justify-center flex-1 md-w-[60%] h-100 overflow-hidden '>
                    <img src={hero} alt="" className='w-2/3  rounded-br-2xl rounded-tl-2xl' />
                </div>
            </div>
        </div>
    )
}

export default Hero