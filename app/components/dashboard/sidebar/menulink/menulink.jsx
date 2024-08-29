import Link from 'next/link'
import React from 'react'

const Menulink = ({item}) => {
  return (
    <Link href={item.path} className='flex ms-5 mt-5 items-center gap-5  cursor-pointer hover:bg-bgHover hover:text-bgPrimary p-2 rounded-md'>
        <span className='text-[20px]'>{item.icon}</span>
        <span>{item.title}</span>
        
    </Link>
  )
}

export default Menulink