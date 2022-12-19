import Image from "next/image"
import Link from "next/link"

const ServeWorld = () => {
  return (
    <div className="  bg-home-serve-texture bg-cover bg-center bg-no-repeat  flex justify-center relative h-[350px] lg:h-[500px] bg-fixed">
        {/* <Image 
            alt="serveworld"
            src='https://media.graphassets.com/7X80fnSIS56yUzsB37tN'
            fill
            className="absolute  object-cover opacity-60"
        /> */}
        {/* <div className=" bg-color-btn absolute"></div> */}
        <div className="absolute h-[60%] w-[90%] top-1/4 bg-white text-color-text-primary  font-bold rounded-lg  border-b-8 border-color-btn shadow-2xl  space-y-8  p-8 opacity-60  text-center lg:w-[50%] lg:h-[60%]">
            <h5 className=' text-color-text-header text-2xl'>我们想为周围的世界服务</h5>
            <p className=" font-bold">
              圣灵所结的果子，就是仁爱、喜乐、和平、忍耐、恩慈、良善、信实、温柔、节制。这样的事没有律法禁止。 《加拉太书》第5章22-23节
            </p>
        </div>
    </div>
  )
}

export default ServeWorld
