// import { flow } from "../public/icon";
import Link from "next/link";
import { useEffect } from "react";

const Events = () => {



    return (
        <div>
            <section>
                <div className=" layout__Hero overflow-hidden bg-color-events-bg bg-center bg-no-repeat bg-cover   bg-[url('/icon/flow.svg')]   ">
                    <div className="mt-[5rem] pb-[4rem] flex flex-col items-center text-center lg:pb-[200px] lg:mt-[10rem] ">
                        <h3 className="mt-[1rem] font-bold text-white leading-[1.1] text-[2rem] ">
                            佳恩堂 活动信息
                        </h3>
                        <p className=" mt-[2rem] mx-auto mb-0 max-w-[700px] text-color-text-graywhite text-[1.1rem]">
                            教会即将到来的活动，以及以往的活动，日常活动的更新信息
                        </p>
                        <div className="mt-[2rem] flex justify-center items-center">
                            <Link 
                                href='#upcoming' 
                                className=" bg-white px-4  py-3 font-semibold text-color-text-darkblack
                                                rounded-lg leading-6 lg:text-xl hover:scale-105 duration-300  "
                            >
                                查看  即将到来的活动
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" flex flex-col items-center bg-white p-[2rem] overflow-hidden lg:p-0">
                <div className=" w-full max-w-[1200px]  mt-10 lg:mt-20 lg:mb-12">
                    <div id="upcoming">
                        <h4 className=" font-bold text-[1.5rem] mb-4">
                            即将到来的活动
                        </h4>
                        <hr className=" -ml-[999px] -mr-[999px] mb-12" />
                        <div className="event__container grid grid-cols-1 lg:grid-cols-12">

                        </div>
                    </div>

                </div>
            </section>
        </div>

    )
}

export default Events



// <div className=" container mx-auto  max-w-5xl bg-color-btn h-[300px]  -mb-[192px]  mt-[50px] py-8 px-[2rem]">

// </div>