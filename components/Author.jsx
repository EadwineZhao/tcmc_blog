import React from 'react'
import Image from 'next/image'

const Author = ({ author}) => {
  return (
    <div className='text-center bg-bubble-gum mt-10 mb-12 p-12 relative rounded-lg bg-black bg-opacity-20'>
        <div className="absolute left-0 right-0 -top-14">
            {/* <Image 
                alt={author.name}
                
                height={100}
                width={100}
                className='align-middle rounded-full h-auto w-auto'
                src={author.photo.url}
                quality={50}
            /> */}
        </div>
        <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
        <p className='text-white text-lg'>{author.bio}</p>

    </div>
  )
}

export default Author