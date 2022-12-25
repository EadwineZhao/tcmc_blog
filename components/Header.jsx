import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { getCategories } from "../services";
import Image from 'next/image';
import logo from '../public/logo.png'
import { group, church, children, family, calendar } from '../public/icon';

import { useRouter } from 'next/router';




const Header = (props) => {
  const [categories, setCategories] = useState([]);


  const router = useRouter();
//   console.log(router.pathname)

  useEffect(() => {


    const r = document.querySelector(':root');
    r.style.setProperty('--color-hoverOnTransparent', '89 104 216')

    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);


  const showChurchActivities = (e) => {
    console.log(e.onMouseEnter)

    
    const metaMenu = document.querySelector('#activities')
    const arrow = document.querySelector('#chevron-down')
    // arrow.style.color = 'rgb(89 104 216)';

    // router.pathname !== '/events' && (arrow.style.color = 'white');

    arrow.style.transform = 'rotate(180deg)';
    metaMenu.style.display = 'block';
  }

   const closeChurchActivities = () => {
    const metaMenu =  document.querySelector('#metamenu')
    metaMenu.style.display = 'none'
   }
   const handleClickMenu = () => {
    const metaMenu = document.querySelector('#activities');
    metaMenu.style.display = 'none';

    const arrow = document.querySelector('#chevron-down')
    arrow.style.transform = '';
   }
  
  return (
    <nav className=' sticky top-0 shadow-md left-0 w-full bg-white text-lg text-color-text-primary  z-50 ' id='navbar'>
    {/* <nav className=' fixed top-0 left-0 w-full  bg-color-navbar text-white z-40     flex  py-6 justify-between items-center navbar'> */}
        <div className='container m-auto px-6 w-auto lg:max-w-[1248px] '>
            <div className='flex justify-between items-center w-auto py-2'>
                <div className='h-auto w-auto'>
                    <Link href='/' >
                        <>
                            <Image  
                                src={logo}
                                alt='tcmc_logo' 
                                className='cursor-pointer'
                                height={45}
                                // width={105}
                                quality={80}
                            />
                        </>
                    </Link>
                </div>

                <div className='hidden  lg:flex items-center justify-end gap-x-6'>
                    <div className='inline-flex flex-1 items-center justify-start gap-6'>
                        <div className='hover:text-hoverOnTransparent  transparent-bg-hover text-base font-semibold leading-6'>
                            <Link className=' py-3 px-4' href="/about">
                                关于我们
                            </Link>
                        </div>
                        <div className='hover:text-hoverOnTransparent transparent-bg-hover text-base font-semibold leading-6'>
                            <Link href="/mission" className=' py-3 px-4'>
                                使命及目标
                            </Link>
                        </div>
                        <div 
                            className=' group text-base font-semibold leading-6' 
                            onMouseEnter={showChurchActivities}
                            onMouseLeave={handleClickMenu}
                        >
                            <Link className=' relative py-3  px-4 hover:text-hoverOnTransparent transparent-bg-hover  flex justify-between items-center' href='#' scroll={false}>
                                教会信息
                                <svg className=" hover:bg-hoverOnTransparent" id='chevron-down' name="chevron-down" lens-role="icon" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><use xlinkHref="/arrow-down.svg#chevron-down">
            
            <symbol id="chevron-down" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></symbol>
            </use></svg>
                                {/* <Image 
                                    src='/arrow-down.svg'
                                    id='activities-arrow'
                                    alt='arrow-activities'
                                    className='hover:text-color-text-hover'
                                    width={28}
                                    height={28}
                                /> */}
                            </Link>
                            {/* <div className=' relative bg-color-hover h-[2px]' /> */}
                            {/* panel outer define position */}
                            <div className='relative hidden' id='activities'>
                                {/* panel inner define position */}
                                <div className='absolute left-1/2 top-0 -translate-x-1/2 ' id='churchinfo_metamenu' >
                                    {/* panel spacer  */}
                                    <div className=' pt-6'>
                                        <div className=' bg-white w-[407px] shadow-lg rounded-3xl py-[2rem]'>
                                            <Link className='flex items-center gap-3 pr-[1rem] pl-[2rem] mb-[1rem]' href="/groups" onClick={handleClickMenu} >
                                                <div className='flex items-center bg-color-bg-icon w-10 h-10 rounded-md'>
                                                    <Image 
                                                        alt='group-icon'
                                                        src={group}
                                                        height={22}
                                                        width={22}
                                                    />
                                                </div>
                                                <div className=' hover:text-color-text-hover'>
                                                    <div className=' font-semibold mb-1'>
                                                        小组介绍
                                                    </div>
                                                    <div className=' font-normal text-sm'>
                                                        各个小组组长信息，活动时间和目标
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link className='flex items-center gap-3 pr-[1rem] pl-[2rem] mb-[1rem]' href="/blog" onClick={handleClickMenu} >
                                                <div className='flex items-center bg-color-bg-icon w-10 h-10 rounded-md'>
                                                    <Image 
                                                        alt='church-icon'
                                                        src={church}
                                                        height={22}
                                                        width={22}
                                                    />
                                                </div>
                                                <div className=' hover:text-color-text-hover'>
                                                    <div className=' font-semibold mb-1'>
                                                        教会生活
                                                    </div>
                                                    <div className=' font-normal text-sm'>
                                                        教会生活记录，以往精彩时刻
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link className='flex items-center gap-3 pr-[1rem] pl-[2rem] mb-[1rem]' href="/fellowship" onClick={handleClickMenu} >
                                                <div className='flex items-center bg-color-bg-icon w-10 h-10 rounded-md'>
                                                    <Image 
                                                        alt='family-icon'
                                                        src={family}
                                                        height={22}
                                                        width={22}
                                                    />
                                                </div>
                                                <div className=' hover:text-color-text-hover'>
                                                    <div className=' font-semibold mb-1'>
                                                        儿童团契
                                                    </div>
                                                    <div className=' font-normal text-sm'>
                                                        儿童团契，他们是上帝送给我们珍贵的礼物
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link className='flex items-center gap-3 pr-[1rem] pl-[2rem] mb-[1rem]' href="/events" onClick={handleClickMenu} >
                                                <div className='flex items-center bg-color-bg-icon w-10 h-10 rounded-md'>
                                                    <Image 
                                                        alt='calendar-icon'
                                                        src={calendar}
                                                        height={22}
                                                        width={22}
                                                    />
                                                </div>
                                                <div className=' hover:text-color-text-hover'>
                                                    <div className=' font-semibold mb-1'>
                                                        教会日历
                                                    </div>
                                                    <div className=' font-normal text-sm'>
                                                        教会即将到来的活动信息，以及以往活动
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='hover:text-hoverOnTransparent transparent-bg-hover text-base font-semibold leading-6'>
                            <Link href="/resources" className=' py-3 px-4'>
                                教会资料
                            </Link>
                        </div>
                        <div className='hover:text-hoverOnTransparent transparent-bg-hover text-base font-semibold leading-6'>
                            <Link href="/offerings" className=' py-3 px-4'>
                                奉献
                            </Link>
                        </div>
                        {/* <div>
                            <Link href="/contactus">
                                联系我们
                            </Link>
                        </div> */}
                    </div>

                    

                </div>


                <div className='hidden lg:flex justify-between max-w-[200px] items-center'>
                    <Link 
                        className='text-sm m-1 border border-color-hover font-semibold tracking-wider text-white h-10 w-auto px-8 py-4 rounded-md bg-color-btn hover:bg-color-btn-hover lg:inline-flex items-center' 
                        href='/contactus'>
                        联系我们
                    </Link>
                </div>

                <div className='sm:hidden flex flex-1 justify-end items-center rounded-md'>

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
                        <ul className='list-none flex flex-col text-base  justify-end items-center flex-1'>
                            <Link  href="/about">
                                <li className='font-poppins font-normal cursor-pointer   text-white mb-1 ' onClick={() => props.setToggleMenu(false)} >关于我们</li>
                            </Link>
                            <Link  href="/mission">
                                <li className='font-poppins font-normal cursor-pointer   text-white mb-1' onClick={() => props.setToggleMenu(false)} >使命及目标</li>
                            </Link>
                            <Link  href="/blog">
                                <li className='font-poppins font-normal cursor-pointer   text-white mb-1' onClick={() => props.setToggleMenu(false)} >教会活动</li>
                            </Link>
                            <Link  href="/offerings">
                                <li className='font-poppins font-normal cursor-pointer   text-white mb-1' onClick={() => props.setToggleMenu(false)} >奉献</li>
                            </Link>
                            <Link  href="/contactus">
                                <li className='font-poppins font-normal cursor-pointer  text-white mb-1' onClick={() => props.setToggleMenu(false)} >联系我们</li>
                            </Link>
                            {/* {categories.map((category, index) => (
                                <Link key={category.slug} href={`/category/${category.slug}`} >
                                    <li className={`font-poppins font-normal cursor-pointer text-[18px] '} text-white mb-1`} onClick={() => props.setToggleMenu(false)}>
                                        {category.name}
                                    </li>
                                </Link>
                            ))} */}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}


export default Header



    
// <ul className='list-none text-base sm:flex hidden justify-end items-center  flex-1'>
// <Link  href="/about">
//     <li className='font-poppins font-normal cursor-pointer  mr-10 text-white ' >关于我们</li>
// </Link>
// <Link  href="/mission">
//     <li className='font-poppins font-normal cursor-pointer  mr-10 text-white ' >使命及目标</li>
// </Link>
// {/* <Link  href="/blog">
//     <li onMouseEnter={showChurchActivities} id='churchActivities' className='font-poppins font-normal cursor-pointer  mr-10 text-white ' >教会活动</li>
// </Link> */}


// <Link  href="/offerings">
//     <li className='font-poppins font-normal cursor-pointer mr-10 text-white ' >奉献</li>
// </Link>
// <Link  href="/contactus">
//     <li className='font-poppins font-normal cursor-pointer  mr-10 text-white ' >联系我们</li>
// </Link>

// {/* {categories.map((category, index) => {
//     return(
    
//     <Link key={category.slug} href={`/category/${category.slug}`}>
//         <li className={`font-poppins font-normal cursor-pointer mr-10 text-[18px]  text-white`}>
//             {category.name}
//         </li>
//     </Link>
// )}
// )} */}
// </ul>
