import React from 'react'
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

const PostCard = ( {post, index} ) => {

  
  
  return (
    <div>
      <div className=" bg-[#042c54] shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
        <div className="relative h-20 overflow-hidden shadow-md pb-80 mb-6">


          
            <Image 
              src={post.featuredImage.url}
              alt={post.title}
              className=" absolute object-top object-cover  shadow-lg rounded-t-lg lg:rounded-lg "
              fill={true}
              sizes="
                (max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              quality={50}
              priority={index === 0 ? true : false}
            />
  
      
        </div>
        <h1 className='transition duration-100 text-white text-center mb-5 cursor-pointer hover:text-pink-600 text-l font-semibold'>
          <Link href={`/post/${post.slug}`}>
            {post.title}
          </Link>
        </h1>
        <div className="block lg:flex text-center text-white items-center justify-center mb-8 w-full">
        {/* <div className="flex itmes-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
  
            <Image 
              alt={post.author.name}
              height={30}
              width={30}
              className='aligh-middle rounded-full w-auto h-auto '
              src={post.author.photo.url}
              quality={50}
            />
            <p className="inline align-middle text-gray-700 ml-2 text-lg">{post.author.name}</p>
          </div> */}
          <div className="font-medium text-white ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>
          </div>
        </div>
        <p className='text-center  text-white font-normal px-4 lg:px-20 mb-8'>{post.excerpt}</p>
        <div className='text-center'>
            <Link href={`/post/${post.slug}`}>
                <span className='transition duration-500  hover:-translate-y-1 inline-block  bg-white text-lg font-medium rounded-full text-back px-8 py-3 cursor-pointer'>
                    继续阅读
                </span>
            </Link>
        </div>
      </div>
      
    </div>
  )
}

export default PostCard



