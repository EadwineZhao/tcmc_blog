import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import Link from 'next/link';


const Hero = ({ featuredPosts }) => {
    // console.log(featuredPosts)
  return (
            

            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className="   relative  bg-cover bg-no-repeat h-full w-full  "
                containerClass="  "
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 1
                    },
                    mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1
                    },
                    tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 1
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
                >


                {featuredPosts.map(({node: post}) => {
                    return (
                        <div key={post.slug} className='relative   w-full  h-full '>
                            <Link href={`/post/${post.slug}`} key={post.title}>
                                <Image 
                                    key={post.title}
                                    alt={post.title}
                                    src={post.featuredImage.url}
                                    className=" relative opacity-80  z-10 block h-full w-full  "
                                    // height={600}
                                    // width={600}
                                    fill={true}
                                    sizes="
                                        (max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
                                    quality={50}
                                    
                                    
                                />
                            </Link>
                            {/* <h2 className=" absolute text-lg top-8  z-20  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">主日崇拜程序单18/12/22</h2> */}
                        </div>
                    )
                })}



                
                <img
                     src="https://images.unsplash.com/photo-1599964815811-30b9aea11d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%'
                    }}
                />

            </Carousel>
  
  )
}

export default Hero