import Image from "next/image"

const Resources = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center  items-center">
        <p>

        亲爱的天父，感谢祢把神的话语，把真理赐给我们。求祢帮助我们愿意不断接受装备，属灵生命追求成长。好叫我们能够体会祢的美善，叫我们因此渐长，满有基督长成的身量。祷告奉主耶稣基督的名求。阿们。
        </p>
        <div className="relative">
            <Image 
                alt="edsystem1"
                src='https://res.cloudinary.com/dsgyshvb6/image/upload/v1671870060/church/education-system-1_l9zgaw.svg'
                className=" object-contain "
                width={700}
                height={3800}

                
            />
        </div>
    </div>
  )
}

export default Resources