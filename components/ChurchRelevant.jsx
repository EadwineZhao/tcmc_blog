import { about, involved, givingback } from "../public/icon"
import Image from "next/image"

const ChurchRelevant = () => {
  return (
    <div className=' container mx-auto my-16 px-5 grid grid-cols-1 justify-center gap-6  lg:grid-cols-12'>
        <div className="col-span-1 text-center text-color-text font-bold lg:col-span-12">
            <h3 className=" text-xl">
            活在礼仪中
            </h3>
        </div>
        <div className='col-span-1 bg-brightRedSupLight rounded-sm p-7 border-b-8 border-b-color-text lg:col-span-4'>
            <div className=" flex justify-center items-center bg-color-btn h-10 w-10 rounded-full mb-6">

                <Image 
                    alt='abouticon'
                    src={about}
                />
            </div>
            <h4 className=' text-lg font-semibold text-color-text-header mb-4'>关于我们</h4>
            <p className=' text-color-text-primary'>
            我们寻求通过我们的周日服务、每周的祈祷室时间、每周的社区团体。建立我们之间的纽带。
            </p>
            {/* <div className=' h-1 bg-gradient-bar 	' /> */}
        </div>
        <div className='col-span-1 bg-brightRedSupLight rounded-sm shadow-sm p-7 border-b-8 border-b-color-text lg:col-span-4'>
            <div className=" flex justify-center items-center bg-color-btn h-10 w-10 rounded-full mb-6">

                <Image 
                    alt='involvedicon'
                    src={involved}
                />
            </div>
            <h4 className=' text-lg font-semibold text-color-text-header mb-4'>建立联系</h4>
            <p className=' text-color-text-primary'>
            我们的祷告是，当您探索信仰和我们的社区时，您将亲身体验耶稣基督的爱！ 我们祷告你会知道福音的好消息并被改变，通过圣灵自由的工作获得新的身份，参与信徒的社区，信仰三位一体真神是我们的使命，并学习 活出圣灵的能力。
            </p>
            {/* <div className=' h-1 bg-gradient-bar 	' /> */}
        </div>
        <div className='col-span-1 bg-brightRedSupLight rounded-sm shadow-sm p-7 border-b-8 border-b-color-text lg:col-span-4'>
            <div className=" flex justify-center items-center bg-color-btn h-10 w-10 rounded-full mb-6">

                <Image 
                    alt='givingbackicon'
                    src={givingback}
                />
            </div>
            <h4 className=' text-lg font-semibold text-color-text-header mb-4'>回馈社会</h4>
            <p className=' text-color-text-primary'>
            万军之耶和华说：你们要将当纳的十分之一，全然送入仓库，使我家有粮，以此试试我，是否为你们敞开天上的窗户，倾福与你们，甚至无处可容


            </p>
            {/* <div className=' h-1 bg-gradient-bar 	' /> */}
        </div>
    </div>
  )
}

export default ChurchRelevant