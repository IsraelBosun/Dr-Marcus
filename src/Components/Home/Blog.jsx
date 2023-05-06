import React from 'react'
import Blogging from './Blogging'
import { blogging } from '../../Data'

const Blog = () => {
    return (
        <article className='section'>
            <div className=' flex flex-col items-center'>
                <p className='text-xs'>LATEST NEWS</p>
                <p className='text-xl'>From My Blog</p>
            </div>
            <div className='flex flex-col items-center justify-center xs:flex-row mt-6  gap-9'>
                {
                    blogging.map((bloggers) => {
                        return (
                            <Blogging key={bloggers.id} {...bloggers} />
                        )
                    })
                }
            </div>

            <div className='mt-[7rem] flex flex-col text-center'>
                <p className='text-2xl font-bold '>DON'T FORGET TO SIGN UP</p>
                <hr  className='my-3 '/>
                <p className='text-xs text-gray'>Sign up to our newsletter for updates <br /> and notification</p>
            </div>
            <form action="" className='text-center my-8 '>
                <label htmlFor="email"></label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" className='rounded-tl-xl  py-2 px-3' required />
                <button type="submit" className=' rounded-br-xl py-2 px-3 bg-Blue text-white'>Subscribe</button>
            </form>
        </article>
    )
}

export default Blog