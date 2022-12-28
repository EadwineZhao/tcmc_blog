import React from 'react'
import { getPosts } from '../services'
import PostCard from '../components/PostCard'
import {  feathericons } from '../public/icon'
import Link from 'next/link'


const Blog = ({ posts }) => {

    return (
      <div className='overflow-hidden bg-blog  bg-center-50px  bg-cover bg-no-repeat'>
        <div className='flex flex-col  justify-center items-center mt-[6rem] pb-[5rem] px-[1rem]'>
          <h1  className='mt-[1rem] font-bold text-[4.5rem] text-color-text-graywhite text-center'>
            佳恩堂Blog
          </h1>
          <p className=' mt-3 text-[1.25rem] text-center text-color-text-graywhite max-w-[576px] leading-6'>
            关于佳恩堂的信息指南，官方文章，以及教堂日常活动记录关于佳恩堂的信息指南，官方文章，以及教堂日常活动记录
          </p>

          <section className='Subscribe_Wrapper mx-auto text-left py-10  lg:my-6'>
            <div className='Container mx-auto my-0  max-w-[500px] px-2 lg:px-8 lg:max-w-[1200px]'>
                <form className='Newsletter__NewsletterWrapper  min-w-full  gap-[16px] flex flex-col justify-between items-start   lg:flex-row mt-6'>
                  <div className='label-wrapper flex flex-col gap-4 w-full max-w-full lg:flex-row'>
                    <label className='flex flex-row justify-start items-center h-12 bg-white w-full lg:w-1/2 rounded-[10px] border border-color-text-graywhite p-[14px] pl-[16px] gap-4 text-color-text-lightgray'>
                      <div className='leading-icon h-[18px] w-[18px]'>
                        <svg fill="none" stroke="currentColor" strokeWidth="1" width="100%" height="100%" strokeLinecap="round" strokeLinejoin="round"><use xlinkHref="/assets/feathericons.svg#user"></use></svg>                      
                      </div>
                      <input 
                        type='text'
                        placeholder='名字'
                        className=' w-full p-0  text-lg ' 
                        id='name'  
                      />
                    </label>
                    <label className=' flex flex-row justify-start items-center h-12 bg-white w-full lg:w-1/2  rounded-[10px] border border-color-text-graywhite p-[14px] pl-[16px] gap-4 text-color-text-lightgray'>
                      <div className='leading-icon h-[18px] w-[18px]'>
                        <svg fill="none" stroke="currentColor" strokeWidth="1" width="100%" height="100%" strokeLinecap="round" strokeLinejoin="round"><use xlinkHref="/assets/feathericons.svg#mail"></use></svg>                      
                      </div>
                      <input 
                        type='text'
                        placeholder='邮件地址'
                        className=' w-full p-0  text-lg ' 
                        id='email'  
                      />
                    </label>
                  </div>
                  <Link 
                    className='Newsletter__Button rounded-md flex justify-center items-center text-center py-[14px]  px-[28px] bg-color-btn-bg h-12 font-bold text-white hover:bg-color-btn-hover '
                    href="#"
                  >
                    <input type='submit' value='点击订阅' name='subscribe' id='subscribe' />
                  </Link>
                </form>
            </div>
          </section>
          <div className='w-0 lg:h-[90px]'></div>
        </div>
      </div>
    )
}

export default Blog

export async function getStaticProps({ params }) {
    const posts = (await getPosts()) || [];
    return {
      props: { posts },
      revalidate: 20,
    }
  }
  
  
//   <div className=' container mx-auto grid grid-cols-1 gap-9 lg:grid-cols-12 lg:max-w-[1200px]'>
//   {posts.map(({node: post}, index) => {
//     return(
//       <div className='lg:col-span-4' key={post.title} >
//         <PostCard 
//           key={index}
//           post={post}
//         />
//       </div>
//     )
//   })}
// </div>