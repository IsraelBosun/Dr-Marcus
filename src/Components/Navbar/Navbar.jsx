import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import NavLink from './NavLink'
import MobileNavLink from './MobileNavLink'
import { navLinks } from '../../Data'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { HiMenuAlt1, HiX } from "react-icons/hi";



const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(null)

    useEffect(() => {
        const ScrollActive = () => {
            setActive(window.scrollY > 20)
        };
        window.addEventListener("scroll", ScrollActive);
        return () => window.removeEventListener("scroll", ScrollActive)
    }, [active])

    return (
        <div
            className={`${active ? "shadow-lg" : ""} sticky w-full top-0 left-0 z-20`}
        >
            <div>
                <div
                    className={`${active ? "py-2 transition-all duration-300" : "py-4"} container mx-auto flex items-center justify-between px-2`}
                >
                    <Link to="">
                        <div className='text-xl text-Blue uppercase tracking-wide font-bold'>DR Marcus</div>
                    </Link>
                    <div className='flex items-center'>
                    <div className='sm:flex items-center hidden'>
                        {navLinks.map((navLink) => {
                            return <NavLink key={navLink.id} {...navLink} />
                        })}
                    </div>
                    <div className='flex items-center gap-4'>
                        <button className='relative py-3 px-6 font-bold text-Blue text-3xl'>
                            <AiOutlineShoppingCart
                                onClick={() => setShowCart(true)}
                            />
                            <div className="absolute top-0 right-4 w-4  h-4 rounded-full  text-xs bg-red-700 text-white ">0</div>
                        </button>
                        <HiMenuAlt1
                            className='text-3xl sm:hidden cursor-pointer'
                            onClick={() => setToggle(true)}
                        />
                    </div>
                    </div>
                    {
                        toggle && (
                            <div className="fixed h-full w-5/6 top-0 left-0 z-20 bg-Blue text-white flex flex-col justify-center border  items-center shadow-lg gap-8 py-8" >
                                {navLinks.map((navLink) => {
                                    return (<MobileNavLink key={navLink.id} {...navLink} setToggle={setToggle} />)
                                })}
                                <HiX
                                    className="absolute right-12 top-12 text-3xl cursor-pointer"
                                    onClick={(prev) => setToggle(!prev)}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar