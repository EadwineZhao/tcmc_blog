import { about, involved, givingback } from "../public/icon"
import Image from "next/image"

const ChurchRelevant = () => {
  return (
    <div className=' container mx-auto my-16 px-5 grid grid-cols-1 justify-center gap-6  lg:grid-cols-12'>
        <div className="col-span-1 text-center text-color-text font-bold lg:col-span-12">
            <h3 className=" text-xl">
            做门徒，关怀，宣教
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
            佳恩堂是一间靠著圣灵的大能而建立的属灵大家庭:
1.小组的教会: 人人在小组生活中，被关心、牧养，成为相爱相顾的“家人”
2.门训的教会: 人人在培育系统中，被装备、训练，成为跟随耶稣的“门徒”
3.宣教的教会: 人人在宣教异象中，被呼召、差派，成为福音使命的“使者”
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
            <h4 className=' text-lg font-semibold text-color-text-header mb-4'>三一信仰</h4>
            <p className=' text-color-text-primary'>
            宇宙只有一位永生的真神上帝，无始无终，无形无像。祂的权能、智慧及良善，皆无穷尽。世上有形无形之万物，都是祂创造的、保存的。这位独一的真神上帝，是三位一体的；即圣父、圣子、圣灵。也是同本质、同权柄、同永生的。
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
            <h4 className=' text-lg font-semibold text-color-text-header mb-4'>神的教会</h4>
            <p className=' text-color-text-primary'>
            这家是永生神的教会，真理的柱石和根基。
（提摩太前书3：15）
            </p>
            {/* <div className=' h-1 bg-gradient-bar 	' /> */}
        </div>
    </div>
  )
}

export default ChurchRelevant