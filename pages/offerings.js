import React from 'react'

const Offerings = () => {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center'>

      <div className=' w-full h-full flex flex-col justify-center items-center  bg-gradient-radial mx-auto px-8 mb-10 py-3 text-xl text-color-text '>
        <h2 className=' font-bold text-xl text-center text-brightRedLight mb-5 '>
          陶朗加基督教华人卫理公会佳恩堂信徒奉献表
        </h2>
        <p className=' font-bold text-lg text-color-text mb-5'>
          万军之耶和华说：你们要将当纳的十分之一，全然送入仓库，使我家有粮，以此试试我，是否为你们敞开天上的窗户，倾福与你们，甚至无处可容
        </p>
        <p className=' font-extrabold text-lg text-color-text'>
          玛拉基书 3:10
        </p>
      </div>

      <div>
        <p className=' mx-auto px-8 mb-2 text-lg text-white'>请您在网上转帐时，注明以下项目</p>
        <p className=' mx-auto px-8 mb-2 text-lg text-white'>PARTICULAR: 认献者名字</p>
        <p className=' mx-auto px-8 mb-2 text-lg text-white'>REFERENCE: 个人编号 （如果有)</p>
        <p className=' mx-auto px-8 mb-2 text-lg text-white'>教会银行账号：12-3651-0001502-00</p>
      </div>
    </div>
  )
}

export default Offerings