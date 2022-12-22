import React from 'react'

const Offerings = () => {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center'>

      <div className=' w-full h-full flex flex-col justify-center items-center  bg-gradient-radial mx-auto px-8 mb-10 py-6 text-xl text-color-text '>
        <h5 className=' font-bold text-xl py-6 text-center text-brightRed '>
          陶朗加基督教华人卫理公会佳恩堂
        </h5>
        <h5 className=' font-bold text-xl py-6 text-center text-brightRed mb-5 '>
          信徒奉献表
        </h5>
        <p className=' font-bold text-lg text-color-text mb-5'>
          万军之耶和华说：你们要将当纳的十分之一，全然送入仓库，使我家有粮，以此试试我，是否为你们敞开天上的窗户，倾福与你们，甚至无处可容
        </p>
        <p className=' font-extrabold text-lg text-color-text'>
          玛拉基书 3:10
        </p>

      </div>

      <div className=' w-full h-full flex flex-col  items-center   px-8'>
      <p className=' text-color-text mb-10'>
        圣父，我所拥有的，没有一样不是你赐给我的。 我所有的一切都属于你，是用耶稣的宝血买来的。 倾尽所有于己，施而不舍，世人之道，汝不可也。

但慷慨是那些称基督为主的人的方式； 以自由的心爱祂，以更新的心意事奉祂。
        </p>
        <div>

        奉献种类
1.什一奉献
基督徒按照圣经的教导，将每月所得十分之一奉献予教会。
2.主日奉献
每主日的例常奉献，作为经常性事工之所需。
3.感恩奉献
感谢主在您身上、家庭、事业、生活中特别的祝福，向神献上感恩，依感动奉献予教
会。
4.宣教奉献
为宣教和布道事工（陶波小组，皇后镇事工，福音机构，神学院…等）之奉献。
5.建堂奉献
为本家建堂相关事工（建筑物、装潢、设备…等）之奉献。
        </div>
        <div className=''>

          <div className='  h-1 w-8 col-span-2  bg-gradient-bar mb-3'/>
          <p className='   mb-7 text-lg text-white'>请您在网上转帐时，注明以下项目</p>
          <div className=' h-1 w-8 col-span-2  bg-gradient-bar mb-3'/>
          <p className='  mb-7 text-lg text-white'>PARTICULAR: 认献者名字</p>
          <div className=' h-1 w-8 col-span-2  bg-gradient-bar mb-3'/>
          <p className='  mb-7 text-lg text-white'>REFERENCE: 个人编号 （如果有)</p>
          <div className=' h-1 w-8 col-span-2  bg-gradient-bar mb-3'/>
          <p className='  mb-7 text-lg text-white'>教会银行账号：12-3651-0001502-00</p>
        </div>
      </div>
    </div>
  )
}

export default Offerings