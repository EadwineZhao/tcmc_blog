import React from 'react'
import logo from '../public/logo.png'
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className=''>
      {/* <!-- Flex Container --> */}
      <div
        className="container flex border-y border-color-border flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
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
        <div className="flex justify-around   space-x-20  hover:text-brightRed lg:space-x-36">
          <div className="flex flex-col space-y-3 text-white ">
            <a href="/" className="hover:text-brightRed">首页</a>
            <a href="/category/sunday-worship" className="hover:text-brightRed">主日程序单</a>
            <a href="/blog" className="hover:text-brightRed">教会活动</a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="/mission" className="hover:text-brightRed">使命目标</a>
            <a href="/offerings" className="hover:text-brightRed">奉献</a>
            <a href="/contactus" className="hover:text-brightRed">联系我们</a>

          </div>
        </div>

        {/* <!-- Input Container --> */}
        <div className="flex flex-col px-6 justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="输入电子邮件以订阅期刊"
              />
              <button
                className="px-6 py-2 text-color-footer rounded-full bg-color-btn hover:bg-brightRedLight focus:outline-none"
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