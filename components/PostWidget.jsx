import React, { useState, useEffect } from 'react';
import moment from 'moment/moment';
import Link from 'next/link';
import Image from 'next/image';

import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ( { categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if(slug)  {
      getSimilarPosts (categories, slug)
        .then ((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then ((result) => setRelatedPosts(result))
    }
  }, [slug, categories])
  

  return (
    <div className='bg-[#042c54] shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl text-white mb-8 font-semibold border-b pb-4'>
        {slug? '相关文章' : '近期发布'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16  flex-none  ">
            <Link href={`/post/${post.slug}`} key={post.title}>
              <>
                <Image 
                  key={post.title}
                  alt={post.title}
                  src={post.featuredImage.url}
                  className=' align-middle rounded-full h-auto w-auto'
                  height={40}
                  width={60}
                  quality={10}
                />
              </>
            </Link>
          </div>
          <div className="flex-grow ml-4">
              <Link href={`/post/${post.slug}`} key={post.slug}>
                <p className="text-gray-500 text-white font-xs">
                    {moment(post.createdAt).format('MMM DD, YYYY')}
                </p>
              </Link>
  
              <Link href={`/post/${post.slug}`} key={post.title} className='text-md text-white '>
                  {post.title}
              </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget