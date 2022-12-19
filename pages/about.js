import React from 'react';
import { getLeaders } from '../services'
import { useState, useEffect } from 'react';
import Image from 'next/image';

const About = () => {
    const [leaders, setLeaders] = useState([])
    useEffect(() => {
        getLeaders()
        .then((data) => {
            setLeaders(data)
        })
    }, [])

    return (
        
        <div className=" container mb-8  rounded-lg    px-5 mx-auto mt-10 text-center text-color-text">
            <div className='container  mx-auto px-6'>

                <p className=' py-6'>
                    欢迎来到佳恩堂！ 无论您是刚到这座城市，还是这座城市的居民，我们都很高兴您找到了我们。我们寻求通过我们的周日服务、每周的祈祷室时间、每周的社区团体。建立我们之间的纽带。
                </p>
                <p className=' py-6'>

                    我们鼓励您在下面更多地了解我们的愿景和信念，并邀请您通过我们的众多服务、祷告会和事工机会与我们建立联系。
                </p>
                <p className=' py-6'>

                    我们的祷告是，当您探索信仰和我们的社区时，您将亲身体验耶稣基督的爱！ 我们祷告你会知道福音的好消息并被改变，通过圣灵自由的工作获得新的身份，参与信徒的社区，信仰三位一体真神是我们的使命，并学习 活出圣灵的能力。
                </p>
                <p className=' py-6'>

                愿上帝在我们的城市和我们这一代人中做的事比我们梦想的还要多！
                </p>
            </div>
            <h2 className="text-xl font-bold text-center pt-8 pb-20">
                2022/2024佳恩堂执事会
            </h2>
                {/* // <!-- Testimonials Container --> */}
                <div className="container mx-auto px-8 mb-8 grid grid-cols-1 lg:grid-cols-12 gap-10 ">
                
                {/* {console.log(leaders)} */}
                {leaders.map((leader) => {
                    return (
                    <div
                    className=" relative text-center grid justify-center col-span-1   bg-color-footer  space-y-6 mb-14 rounded-lg lg:col-span-4 "
                    key={leader.displayOrder}
                    >
                        <div className='absolute flex justify-center  left-0 right-0 -top-9   '>

                            <Image 
                                alt={leader.name}
                                src={leader.photo.url}
                                height={64}
                                width={64}
                                className=' align-middle rounded-full h-auto w-auto'
                            />
                        </div>
                        <h5 className='  text-lg font-bold my-4 pt-8 '>
                            {leader.name}
                        </h5>

                        <h4 className=' text-sm   text-white' >
                            {leader.titles.map((title, index) => {
                                return (
                                
                                        `. ${title} .`
                                )
                            })}
                        </h4>
                        <p className='text-sm italic'>
                            Email: {leader.email}
                        </p>
                    <p>
                        
                    </p>
                    </div>
                    )
                })}
     

                </div>
        </div>
    )
}

export default About


// <div className=" container mb-8  rounded-lg   px-5 mx-auto mt-10 text-center text-color-text">

// <h2 className="text-4xl font-bold text-center py-10">
//     2022/2024佳恩堂执事会
// </h2>
//     {/* // <!-- Testimonials Container --> */}
//     <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
//     {/* {console.log(leaders)} */}
//     {leaders.map((leader) => {
//         return (
//         <div
//         className="flex flex-col items-center  bg-color-footer p-6 space-y-6 mb-5 rounded-lg md:w-1/3"
//         key={leader.displayOrder}
//         >
//         <Image 
//             alt={leader.name}
//             src={leader.photo.url}
//             height={50}
//             width={50}
//             className='aligh-middle rounded-full h-auto w-auto'
//         />
//         <h5 className='text-lg font-bold'>
//             {leader.name}
//         </h5>
//         {leader.titles.map((title, index) => {
//             return (
//                 <h4 className=' text-sm font-semibold italic text-white' key={index}>
//                     {title}
//                 </h4>
//             )
//         })}
//         <p>
            
//         </p>
//         </div>
//         )
//     })}


//     </div>
// </div>








                // {/* <!-- Testimonial 1 --> */}
                // <div
                // class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
                // >
                // <img src="img/avatar-anisha.png" class="w-16 -mt-14" alt="" />
                // <h5 class="text-lg font-bold">Anisha Li</h5>
                // <p class="text-sm text-darkGrayishBlue">
                //     “Manage has supercharged our team’s workflow. The ability to
                //     maintain visibility on larger milestones at all times keeps
                //     everyone motivated.”
                // </p>
                // </div>

                // {/* <!-- Testimonial 2 --> */}
                // <div
                // class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
                // >
                // <img src="img/avatar-ali.png" class="w-16 -mt-14" alt="" />
                // <h5 class="text-lg font-bold">Ali Bravo</h5>
                // <p class="text-sm text-darkGrayishBlue">
                //     “We have been able to cancel so many other subscriptions since
                //     using Manage. There is no more cross-channel confusion and
                //     everyone is much more focused.”
                // </p>
                // </div>

                // {/* <!-- Testimonial 3 --> */}
                // <div
                // class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
                // >
                // <img src="img/avatar-richard.png" class="w-16 -mt-14" alt="" />
                // <h5 class="text-lg font-bold">Richard Watts</h5>
                // <p class="text-sm text-darkGrayishBlue">
                //     “Manage has supercharged our team’s workflow. The ability to
                //     maintain visibility on larger milestones at all times keeps
                //     everyone motivated.”
                // </p>
                // </div>