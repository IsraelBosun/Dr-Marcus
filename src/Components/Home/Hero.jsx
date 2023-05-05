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
                    <div className='sm:text-[2.5rem] text-[1.825rem] font-bold'>
                        Your Trusted <br /> Medical Professional
                    </div>
                    <p className='text-sm leading-7 text-black max-w-sm py-2'>
                    Dr. Smith provides expert care to help you achieve optimal health. With years of experience and a compassionate approach, Dr. Smith is committed to providing personalized care that meets your unique needs.
                    </p>
                    <button className='py-2 px-6 text-white  rounded-br-2xl rounded-tl-2xl rounded-br-0 rounded-bl-0 bg-Blue mb-3' >Let's Talk
                    </button>
                </div>
                <div className='flex items-center justify-center flex-1 md-w-[60%] h-100 overflow-hidden '>
                    <img src={hero} alt="" className='w-2/3  rounded-br-2xl rounded-tl-2xl' />
                </div>
            </div>
        </div>
    )
}

export default Hero