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
        <div className=" container mb-8  rounded-lg   px-5 mx-auto mt-10 text-center text-color-text">

            <h2 className="text-4xl font-bold text-center py-10">
                2022/2024佳恩堂执事会
            </h2>
                {/* // <!-- Testimonials Container --> */}
                <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                {/* {console.log(leaders)} */}
                {leaders.map((leader) => {
                    return (
                    <div
                    className="flex flex-col items-center  bg-color-footer p-6 space-y-6 mb-5 rounded-lg md:w-1/3"
                    key={leader.displayOrder}
                    >
                    <Image 
                        alt={leader.name}
                        src={leader.photo.url}
                        height={50}
                        width={50}
                        className='aligh-middle rounded-full h-auto w-auto'
                    />
                    <h5 className='text-lg font-bold'>
                        {leader.name}
                    </h5>
                    {leader.titles.map((title, index) => {
                        return (
                            <h4 className=' text-sm font-semibold italic text-white' key={index}>
                                {title}
                            </h4>
                        )
                    })}
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