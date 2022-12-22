import Image from "next/image"

const LoveAndCompassion = () => {
  return (
    <div className=' grid grid-cols-1 mx-auto text-center px-8  gap-10 my-10  justify-center  lg:grid-cols-12 lg:px-24'>
        <div className=' col-span-1  lg:col-span-full '>
            <h3 className=' text-color-text font-bold  py-8 text-xl'>以弗所书 </h3>
            <p className=' text-color-text'>
            神能照着运行在我们心里的大力，充充足足地成就一切，超过我们所求所想的。但愿他在教会中，并在基督耶稣里，得着荣耀，直到世世代代，永永远远。阿们。</p>
            <p className=' text-color-text p-7'>

            （以弗所书 3:20-21）
            </p>
  
        </div>
        <div className=' col-span-1 flex justify-center  lg:col-span-full '>
            <div className=' h-8 w-44 shadow-lg rounded-sm p-5 text-color-text-btn  flex items-center justify-center bg-color-btn'>阅读更多</div>
        </div>
        <div className=' relative col-span-1 overflow-hidden shadow-lg  h-64  lg:h-auto lg:col-span-3  lg:row-span-2'>
            <Image 
                alt="lac1"
                className=" absolute object-cover   rounded-md "
                src="https://images.pexels.com/photos/8674151/pexels-photo-8674151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                fill
            />
        </div>
        <div className=' relative overflow-hidden col-span-1 shadow-lg  h-64  lg:h-auto lg:col-span-6 lg:row-span-5  '>
            <Image 
                    alt="lac2"
                    className=" absolute object-cover rounded-md  lg:pt-10"
                    src="https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    fill
            />
        </div>
        <div className=' relative overflow-hidden shadow-lg col-span-1 h-64 lg:h-80 lg:w-80 lg:col-span-3 lg:pt-11  lg:row-span-2'>
            <Image 
                        alt="lac3"
                        className=" absolute  object-cover rounded-md "
                        src="https://images.pexels.com/photos/5206040/pexels-photo-5206040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        fill
            />
        </div>
        <div className=' col-span-1  flex flex-col  items-center gap-4  lg:col-span-full '>
            <h3 className=' text-color-text font-bold  gradient__text py-8 text-xl'>使命及目标</h3>
            <h4 className=" text-white">做门徒，关怀，宣教</h4>
            <div className="flex  flex-col">
                <div className=' text-color-text gap-4 flex  '>
                    <p>Transformation</p>
                    <p>生命更新，传扬福音</p>
                </div>
                <div className=' text-color-text gap-4 flex '>
                    <p className=" text-white">Connection</p>
                    <p>与神交通，敬虔生命</p>
                </div>
                <div className=' text-color-text gap-4 flex '>
                    <p className=" text-white">Maturity</p>
                    <p>门徒栽培，生命成熟</p>
                </div>
                <div className=' text-color-text gap-4 flex '>
                    <p className=" text-white">Community</p>
                    <p>群体关怀，相爱互契</p>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default LoveAndCompassion


{/* <div className="flex  flex-col">
<div className=' text-color-text gap-4 flex  '>
    <p>Transformation</p>
    <p>生命更新，传扬福音</p>
</div>
<div className=' text-color-text gap-4 flex '>
    <p className=" text-white">Connection</p>
    <p>与神交通，敬虔生命</p>
</div>
<div className=' text-color-text gap-4 flex '>
    <p className=" text-white">Maturity</p>
    <p>门徒栽培，生命成熟</p>
</div>
<div className=' text-color-text gap-4 flex '>
    <p className=" text-white">Community</p>
    <p>群体关怀，相爱互契</p>
</div>
</div> */}