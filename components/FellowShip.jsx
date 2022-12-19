import Image from "next/image"


const FellowShip = () => {
  return (
    <div className="relative mx-auto px-6 grid mb-24   grid-cols-12 h-full   lg:px-28 ">
        <div className="relative mx-auto my-12  w-24 h-24 col-span-full border-[15px]  overflow-visible border-color-btn bg-gradient-bar lg:col-span-3">
            <h3 className=" absolute  -top-2 -left-2 w-24 font-extrabold  text-4xl mx-auto text-white">团契</h3>
            <h3 className=" absolute left-2 bottom-0 w-24 font-extrabold text-4xl  mx-auto text-white">相册</h3>
        </div>
        <div className=" my-auto  col-span-full h-2  bg-gradient-bar w-full lg:col-span-1 lg:w-2 lg:h-auto" />
        <div className="relative col-span-full py-6 lg:col-span-8">
            <p className=" text-white">
            团结、友爱与分享，信徒之间互相平等、团结友爱，在圣灵指导下过信徒见证的生活，分享基督之爱。 团契通常以组织、年龄、地域、语言、职业、圣经人物等带有群体性质的方式命名，团契聚会的主要内容有破冰祷告、诗歌敬拜、查经、分享、聚餐、传福音等。
            </p>
        </div>
        <div className=" relative h-64 col-span-8 lg:h-96 ">
            <Image 
                alt="blh"
                src='https://media.graphassets.com/wo4PJgwtQFiu1xWmuE2D'
                fill
                className=" object-cover   opacity-70"
                sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
            />
        </div>
        <div className=" relative  col-span-4  lg:h-96">
            <Image 
                    alt="blh"
                    src='https://media.graphassets.com/CvWnKkEFTj1XhdFNPfLQ'
                    fill
                    className=" object-cover opacity-70"
            />
        </div>

        <div className=" relative h-32 col-span-4 lg:h-96">
            <Image 
                        alt="blh"
                        src='https://media.graphassets.com/wo4PJgwtQFiu1xWmuE2D'
                        fill
                        className=" object-cover opacity-70"
            />
        </div>
        <div className=" relative col-span-4 lg:h-96">
            <Image 
                        alt="blh"
                        src='https://media.graphassets.com/wo4PJgwtQFiu1xWmuE2D'
                        fill
                        className=" object-cover opacity-70"
            />
        </div>
        <div className=" relative col-span-4 lg:h-96">
            <Image 
                        alt="blh"
                        src='https://media.graphassets.com/wo4PJgwtQFiu1xWmuE2D'
                        fill
                        className=" object-cover opacity-70"
            />
        </div>
    </div>
  )
}

export default FellowShip