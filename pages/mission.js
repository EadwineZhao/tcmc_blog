import React from 'react'

const Mission = () => {
  return (
    <div className='container  mx-auto'>
      <div className='flex flex-col justify-center text-center m-6 space-y-6 text-color-text'>

          <p>
            我们一个陶朗加的教会社区，热衷于在现代文化中追随耶稣的道路。
          </p>
          <p>

            我们渴望看到“上帝的名声和作为在我们这个时代被更新和了解”（哈巴谷书 3:2),方法是追求上帝的实际同在,以耶稣的方式实践，并为上帝的牺牲使命而活。 
          </p>
          <p>
            我们相信将这三件事——存在、形成和使命——结合起来是耶稣事工的核心，也是我们这个时代和历史上教会独特的呼召。
          </p>
      </div>

      <div className='container bg-color-footer mx-auto px-4  py-12  mb-8  grid  grid-cols-1   lg:grid-cols-12 gap-12'>
          <div className=' col-span-1 text-center p-12 row-span-4 lg:col-span-6 '>
              <h1 className=' text-2xl font-extrabold gradient__text mb-6'>佳恩堂目标、使命</h1>
              <h3 className=' text-l font-bold text-white'>做门徒，关怀，宣教</h3>
          </div>
          <div className=' grid grid-cols-2   col-span-1 lg:col-span-6'>
              <div className=' h-1 w-8 col-span-2  bg-gradient-bar mb-3' />
              <p className='text-white  col-span-1'>Transformation</p>
              <p className=' text-color-text col-span-1'>生命更新，传扬福音</p>
          </div>
          <div className=' grid grid-cols-2 col-span-1 lg:col-span-6'>
              <div className=' h-1 w-8 col-span-2  bg-gradient-bar mb-3' />
              <p className='text-white  col-span-1'>Connection</p>
              <p className=' text-color-text col-span-1'>与神交通，敬虔生命</p>
          </div>
          <div className=' grid grid-cols-2 col-span-1 lg:col-span-6'>
              <div className=' h-1 w-8 col-span-2  bg-gradient-bar mb-3' />
              <p className='text-white col-span-1'>Maturity</p>
              <p className=' text-color-text col-span-1'>门徒栽培，生命成熟</p>
          </div>
          <div className=' grid grid-cols-2  col-span-1 lg:col-span-6'>
              <div className=' h-1 w-8 col-span-2  bg-gradient-bar mb-3' />
              <p className='text-white  col-span-1'>Community</p>
              <p className=' text-color-text col-span-1'>群体关怀，相爱互契</p>
          </div>
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