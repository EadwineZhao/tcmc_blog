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
            <div className='container   mx-auto px-6'>

                <h3 className=' text-xl font-bold py-2'>
                使徒信经
                </h3>
                <p className=' py-2'>

                我信上帝 全能的父 创造天地的主
                </p>
                <p className=' py-2'>

                我信我主耶稣基督 上帝的独生子
                </p>
                <p className=' py-2'>
                因着圣灵感孕 由童贞女马利亚所生
                </p>
                <p className=' py-2'>
                在本丢彼拉多手下受难 被钉在十字架上
                </p>
                <p className=' py-2'>
                受死 埋葬 降在阴间 第三天从死人中复活
                </p>
                <p className=' py-2'>
                升天 坐在全能父上帝的右边
                </p>
                <p className=' py-2'>
                将来必从那里降临 审判活人 死人
                </p>
                <p className=' py-2'>
                我信圣灵
                </p>
                <p className=' py-2'>
                我信圣而公之教会 我信圣徒相通
                </p>
                <p className=' py-2'>
                我信罪得赦免
                </p>
                <p className=' py-2'>
                我信身体复活
                </p>
           
                我信永生 阿们！

            </div>
            <h2 className="text-xl font-bold text-center pt-8 ">
                2022/2024
            </h2>
            <h2 className="text-xl font-bold text-center pt-8 pb-20">
                佳恩堂牧者与执事会
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