import React from 'react'

const Mission = () => {
  return (
    <div className='container mx-auto px-5  mb-8  grid  grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className=' col-span-1 lg:col-span-6'>
            <h1 className=' text-2xl gradient__text mb-6'>佳恩堂目标、使命</h1>
            <h3 className=' text-l text-white'>做门徒，关怀，宣教</h3>
        </div>
        <div className=' grid grid-cols-2 col-span-1 lg:col-span-6'>
            <div className=' h-1 w-8 col-span-2  bg-gradient-bar mb-3' />
            <h1 className='text-white  col-span-1'>Transformation</h1>
            <p className=' text-color-text col-span-1'>生命更新，传扬福音</p>
        </div>
        <div className=' grid grid-cols-2 col-span-1 lg:col-span-6'>
            <div className=' h-1 w-8 col-span-2  bg-gradient-bar mb-3' />
            <h1 className='text-white  col-span-1'>Connection</h1>
            <p className=' text-color-text col-span-1'>与神交通，敬虔生命</p>
        </div>
        <div className=' grid grid-cols-2 col-span-1 lg:col-span-6'>
            <div className=' h-1 w-8 col-span-2  bg-gradient-bar mb-3' />
            <h1 className='text-white col-span-1'>Maturity</h1>
            <p className=' text-color-text col-span-1'>门徒栽培，生命成熟</p>
        </div>
        <div className=' grid grid-cols-2 col-span-1 lg:col-span-6'>
            <div className=' h-1 w-8 col-span-2  bg-gradient-bar mb-3' />
            <h1 className='text-white  col-span-1'>Community</h1>
            <p className=' text-color-text col-span-1'>群体关怀，相爱互契</p>
        </div>
    </div>
  )
}

export default Mission


{/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="col-span-1 lg:col-span-8">
  {posts.map((post, index) => (
    <PostCard key={index} post={post.node} />
  ))}
</div>
<div className="col-span-1 lg:col-span-4">
  <div className="relative lg:sticky top-8">
    <Categories />
  </div>
</div>
</div> */}