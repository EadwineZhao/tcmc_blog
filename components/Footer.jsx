import React from 'react'
import logo from '../public/logo.png'
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className=''>
      {/* <!-- Flex Container --> */}
      <div
        className="container flex border-y border-color-border flex-col-reverse justify-between px-3 py-10  space-y-8 md:flex-row md:space-y-0"
      >
        {/* <!-- Logo and social links container --> */}
        <div
          className="flex flex-col-reverse  items-center justify-between space-y-6 md:flex-col md:space-y-0 md:items-start "
        >
          <div className=" mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022 纽西兰华人卫理公会佳恩堂 
          </div>
          
          {/* <!-- Logo --> */}
            <Link href='/' >
                <>
                    <Image  
                        src={logo}
                        alt='tcmc_logo' 
                        className='cursor-pointer '
                        // height={90}
                        width={210}
                    />
                </>
            </Link>

        </div>
        {/* <!-- List Container --> */}
        <div className="flex justify-around space-x-28 hover:text-brightRed lg:space-x-36">
          <div className="flex flex-col space-y-3 text-white ">
            <Link href="/" className="hover:text-brightRed">首页</Link>
            <Link href="/category/sunday-worship" className="hover:text-brightRed">主日程序单</Link>
            <Link href="/blog" className="hover:text-brightRed">教会活动</Link>

          </div>
          <div className="flex flex-col space-y-3 text-white">
            <Link  href="/mission" className="hover:text-brightRed">使命目标</Link>
            <Link href="/offerings" className="hover:text-brightRed">奉献</Link>
            <Link href="/contactus" className="hover:text-brightRed">联系我们</Link>

          </div>
        </div>

        {/* <!-- Input Container --> */}
        <div className="flex flex-col px-4 justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 w-[80%] indent-3 rounded-full focus:outline-none"
                placeholder="输入电子邮件以订阅期刊"
              />
              <button
                className=" px-6 py-2 text-color-footer rounded-full bg-color-btn hover:bg-brightRedLight focus:outline-none"
              >
                订阅
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block ">
            Copyright &copy; 2022 纽西兰华人卫理公会佳恩堂 
          </div>


        </div>
      </div>

    </footer>

  )
}

export default Footer