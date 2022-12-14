import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { getCategories } from "../services";
import Image from 'next/image';
import logo from '../public/logo.png'




const Header = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);
  
  return (
    
    <nav className='container border-b border-blue-400 mx-auto px-7 mb-8  w-full flex  py-6 justify-between items-center navbar'>
        <Link href='/' >
            <>
                <Image  
                    src={logo}
                    alt='tcmc_logo' 
                    className='cursor-pointer'
                    height={35}
                    width={81}
                    quality={50}
                />
            </>
        </Link>
    
        <ul className='list-none sm:flex hidden justify-end items-center  flex-1'>
            <Link  href="/about">
                <li className='font-poppins font-normal cursor-pointer text-[18px] mr-10 text-white ' >关于我们</li>
            </Link>
            <Link  href="/mission">
                <li className='font-poppins font-normal cursor-pointer text-[18px] mr-10 text-white ' >使命及目标</li>
            </Link>
            <Link  href="/offerings">
                <li className='font-poppins font-normal cursor-pointer text-[18px] mr-10 text-white ' >奉献</li>
            </Link>
            <Link  href="/contactus">
                <li className='font-poppins font-normal cursor-pointer text-[18px] mr-10 text-white ' >联系我们</li>
            </Link>
            {categories.map((category, index) => {
                return(
                
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <li className={`font-poppins font-normal cursor-pointer mr-10 text-[18px]  text-white`}>
                        {category.name}
                    </li>
                </Link>
            )}
            )}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>

            <Image 
                src= {props.toggleMenu ? "/close.svg" : "/menu.svg"}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                width={28}
                height={28}
                onClick={() => props.setToggleMenu(!props.toggleMenu)}                
            />

            <div 
                className={`${props.toggleMenu ? 'flex' : 'hidden'} p-6 bg-gradient-to-r from-sky-500 to-indigo-500 absolute top-20 right-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar`}
            >
                <ul className='list-none flex flex-col  justify-end items-center flex-1'>
                    <Link  href="/about">
                        <li className='font-poppins font-normal cursor-pointer text-[18px]  text-white mb-1 ' onClick={() => props.setToggleMenu(false)} >关于我们</li>
                    </Link>
                    <Link  href="/mission">
                        <li className='font-poppins font-normal cursor-pointer text-[18px]  text-white mb-1' onClick={() => props.setToggleMenu(false)} >使命及目标</li>
                    </Link>
                    <Link  href="/offerings">
                        <li className='font-poppins font-normal cursor-pointer text-[18px]  text-white mb-1' onClick={() => props.setToggleMenu(false)} >奉献</li>
                    </Link>
                    <Link  href="/contactus">
                        <li className='font-poppins font-normal cursor-pointer text-[18px]  text-white mb-1' onClick={() => props.setToggleMenu(false)} >联系我们</li>
                    </Link>
                    {categories.map((category, index) => (
                        <Link key={category.slug} href={`/category/${category.slug}`} >
                            <li className={`font-poppins font-normal cursor-pointer text-[18px] '} text-white mb-1`} onClick={() => props.setToggleMenu(false)}>
                                {category.name}
                            </li>
                        </Link>
                    ))}
                </ul>

            </div>
        </div>
    </nav>
    
  )
}


export default Header

