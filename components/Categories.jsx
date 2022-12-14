import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);
  

  return (
    <div className='bg-[#042c54] shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl text-white mb-8 font-semibold border-b pb-4'>
        目录
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3 text-white'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories