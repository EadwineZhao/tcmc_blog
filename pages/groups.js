import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react"
import { getGroups } from "../services"

const Groups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getGroups()
    .then(data => setGroups(data))
  }, [])

  console.log(groups);
  return (
    <div className="container mx-auto  my-10 flex flex-col flex-wrap  justify-between lg:flex-row lg:max-w-[1200px]">
      {groups.map(group => {
        return(
          <div key={group.id} className="mx-auto mb-6 bg-white overflow-hidden rounded-lg shadow-lg items-stretch max-w-sm  lg:flex-[1_1_30%]">
            <div className="  inline-flex  items-stretch  flex-col  ">
              {/* <Link href="/groups"> */}
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
                <div className=" flex  flex-col gap-2 justify-between p-6">
                  <h3 className="font-bold text-xl mb-2">
                    小组名称：{group.name}
                  </h3>
                  <p>
                    组长：
                    {group.authors.map(author => {
                      return(
                        <span key={author.name} className=" mr-2">{author.name}</span>
                      )
                    })}
                  </p>
                  <p>
                    聚会时间：{group.startAt}
                  </p>
                  <p>
                    小组目标：{group.destination}
                  </p>
                </div>

              {/* </Link> */}
            </div>
          </div>
        )
      })}

    
    </div>
  )
}

export default Groups