import Head from 'next/head';
//import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { PostCard, Categories, PostWidget, Hero } from "../components";
import BenefitsofJoin from '../components/BenefitsofJoin';
import ChurchRelevant from '../components/ChurchRelevant';
import FellowShip from '../components/FellowShip';
import JoinUs from '../components/JoinUs';
import LoveAndCompassion from '../components/LoveAndCompassion';
import ServeWorld from '../components/ServeWorld';
import { getFeaturedPosts } from '../services'
import Groups from './groups';





export default function Home( { posts }) {
  return (
      <div className=" mb-8">
        <Head>
          <title>纽西兰华人卫理公会佳恩堂</title>
          {/* <meta name="description" content="Generated by create next app" /> */}
          {/* <link rel="icon" sizes='32x32' href="/favicon.png" /> */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="纽西兰华人卫理公会佳恩堂" />
        </Head>

    

    
 

        {/* <FeaturedPosts /> */}


        {/* <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1'>
            {posts.map((post, index) => <PostCard post={post.node} key={post.node.title} index={index} />)}
          </div>
          <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div> */}
        <Hero 
          featuredPosts = {posts.filter(({node}) => node.featuredPost == true)}
        />
        <ChurchRelevant />
        <LoveAndCompassion />
        <BenefitsofJoin />
        <FellowShip />
        <JoinUs />
        <ServeWorld />

    </div>
  )
}

export async function getStaticProps({ params }) {
  const posts = (await getFeaturedPosts()) || [];
  return {
    props: { posts },
    revalidate: 20,
  }
}

