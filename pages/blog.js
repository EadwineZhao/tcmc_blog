import React from 'react'
import { getPosts } from '../services'
import PostCard from '../components/PostCard'


const Blog = ({ posts }) => {
    return (
        <div className=' container mx-auto px-5 grid grid-cols-1 gap-9 lg:grid-cols-12'>
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
  
  
