import Image from "next/image"
import Link from "next/link"

const ServeWorld = () => {
  return (
    <div className="  bg-home-serve-texture bg-cover bg-center    flex justify-center relative h-[500px] bg-fixed">
        {/* <Image 
            alt="serveworld"
            src='https://media.graphassets.com/7X80fnSIS56yUzsB37tN'
            fill
            className="absolute  object-cover opacity-60"
        /> */}
        {/* <div className=" bg-color-btn absolute"></div> */}
        <div className="absolute -top-16 bg-white rounded-lg  space-y-8 p-10 opacity-60 justify-center  mx-20 lg:w-80">
            <h4 className=' text-color-text-header text-3xl'>我们想为我们周围的世界服务</h4>
            <p>
            圣灵所结的果子，就是仁爱、喜乐、和平、忍耐、恩慈、良善、信实、温柔、节制。这样的事没有律法禁止。 《加拉太书》第5章22-23节


            </p>
        </div>
    </div>
  )
}

export default ServeWorld
