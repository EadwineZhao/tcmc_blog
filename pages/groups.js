import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react"
import { getGroups } from "../services"
import { email, person } from "../public/icon";

const Groups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getGroups()
    .then(data => setGroups(data))
  }, [])

  console.log(groups);
  return (
    <div className="container mx-auto my-16 lg:max-w-[1200px]">
      <div className="flex flex-col mt-[6rem] items-center justify-around px-[1rem] pb-[5rem]">
        <h1 className=" font-bold text-white text-[4.5rem]">
          佳恩堂小组
        </h1>
        <p className=" text-[1.25rem] text-color-blog-subheadline leading-6 font max-w-[567px]">
          邮件订阅，佳恩堂定期周刊，更新最新教会信息，教会活动
        </p>
        <section className=" py-6 text-center">
          <div className=" mx-auto max-w-[1200px]">
            <form className=" min-w-[500px] flex flex-col gap-4 lg:flex-row justify-between items-center">
              <div className="flex flex-col gap-4 lg:flex-row">
                <label className=" bg-white rounded-[10px] flex gap-4 h-12 py-[14px] items-center pr-[14px] pl-[26px]">
                  <div className="w-[18px] h-[18px]">
                    <Image 
                      alt="person"
                      src={person}
                      width={18}
                      height={18}
                    />
                  </div>
                  {/* value=""*/}
                  <input id="fname" type='text' name="FNAME" placeholder="名字"  />
                </label>
                <label className=" bg-white rounded-[10px] flex gap-4 h-12 py-[14px] items-center pr-[14px] pl-[26px]">
                  <div className="w-[18px] h-[18px]">
                    <Image 
                      alt="email"
                      src={email}
                      width={18}
                      height={18}
                    />
                  </div>
                                    {/* value=""*/}

                  <input id="email" type='text' name="EMAIL" placeholder="邮件地址" />
                </label>

              </div>
            </form>
          </div>
        </section>
      </div>
      <div className="article bg-white rounded-lg shadow-lg overflow-hidden mb-10 ">
        <Link href='#' className=" flex flex-col lg:flex-row ">
          <div className="relative flex-1 min-h-[321px] lg:w-1/2">
            <Image 
              alt="aaa"
              src='https://media.graphassets.com/XAffAVqlQtaA2qhznOPx'
              fill
              className=" object-cover object-center"
              sizes="
                      (max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2 justify-center p-6">
            <h2 className="font-bold text-color-blog-title text-[28px] mb-2">
              小组重中之重重中之重
            </h2>
            <p className=" text-color-blog-text">以小组形态，彰显耶稣的生命。 结构：形成小组关系网，帮助各人成长及建立相亲相爱的关系；小组隶属教会，表现合一性
            小组是每间健康教会不可或缺的，因为透过小组，我们才能经历教会生活的六个目标——就是敬拜、传福音、门徒训练、事奉、祷告和团契
            </p>
          </div>
        </Link>
      </div>
      <div className=" mx-auto flex flex-col flex-wrap justify-between lg:flex-row ">
        {groups.map(group => {
          return(
            <div key={group.id} className=" mb-6 bg-white overflow-hidden rounded-lg shadow-lg items-stretch max-w-sm  lg:flex-[1_1_30%]">
                <Link href="/groups" className="inline-flex   flex-col h-full ">
                  <div className="relative  h-[216px]  ">
                    <Image 
                      alt={group.name}
                      src={group.featuredImage.url}
                      fill
                      className=" object-cover object-center"
                      sizes="
                        (max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    />
                  </div>
                  <div className=" flex-grow flex  flex-col gap-2 justify-between p-6">
                    <h3 className="font-bold text-color-blog-title text-xl mb-2">
                      小组名称：{group.name}
                    </h3>
                    <p className=" text-color-blog-datetime">
                      聚会时间：{group.startAt}
                    </p>
                    <p className=" text-color-blog-text-2">
                      组长：
                      {group.authors.map(author => {
                        return(
                          <span key={author.name} className=" mr-2">{author.name}</span>
                        )
                      })}
                    </p>
                    <p className=" text-color-blog-text-2">
                      小组目标：{group.destination}
                    </p>
                    <div className="flex mt-[2rem] ">
                        <Link 
                          href="/groups"
                          className=" bg-color-blog-tag py-1 px-2 text-sm text-color-text-btn rounded "
                        >
                          团契，聚餐
                        </Link>
                    </div>
                  </div>
                </Link>
            </div>
          )
        })}
      </div>
    
    </div>
  )
}

export default Groups