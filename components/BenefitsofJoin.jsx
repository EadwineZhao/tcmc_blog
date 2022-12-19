import Image from "next/image"


const BenefitsofJoin = () => {
  return (
    <div className=' bg-color-bg-benefitsofjoing mx-auto grid   text-center gap-6 my-10 p-6   py-16 grid-cols-1 lg:space-x-6 lg:grid-cols-12  lg:px-24'>
        <div className=' col-span-1  lg:col-span-full'>
            <p className=" text-color-text-primary p-6">看和听</p>
            <h4 className=' text-color-text-header text-3xl'>参与教会的益处</h4>
        </div>
        <div className=' relative  text-white h-96 col-span-1 lg:col-span-3'>
            <Image
            alt='boj1'

            className=" absolute object-center object-cover align-middle drop-shadow-lg rounded-lg"
            src="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            quality={80}
            fill
            />
            <div className="absolute px-10 bottom-0 py-5 space-y-5">
                <h5 className="text-2xl -tracking-wider  font-bold ">友谊</h5>

                <p className=" ">通过与教会家庭的联系而发展,结交和拥有相同信仰和价值观的朋友可以帮助我们所有人在我们生活的这个奇异世界中航行。</p>
            </div>
        </div>
        <div className=' relative   text-white flex justify-center h-96 col-span-1 lg:col-span-3'>
            <Image
            alt='boj1'

            className=" absolute object-center object-cover align-middle drop-shadow-lg rounded-sm"
            src="https://images.pexels.com/photos/267559/pexels-photo-267559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            quality={50}
            fill
            />
            <div className="absolute px-10 bottom-0 py-5 space-y-5">
                <h5 className="text-2xl -tracking-wider  font-bold ">社区意识</h5>

                <p className=" opacity-80">快节奏的文化让我们中的许多人生活得如此孤立。 属于一个教会团体提供了与其他人的互动并创造了一个社会社区机会。</p>
            </div>
        </div>
        <div className=' relative   text-white flex justify-center h-96 col-span-1 lg:col-span-3'>
            <Image
            alt='boj1'

            className=" absolute object-center object-cover align-middle drop-shadow-lg rounded-sm"
            src="https://images.pexels.com/photos/428062/pexels-photo-428062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            quality={50}
            fill
            />
            <div className="absolute px-10 bottom-0 py-5 space-y-5">
                <h5 className="text-2xl -tracking-wider  font-bold ">个人发展</h5>

                <p className=" opacity-80">无论我们是新基督徒还是已经成为基督徒很长时间了，一个充满活力的教会都可以提供门徒训练以及属灵发展和成长。</p>
            </div>
        </div>
        <div className=' relative   text-white flex justify-center h-96 col-span-1 lg:col-span-3'>
            <Image
            alt='boj1'

            className=" absolute object-center object-cover align-middle drop-shadow-lg rounded-sm"
            src="https://images.pexels.com/photos/2081128/pexels-photo-2081128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            quality={50}
            fill
            />
            <div className="absolute px-10 bottom-0 py-5 space-y-5">
                <h5 className="text-2xl -tracking-wider  font-bold ">社交活动</h5>

                <p className=" opacity-80">参加社交活动和与他人互动。 无论是参加圣经学习、迎婴派对，还是每周日崇拜——都有机会结交志同道合的朋友。</p>
            </div>
        </div>
    </div>
  )
}

export default BenefitsofJoin