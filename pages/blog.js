import React from 'react'
import { getPosts } from '../services'
import PostCard from '../components/PostCard'


const Blog = ({ posts }) => {

    return (
        <div className=' container mx-auto grid grid-cols-1 gap-9 lg:grid-cols-12 lg:max-w-[1200px]'>
  <div className=' container mx-auto grid grid-cols-1 gap-9 lg:grid-cols-12 lg:max-w-[1200px]'>
  {posts.map(({node: post}, index) => {
    return(
      <div className='lg:col-span-4' key={post.title} >
        <PostCard 
          key={index}
          post={post}
        />
      </div>
    )
  })}
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
  
  
