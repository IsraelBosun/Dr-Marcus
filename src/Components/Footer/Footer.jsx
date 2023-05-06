import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsPinterest } from "react-icons/bs"


const Footer = () => {
    return (
        <div className='sm:text-md text-sm w-full p-5 border bg-Blue text-white grid justify-between items- grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-9 '>
            <div className='flex flex-col gap-3'>
                <div>
                    <img src="" alt="Logo" />
                </div>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi libero iusto doloremque ?</p>
            </div>

            <div className='flex flex-col gap-3'>
                <p className='font-bold text-lg'>
                    Quick Links
                </p>
                <div className='list-none flex flex-col gap-3 '>
                    <li>About Me</li>
                    <li>Services </li>
                    <li>Work with me</li>
                    <li>Privacy Policy</li>
                    <li>Contact Me</li>
                </div>
            </div>

            <div className='flex flex-col gap-3' >
                <p className='font-bold text-lg'>
                    Company
                </p>
                <div className='list-none flex flex-col gap-3 '>
                    <li>My Books</li>
                    <li>Blog</li>
                    <li>Profityn</li>
                    <li>Get a free Consultation</li>
                    <li>Play time</li>
                </div>
            </div>

            <div className='flex flex-col gap-3' >
                <p className='font-bold text-lg'>
                    Follow Me
                </p>
                <div className='flex items-center gap-5 '>
                    <a href="" className='hover:scale-110 hover:text-Blue text-xl'><BsFacebook /></a>
                    <a href="" className='hover:scale-110 hover:text-Blue text-xl'><BsInstagram /></a>
                    <a href="" className='hover:scale-110 hover:text-Blue text-xl'><BsTwitter /></a>
                    <a href ="" className='hover:scale-110 hover:text-Blue text-xl'><BsPinterest /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer