import React from 'react'
import moment from 'moment/moment'
import Image from 'next/image';
import { RichText } from '@graphcms/rich-text-react-renderer';


const PostDetail = ( { post }) => {
  const content = post.content.raw;






  // const getContentFragment = (index, text, obj, type) => {
  //   let modifiedText = text;

  //   if (obj) {
  //     if (obj.bold) {
  //       modifiedText = (<b key={index}>{text}</b>);
  //     }

  //     if (obj.italic) {
  //       modifiedText = (<em key={index}>{text}</em>);
  //     }

  //     if (obj.underline) {
  //       modifiedText = (<u key={index}>{text}</u>);
  //     }
  //   }
    

  //   switch (type) {
  //     case 'heading-three':
  //       return <h3 key={index} className="text-xl text-white font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
  //     case 'paragraph':
  //       return <p key={index} className="mb-8 text-white">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
  //     case 'heading-four':
  //       return <h4 key={index} className="text-md font-semibold mb-4 text-white">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
  //     case 'image':
  //       return (
  //         <Image 
  //           key={index}
  //           alt={obj.title}
  //           height={obj.height}
  //           width={obj.width}
  //           src={obj.src}
  //         />

  //       );
  //     default:
  //       return modifiedText;
  //   }
  // };

  return (
    <div className=' text-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
      <div className='relative  overflow-hidden h-96 shadow-md mb-6' >

        <Image 
            src={post.featuredImage.url}
            alt={post.title}
            className='object-top object-cover rounded-t-lg'
            sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
    
            fill={true}
            // objectFit='cover'
            quality={50}
            priority={true}
        />
      </div>
      <div className='px-2 lg:px-0'>
        <div className='flex items-center mb-8 w-full'>
          {/* <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 ">

              <Image 
                alt={post.author.name}
                height={30}
                width={30}
                className='aligh-middle rounded-full h-auto w-auto'
                src={post.author.photo.url}
                quality={50}
              />
              <p className="inline align-middle text-white text-gray-700 ml-2 text-lg">{post.author.name}</p>
          </div> */}
          <div className="font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-color-pink " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className='align-middle text-base'>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </span>
          </div>
        </div>
        <h1 className="mb8 text-base font-semibold mb-5">
          {post.title}
        </h1>
        {/* {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
            
            return getContentFragment (index, children, typeObj, typeObj.type)

        })} */}
        <RichText 
          content={content} 


          renderers={{
          h1: ({ children }) => <h1 className=" ">{children}</h1>,
          h2: ({ children }) => <h2 className=" ">{children}</h2>,
          h5: ({ children }) => <h5 className=" text-2xl">{children}</h5>,
          h3: ({ children }) => <h3 className="">{children}</h3>,
          h4: ({ children }) => <h4 className="">{children}</h4>,
          p: ({ children }) => <p className=" mb-2">{children}</p>,
          bold: ({ children }) => <strong className="text-base">{children}</strong>,
          table: ({ children }) => <table className=' w-full'>{children}</table>,
          // table_row: ({ children }) => <tr className=' border-t-bubble-gum'>{children}</tr>,
          // table_head: ({ children }) => <th className=' border-b-2' >{children}</th>,
          table_cell: ({ children }) => <td className=' border px-1 py-2 border-b-brightRedLight   '>{children}</td>,

          iframe: ({ url, width, height}) => <iframe src={url} className="w-full h-72" ></iframe>,
          ul: ({ children }) => <ul class="list-disc list-inside my-4 text-lg">{children}</ul>,
          ol: ({ children }) => <ol class="list-decimal list-inside my-4 text-lg">{children}</ol>,
          li: ({ children }) => <li class="my-2 text-lg">{children}</li>,
          code: ({ children }) => <code class="bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-sm ">{children}</code>,
          code_block: ({ children }) => <pre class="bg-gray-100 dark:bg-gray-800 overflow-y-scroll rounded-md p-2 text-sm ">{children}</pre>,
          }}
        />


      </div>
    </div>
  )
}

export default PostDetail